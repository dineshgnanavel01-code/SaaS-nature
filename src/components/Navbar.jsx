import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Statistics", href: "#statistics" },
    { name: "About", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 backdrop-blur-md text-slate-800 shadow-sm transition-all">
      <div className="mx-auto flex max-w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        <a 
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")} 
          className="group text-2xl font-bold transition duration-300 hover:opacity-90"
        >
          <span className="text-green-700">Leaf</span>
          <span className="text-zinc-800 transition duration-300 group-hover:text-green-800">Metric</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-zinc-700 transition duration-200 hover:bg-green-50 hover:text-green-700"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hidden rounded-full bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-green-800 hover:shadow-md hover:shadow-green-700/20 active:scale-95 md:block"
        >
          Get Started
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="Toggle Navigation Menu"
          className="rounded-lg p-2 text-zinc-700 transition duration-200 hover:bg-green-50 hover:text-green-700 md:hidden"
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-emerald-100 bg-white px-4 py-6 shadow-lg md:hidden sm:px-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-700 transition duration-200 hover:bg-green-50 hover:text-green-700"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="mt-4 block rounded-full bg-green-700 py-3 text-center text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-green-800 active:scale-95"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar