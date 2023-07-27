import { FunctionComponent } from 'react'
import ApplicationThumbnailCard from './ApplicationThumbnailCard'
import { css } from '@emotion/react'
interface ApplicationsProps {}

const Applications: FunctionComponent<ApplicationsProps> = () => {
  return (
    <>
      <div css={applicationLayout}>
        <ApplicationThumbnailCard
          imgUrl="/src/assets/images/125.jpeg"
          title="Counter application"
          link="/counter"
        />
        <ApplicationThumbnailCard
          imgUrl="/src/assets/images/1416.jpeg"
          title="Todos application"
          link="/todos"
        />
        <ApplicationThumbnailCard
          imgUrl="/src/assets/images/450.jpeg"
          title="Timer"
          link="/timer"
        />
        <ApplicationThumbnailCard
          imgUrl="/src/assets/images/319.jpeg"
          title="Form"
          link="form"
        />
        <ApplicationThumbnailCard
          imgUrl="/src/assets/images/309.jpeg"
          title="Chat"
          link="chat"
        />
        <ApplicationThumbnailCard
          imgUrl="https://picsum.photos/seed/picsum/600/600"
          title="サンプルタイトル"
        />
        <ApplicationThumbnailCard
          imgUrl="https://picsum.photos/seed/picsum/600/600"
          title="サンプルタイトル"
        />
        <ApplicationThumbnailCard
          imgUrl="https://picsum.photos/seed/picsum/600/600"
          title="サンプルタイトル"
        />
        <ApplicationThumbnailCard
          imgUrl="https://picsum.photos/seed/picsum/600/600"
          title="サンプルタイトル"
        />
        <ApplicationThumbnailCard
          imgUrl="https://picsum.photos/seed/picsum/600/600"
          title="サンプルタイトル"
        />
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
