function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f4f8f1] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-full">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
            Contact Us
          </span>

          <h2 className="mt-4 text-3xl font-bold text-green-950 sm:text-4xl">
            Let’s grow together
          </h2>

          <p className="mt-4 text-gray-600">
            Have a question or want to learn more? We’d love to hear from you.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-green-100 p-6 shadow-lg sm:p-8">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-gray-500 px-4 py-3 text-black outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 placeholder:text-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-500 px-4 py-3 text-black outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 placeholder:text-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="How can we help?"
                className="w-full resize-none rounded-lg border border-gray-500 px-4 py-3 text-black outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 placeholder:text-black"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg sm:w-auto"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;