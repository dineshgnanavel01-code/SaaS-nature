import React from "react"

function Stats() {
  const statsList = [
    {
      id: 1,
      value: "99.99%",
      label: "Platform Reliability",
      description: "High-availability architecture backed by enterprise-grade SLA standards.",
      renderIcon: () => (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 2,
      value: "50K+",
      label: "Global Operations",
      description: "Data-driven decisions processed daily across enterprise workflows.",
      renderIcon: () => (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 3,
      value: "60%",
      label: "Efficiency Boost",
      description: "Average reduction in manual tracking and reporting overhead.",
      renderIcon: () => (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: 4,
      value: "< 50ms",
      label: "Response Latency",
      description: "Real-time data synchronization delivered directly to your dashboard.",
      renderIcon: () => (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section 
      id="stats" 
      className="relative overflow-hidden bg-green-950 py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-green-700/50 bg-green-900/60 px-4 py-1.5 text-sm font-semibold text-green-300">
            Statistics
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Empowering performance through key metrics
          </h2>
          <p className="mt-4 text-base text-green-100/70 sm:text-lg">
            See how LeafMetric provides low-latency, scalable insights to keep your systems operating at peak output.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statsList.map((stat) => (
            <div
              key={stat.id}
              className="group relative rounded-2xl border border-green-800/60 bg-green-900/30 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-green-500 hover:bg-green-900/50 hover:shadow-2xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-800/50 text-green-300 transition duration-300 group-hover:bg-green-500 group-hover:text-green-950">
                {stat.renderIcon()}
              </div>

              <p className="mt-6 text-4xl font-extrabold tracking-tight text-white">
                {stat.value}
              </p>

              <h3 className="mt-2 text-lg font-bold text-green-300">
                {stat.label}
              </h3>

              <p className="mt-2 text-sm leading-6 text-green-100/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats