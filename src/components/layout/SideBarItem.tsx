export default function SidebarItem(props) {
  const { to, icon, children } = props

  return (
    <a
      href={to}
      className="flex items-center gap-4 p-2 rounded overflow-hidden hover:bg-background transition-[background-color] duration-200 hover:no-underline focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[0xFF7DADD9] text-theme"
    >
      {/* <Icon className="flex-none w-8 h-[1em]" /> */}
      {children && <span>{children}</span>}
    </a>
  )
}
