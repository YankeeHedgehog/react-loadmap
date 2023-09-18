import loadImage from 'blueimp-load-image'
import { ChangeEvent } from 'react'

export default function Exif() {
  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const file = e.target.files[0]

    // show files geo infomation
    loadImage(
      file,
      function (img: any, data: any) {
        console.log(img)
        var exif = img.exif
        var thumbnail = exif && exif.get('Thumbnail')
        // if (!img.imageHead) return
        // console.log(img.exif.get('Latitude'))
        console.log(exif)
        console.log(thumbnail)
      },
      { maxWidth: 600 }
    )
  }

  return <input type="file" onChange={uploadFile} accept="image/jpeg" />
}
