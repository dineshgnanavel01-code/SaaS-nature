function CTA() {
  return (
    <section className="bg-green-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <span className="inline-block rounded-full bg-green-800 px-4 py-1.5 text-sm font-semibold text-green-100">
          Get Started
        </span>

        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to get started?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-green-100 sm:text-lg">
          Take the next step toward smarter, more sustainable growth with our
          powerful SaaS platform.
        </p>

        <a
          href="/signup"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-semibold text-green-800 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-50 hover:shadow-xl"
        >
          Sign Up
        </a>
      </div>
    </section>
  );
}

export default CTA;