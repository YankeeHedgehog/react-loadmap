import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import ApplicationThumbnailCard, {
  ApplicationThumbnailCardProps,
} from './ApplicationThumbnailCard'
interface ApplicationsProps {
  pages: ApplicationThumbnailCardProps[]
}

const Applications: FunctionComponent<ApplicationsProps> = ({
  pages,
}: ApplicationsProps) => {
  return (
    <>
      <div css={applicationLayout}>
        {pages.map((page) => (
          <ApplicationThumbnailCard key={page.link} {...page} />
        ))}
      </div>
    </>
  )
}

export default Applications

const applicationLayout = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
  margin: 1rem;
`
