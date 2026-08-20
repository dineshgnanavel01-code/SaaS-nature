function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f4f8f1] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
     
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-full items-center gap-12 lg:grid-cols-2">

        
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
            🌱 Smarter Technology. Greener Growth.
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-green-950 sm:text-5xl lg:text-6xl">
            Grow your business
            <span className="block text-green-700">
              naturally with SaaS.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0">
            Powerful digital solutions designed to help your business work
            smarter, improve productivity, and grow sustainably.
          </p>

        
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#contact"
              className="rounded-full bg-green-700 px-7 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-xl"
            >
              Get Started
            </a>

            <a
              href="#features"
              className="rounded-full border border-green-200 bg-white px-7 py-3.5 font-semibold text-green-700 transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:bg-green-50"
            >
              Explore Features
            </a>
          </div>

         
          <p className="mt-6 text-sm text-gray-500">
            ✓ Easy to use &nbsp; ✓ Secure &nbsp; ✓ Built for growth
          </p>
        </div>

      
        <div className="relative mx-auto w-full max-w-lg">

        
          <div className="relative z-10 overflow-hidden rounded-3xl border border-green-100 bg-white shadow-2xl">

           
           <img

  src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80"
  alt="SaaS Nature tech and sustainability"
  className="block h-96 w-full object-cover"
/>

            <div className="absolute inset-0 bg-green-950/55" />

            <div className="absolute inset-0 p-8 sm:p-10">
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-100">
                      Business Growth
                    </p>

                    <p className="mt-1 text-3xl font-bold text-white">
                      +84.6%
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl">
                    🌿
                  </div>
                </div>

                <div className="mt-8 flex h-32 items-end gap-2">
                  {[35, 50, 45, 65, 58, 78, 90].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-lg bg-white/80 transition duration-300 hover:bg-white"
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 -left-4 z-20 w-44 overflow-hidden rounded-2xl border border-green-100 bg-white shadow-xl sm:-left-8">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80"
              alt="Happy customers"
              className="block h-24 w-full object-cover"
            />

            <div className="px-4 py-3">
              <p className="text-xs font-medium text-gray-500">
                Happy Customers
              </p>

              <p className="mt-1 text-xl font-bold text-green-800">
                10,000+
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero