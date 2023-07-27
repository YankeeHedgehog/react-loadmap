import { FC } from 'react'
import { css } from '@emotion/react'
import { Outlet } from 'react-router-dom'
interface ApplicationProps {}

const Application: FC<ApplicationProps> = () => {
  return (
    <>
      <div css={layout}>
        <Outlet />
      </div>
    </>
  )
}

export default Application

const layout = css`
  width: 100%;
  margin: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 15px;
`
