import loadImage from 'blueimp-load-image'
import { ChangeEvent, useState } from 'react'

export default function Exif() {
  const [gpsInfo, setGpsInfo] = useState<GpsInfoType>()
  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const file = e.target.files[0]
    getGpsInfoByImage(file)
  }

  const getGpsInfoByImage = (file?: File) => {
    if (!file) return
    loadImage.parseMetaData(file, (data) => {
      const gpsInfo = data.exif?.get('GPSInfo')
      if (!gpsInfo) return
      const gpsInfoObject = Object(gpsInfo)
      setGpsInfo({
        latitude: gpsInfoObject.get('GPSLatitude'),
        latitudeRef: gpsInfoObject.get('GPSLatitudeRef'),
        longitude: gpsInfoObject.get('GPSLongitude'),
        longitudeRef: gpsInfoObject.get('GPSLongitudeRef'),
      })
    })
  }

  return (
    <>
      <input type="file" onChange={uploadImage} accept="image/jpeg" />
      <h2>Photo infomation</h2>
      <p>
        緯度: {gpsInfo?.latitude} {gpsInfo?.latitudeRef}
      </p>
      <p>
        経度: {gpsInfo?.longitude} {gpsInfo?.longitudeRef}
      </p>
    </>
  )
}

type GpsInfoType = {
  latitude: any
  latitudeRef: any
  longitude: any
  longitudeRef: any
}
