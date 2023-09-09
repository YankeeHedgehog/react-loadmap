import { css } from '@emotion/react'
import {
  AlignCenter,
  Apple,
  BookCopy,
  FileText,
  Home,
  Settings,
  Tag,
  X,
} from 'lucide-react'
import { ReactNode, useState } from 'react'
import SidebarButton, { link } from './components/SidebarButton'

const bgcolor = 'lightgray'
const maincolor = 'white'

const topLink: link = {
  icon: <Apple />,
  title: 'App',
  href: '/',
  isActive: false,
}

const links: link[] = [
  { id: 1, icon: <Home />, title: 'Apps', href: 'apps', isActive: false },
  {
    id: 2,
    icon: <BookCopy />,
    title: 'Libraries',
    href: 'libraries',
    isActive: false,
  },
  { id: 3, icon: <FileText />, title: 'Docs', href: 'docs', isActive: false },
  { id: 4, icon: <Tag />, title: 'Tags', href: '', isActive: false },
  { id: 5, icon: <Settings />, title: 'Settings', href: '', isActive: false },
]

export type TCurrentPage =
  | 'App'
  | 'Apps'
  | 'Libraries'
  | 'Docs'
  | 'Tags'
  | 'Settings'

type Sidebar = {
  children: ReactNode
}

export default function Sidebar({ children }: Sidebar) {
  const [currentPage, setCurrentPage] = useState<TCurrentPage>('Apps')

  const [hasTitle, setHasTitle] = useState<boolean>(true)

  const toggleHasTitle = () => setHasTitle((hasTitle) => !hasTitle)

  return (
    <>
      <div css={containerStyle}>
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
                    color={maincolor}
                    bgcolor={bgcolor}
                    hasTitle={hasTitle}
                    onClick={setCurrentPage}
                  />
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <div css={mainStyle(!hasTitle)}>{children}</div>
      </div>
    </>
  )
}

const containerStyle = css`
  display: flex;
  width: 100%;
  height: 100vh;
`

const mainStyle = (isOpen?: boolean) => css`
  width: calc(100% - ${isOpen ? 80 : 160}px);
`

const sidebarStyle = (isOpen?: boolean) => css`
  background-color: ${maincolor};
  width: ${isOpen ? 80 : 160}px;
  height: 100%;
`

const sidebarInnerStyle = css`
  position: sticky;
  top: 0px;
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
