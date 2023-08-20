import { css } from '@emotion/react'
import { FC } from 'react'

export interface ApplicationThumbnailCardProps {
  imgUrl?: string
  title?: string
  link?: string
}

const ApplicationThumbnailCard: FC<ApplicationThumbnailCardProps> = ({
  imgUrl,
  title = '無題',
  link = '/',
}) => {
  return (
    <a href={link} css={cardStyle}>
      <img src={imgUrl} alt="" css={cardImgStyle} />
      <p css={cardTitleStyle}>{title}</p>
    </a>
  )
}

export default ApplicationThumbnailCard

const cardStyle = css`
  background-color: white;
`
const cardImgStyle = css`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
`

const cardTitleStyle = css`
  margin: 1rem 1rem 1.25rem;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: black;
`
