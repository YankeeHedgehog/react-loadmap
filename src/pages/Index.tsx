import { FC } from 'react'
import Sidebar from '../features/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { css } from '@emotion/react'
interface IndexProps {}

const Index: FC<IndexProps> = () => {
  return (
    <div css={layout}>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  )
}

export default Index

const layout = css`
  display: flex;
  gap: 1.5rem;
  background: lightgray;
`
