import SidebarItem from './SideBarItem'

export default function Sidebar() {
  return (
    <aside className="z-10 flex-none relative transition-[width] duration-[400ms] w-56">
      {/* The outer <aside> only exists to occupy space to squish #content; the inner <div> has position: fixed; */}
      <div className="p-4 text-lg bg-sidebar dark:bg-sidebar-dark fixed top-0 bottom-0 flex flex-col transition-[width] duration-[400ms] overflow-hidden whitespace-nowrap w-56">
        {/* Nav */}
        <nav className="flex flex-col gap-3 mt-3 h-full">
          <SidebarItem to="/" icon="">
            Home
          </SidebarItem>
          <SidebarItem to="/classes" icon="">
            Classes
          </SidebarItem>
          <SidebarItem to="/clubs" icon="">
            Clubs
          </SidebarItem>
          <SidebarItem to="/utilities" icon="">
            Utilities
          </SidebarItem>
          <SidebarItem to="/settings" icon="">
            Settings
          </SidebarItem>
        </nav>
      </div>
    </aside>
  )
}
