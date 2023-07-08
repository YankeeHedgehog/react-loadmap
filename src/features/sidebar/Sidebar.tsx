import {
  Apple,
  Home,
  User,
  FileText,
  Tag,
  Settings,
  X,
  AlignCenter,
} from 'lucide-react'
import SidebarButton, { link } from './components/SidebarButton'
import { useState } from 'react'
import { css } from '@emotion/react'

const topLink: link = {
  icon: <Apple />,
  title: 'App',
  href: '/',
  isActive: false,
}

const links: link[] = [
  { id: 1, icon: <Home />, title: 'Home', href: '', isActive: false },
  { id: 2, icon: <User />, title: 'Profile', href: '', isActive: false },
  { id: 3, icon: <FileText />, title: 'Docs', href: '', isActive: false },
  { id: 4, icon: <Tag />, title: 'Tags', href: '', isActive: false },
  { id: 5, icon: <Settings />, title: 'Settings', href: '', isActive: false },
]

export type TCurrentPage =
  | 'App'
  | 'Home'
  | 'Profile'
  | 'Docs'
  | 'Tags'
  | 'Settings'

export default function Sidebar() {
  const [currentPage, setCurrentPage] = useState<TCurrentPage>('Home')
  const [hasTitle, setHasTitle] = useState<boolean>(true)

  const toggleHasTitle = () => setHasTitle((hasTitle) => !hasTitle)

  return (
    <>
      <aside css={sidebarStyle(!hasTitle)}>
        <div css={sidebarInnerStyle}>
          <div css={logoStyle}>
            {hasTitle ? (
              <>
                <SidebarButton link={topLink} hasTitle={hasTitle} />
                <X
                  style={{ marginRight: '1rem' }}
                  size={42}
                  onClick={toggleHasTitle}
                />
              </>
            ) : (
              <AlignCenter
                style={{ padding: '1rem' }}
                onClick={toggleHasTitle}
              />
            )}
          </div>

          <ul css={linkListStyle}>
            {links.map((listItem) => (
              <li key={listItem.id} css={linkListItemStyle}>
                <SidebarButton
                  link={{
                    ...listItem,
                    isActive: currentPage === listItem.title,
                  }}
                  color="red"
                  bgcolor="white"
                  hasTitle={hasTitle}
                  onClick={setCurrentPage}
                />
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}

const sidebarStyle = (isOpen?: boolean) => css`
  background-color: lightgray;
  width: ${isOpen ? 80 : 160}px;
  height: 100vh;
`

const sidebarInnerStyle = css`
  padding-left: 1rem;
`

const logoStyle = css`
  display: flex;
  align-items: center;
`

const linkListStyle = css`
  margin: 0;
  padding: 1rem 0;
`

const linkListItemStyle = css`
  list-style-type: none;
  padding: 0.5rem 0;
`
