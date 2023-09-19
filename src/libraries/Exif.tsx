import loadImage from 'blueimp-load-image'
import { ChangeEvent, useState } from 'react'

export default function Exif() {
  const [fileInputed, setFileInputed] = useState<File>()
  const [gpsGeoInfo, setGpsGeoInfo] = useState<GpsGeoInfoType>()
  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const file = e.target.files[0]
    setFileInputed(file)
  }

  const getGpsInfoByImage = (file?: File) => {
    if (!file) return
    loadImage.parseMetaData(file, (data) => {
      const gpsInfo = data.exif?.get('GPSInfo')
      if (!gpsInfo) return
      const gpsLatitude = Object(gpsInfo).get('GPSLatitude')
      const gpsLongitude = Object(gpsInfo).get('GPSLongitude')
      console.log(gpsLatitude, gpsLongitude)
      setGpsGeoInfo({ latitude: gpsLatitude, longitude: gpsLongitude })
    })
  }
  getGpsInfoByImage(fileInputed)

  return (
    <>
      <input type="file" onChange={uploadImage} accept="image/jpeg" />
      <h2>Photo infomation</h2>
      <p>Latitude: {gpsGeoInfo?.latitude}</p>
      <p>Logtitude: {gpsGeoInfo?.longitude}</p>
    </>
  )
}

type GpsGeoInfoType = {
  latitude: any
  longitude: any
}
