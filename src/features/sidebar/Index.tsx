import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function SidebarIndex() {
  return (
    <>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  )
}
