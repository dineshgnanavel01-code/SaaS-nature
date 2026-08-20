function Features() {
  const featuresList = [
    {
      id: 1,
      title: "Sustainable Analytics",
      description: "Track your resource consumption and carbon footprint with real-time actionable insights.",
      renderIcon: () => (
        <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-12L3 15" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9A9 9 0 0 1 3 12c0-4.97 4.03-9 9-9z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Lightning Performance",
      description: "Optimized infrastructure ensuring ultra-fast processing speeds with low power usage.",
      renderIcon: () => (
        <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Enterprise Security",
      description: "End-to-end encryption keeping your business data fully protected and compliant.",
      renderIcon: () => (
        <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Automated Workflows",
      description: "Streamline repetitive operations with intelligent trigger-based workflow automation.",
      renderIcon: () => (
        <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Global Collaboration",
      description: "Connect remote teams seamlessly with shared workspaces and real-time synchronization.",
      renderIcon: () => (
        <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Smart Insights",
      description: "AI-driven reporting that helps you make informed decisions to scale your operations.",
      renderIcon: () => (
        <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ]

  return (
    <section
      id="features"
      className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-full">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
            Features
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-green-950 sm:text-4xl lg:text-5xl">
            Everything you need to grow smarter
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Powerful and simple tools designed to help your business become
            more efficient, productive, and sustainable.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((feature) => (
            <div
              key={feature.id}
              className="group rounded-2xl border border-green-100 bg-[#f8fbf6] p-6 transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:bg-white hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700 transition duration-300 group-hover:scale-110 group-hover:bg-green-700 group-hover:text-white">
                {feature.renderIcon()}
              </div>

              <h3 className="mt-6 text-xl font-bold text-green-950">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {feature.description}
              </p>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-green-700 transition-all duration-300 hover:gap-3 hover:text-green-900"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features