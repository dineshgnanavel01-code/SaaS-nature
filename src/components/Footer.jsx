function Footer() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Stats", href: "#stats" },
    { name: "About", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-green-950 text-white">
      <div className="mx-auto max-w-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="text-2xl font-bold">
              Leaf<span className="text-green-400">Metric</span>
            </a>

            <p className="mt-4 max-w-full text-sm leading-7 text-green-100/70">
              Smart, sustainable technology designed to help modern
              businesses grow naturally.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>

            <div className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-green-100 transition duration-200 hover:translate-x-1 hover:text-green-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">Contact</h3>

            <div className="mt-5 space-y-3 text-sm text-green-100/70">
              <p>Email: hello@LeafMetric.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Available Monday – Friday</p>
            </div>
          </div>
        </div>

     
        <div className="mt-10 flex flex-col gap-4 border-t border-green-800 pt-6 text-sm text-green-100/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} LeafMetric. All rights reserved.</p>
          <p>Built for a smarter, greener future 🌱</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer