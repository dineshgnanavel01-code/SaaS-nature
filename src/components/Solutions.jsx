function Solutions() {
  const solutions = [
    {
      icon: "🌱",
      title: "Sustainable Growth",
      description:
        "Build efficient business processes that support long-term, sustainable growth.",
    },
    {
      icon: "⚡",
      title: "Workflow Automation",
      description:
        "Automate repetitive tasks and give your team more time to focus on what matters.",
    },
    {
      icon: "📊",
      title: "Smart Analytics",
      description:
        "Turn your business data into useful insights and make better decisions faster.",
    },
    {
      icon: "🔒",
      title: "Secure Platform",
      description:
        "Keep your business information protected with reliable and secure technology.",
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description:
        "Connect your team and keep everyone aligned with simple collaboration tools.",
    },
    {
      icon: "🚀",
      title: "Scalable Technology",
      description:
        "Use flexible solutions that grow alongside your business and changing needs.",
    },
  ]

  return (
    <section
      id="solutions"
      className="bg-[#f4f8f1] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-full">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
            Solutions
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-green-950 sm:text-4xl lg:text-5xl">
            Solutions built for modern businesses
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Everything you need to simplify your workflow, empower your team,
            and create sustainable business growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl transition duration-300 group-hover:bg-green-700 group-hover:scale-110">
                {solution.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-green-950">
                {solution.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {solution.description}
              </p>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-green-700 transition hover:gap-3 hover:text-green-900"
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

export default Solutions