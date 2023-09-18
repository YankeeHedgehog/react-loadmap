import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { TCurrentPage } from '../Sidebar'

export type link = {
  id?: number
  icon: ReactNode
  title: TCurrentPage
  href: string
  isActive: boolean
}

type Props = {
  link: link
  color?: string
  bgcolor?: string
  hasTitle?: boolean
  onClick?: (title: TCurrentPage) => void
}

export default function SidebarButton({
  link,
  color,
  bgcolor,
  hasTitle = true,
  onClick,
}: Props) {
  const navigate = useNavigate()

  return (
    <button
      css={[
        linkStyle(color, color),
        link.isActive && activeLinkStyle(color, bgcolor),
      ]}
      onClick={() => {
        onClick && onClick(link.title)
        navigate(link.href)
      }}
    >
      <span>{link.icon}</span>
      {hasTitle && <span css={linkTitleStyle}>{link.title}</span>}
    </button>
  )
}

const linkStyle = (activeColor?: string, bgcolor = 'white') => css`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
  background: ${bgcolor};
  /* reset button css */
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }

  &:hover {
    color: gray;
  }
`

const activeLinkStyle = (color?: string, bgcolor?: string) => css`
  ${linkStyle(color)};
  background: ${bgcolor};
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -15px;
    right: 0;
    width: 15px;
    height: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 5px 5px 0 5px ${bgcolor};
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    right: 0;
    width: 15px;
    height: 15px;
    border-top-right-radius: 15px;
    box-shadow: 5px -5px 0 5px ${bgcolor};
  }
`

const linkTitleStyle = css`
  margin-left: 0.5rem;
`
