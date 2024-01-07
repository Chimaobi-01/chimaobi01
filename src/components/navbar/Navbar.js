

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-16 px-32">
        <span className="logo font-extrabold text-4xl">CC.</span>
        <ul className="flex items-center gap-10 text-slate-500">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contacts</li>
        </ul>
    </nav>
  )
}

export default Navbar