"use client";

export default function Page() {
  const services = [
    {
      title: "Will Planning",
      desc: "Ensure your assets are distributed according to your wishes.",
      benefits: [
        "Beneficiary Planning",
        "Asset Review",
        "Family Protection Guidance",
      ],
    },
    {
      title: "Asset Protection",
      desc: "Protect your wealth from risks and unexpected events.",
      benefits: [
        "Risk Assessment",
        "Insurance Review",
        "Wealth Preservation",
      ],
    },
    {
      title: "Estate Transfer",
      desc: "Smoothly transfer your assets to your beneficiaries.",
      benefits: [
        "Legacy Planning",
        "Estate Distribution",
        "Transfer Guidance",
      ],
    },
  ];

  const calendlyLink =
    "https://calendly.com/coolboygamer107/30min";

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO / POSTER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-700 to-[#1a0d05] py-24 text-white">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
            Secure Your Legacy
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Estate Protection Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200">
            Protect your family's future through proper estate planning,
            wealth preservation, and beneficiary protection strategies.
          </p>

          <button
            onClick={() =>
              window.open(
                calendlyLink,
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-red-700 shadow-lg transition hover:scale-105"
          >
            Book Free Consultation
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-red-700">
              Our Estate Protection Solutions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Personalized guidance to help protect your assets,
              preserve your wealth, and secure your family's future.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                  Free Consultation
                </div>

                <h3 className="mt-5 text-2xl font-bold text-red-700">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {service.desc}
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800">
                    What You'll Get:
                  </h4>

                  <ul className="mt-3 space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <span className="text-green-600">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() =>
                    window.open(
                      calendlyLink,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="mt-8 w-full rounded-xl bg-red-700 py-3 font-semibold text-white transition hover:bg-red-800"
                >
                  Book Free Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-gradient-to-r from-red-700 to-[#1a0d05] p-12 text-center text-white">
            <h2 className="text-4xl font-bold">
              Why Choose JesSecure?
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-semibold">
                  Personalized Advice
                </h3>

                <p className="mt-2 text-gray-200">
                  Solutions tailored to your family's needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Financial Protection
                </h3>

                <p className="mt-2 text-gray-200">
                  Strategies focused on long-term security.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Free Consultation
                </h3>

                <p className="mt-2 text-gray-200">
                  No obligation, just expert guidance.
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                window.open(
                  calendlyLink,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-red-700 shadow-lg transition hover:scale-105"
            >
              Schedule Your Consultation Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

