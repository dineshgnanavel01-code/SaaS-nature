function Statistics() {
  const stats = [
    {
      number: "10K+",
      label: "Happy Customers",
    },
    {
      number: "98%",
      label: "Customer Satisfaction",
    },
    {
      number: "50+",
      label: "Countries Reached",
    },
    {
      number: "24/7",
      label: "Reliable Support",
    },
  ]

  return (
    <section 
      id="statistics" 
      className="bg-green-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-green-800 px-4 py-1.5 text-sm font-semibold text-green-100">
            Our Impact
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            By the Numbers
          </h2>

          <p className="mt-4 text-green-100">
            Trusted by businesses around the world to simplify their work and
            achieve sustainable growth.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-green-800 bg-green-900/50 p-6 text-center transition duration-300 hover:-translate-y-2 hover:bg-green-800 hover:shadow-xl sm:p-8"
            >
              <p className="text-3xl font-extrabold text-white transition duration-300 group-hover:text-green-300 sm:text-4xl lg:text-5xl">
                {stat.number}
              </p>

              <p className="mt-3 text-sm font-medium text-green-200 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics