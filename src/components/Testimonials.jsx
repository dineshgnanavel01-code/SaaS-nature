function Testimonials() {
  const testimonials = [
    {
      name: "Karun Dash",
      role: "Founder, GreenTech",
      quote:
        "LeafMetric has completely transformed the way our team works. We are more productive, organized, and confident in our growth.",
      avatar: "SJ",
    },
    {
      name: "Vinoth Khan",
      role: "CEO, EcoWorks",
      quote:
        "The platform is incredibly easy to use. Our team was able to get started quickly, and the results have been amazing.",
      avatar: "MC",
    },
    {
      name: "Sarvanan Kumar",
      role: "Operations Manager",
      quote:
        "A beautifully designed platform with powerful features. It has helped us streamline our workflow and save valuable time.",
      avatar: "PS",
    },
  ]

  return (
    <section
      className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-full">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
            Testimonials
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-green-950 sm:text-4xl lg:text-5xl">
            What People Say
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            See why businesses choose NatureSaaS to simplify their work and
            grow with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="group rounded-2xl border border-green-100 bg-[#f8fbf6] p-7 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
            >
              <div className="flex gap-1 text-lg text-green-600">
                ★ ★ ★ ★ ★
              </div>

              <blockquote className="mt-5 text-base leading-7 text-gray-600">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-7 flex items-center gap-4 border-t border-green-100 pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 font-bold text-white transition duration-300 group-hover:scale-110">
                  {testimonial.avatar}
                </div>

                <div>
                  <h3 className="font-semibold text-green-950">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials