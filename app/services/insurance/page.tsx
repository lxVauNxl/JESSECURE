"use client";

export default function InsurancePage() {
  const calendlyLink =
    "https://calendly.com/plukjessicaodquin/30min";

  const plans = [
    {
      title: "Life Insurance",
      desc: "Protect your loved ones financially by ensuring they have the support they need when you're no longer around.",
      benefits: [
        "Family Financial Protection",
        "Income Replacement",
        "Death Benefit Coverage",
        "Long-Term Security",
      ],
    },
    {
      title: "Health Insurance",
      desc: "Help cover medical expenses and reduce the financial burden of unexpected health issues.",
      benefits: [
        "Hospitalization Coverage",
        "Medical Expense Support",
        "Health Risk Protection",
        "Peace of Mind",
      ],
    },
    {
      title: "Investment Plans",
      desc: "Grow your wealth while maintaining financial protection through investment-linked insurance solutions.",
      benefits: [
        "Investment Growth",
        "Insurance Protection",
        "Long-Term Wealth Building",
        "Financial Goal Planning",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-700 to-[#1a0d05] py-24 text-white">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
            Protect What Matters Most
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Insurance Protection Plans
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200">
            Secure your future with insurance solutions designed to
            protect your family, your health, and your financial goals.
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

      {/* INSURANCE PLANS */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-red-700">
              Our Insurance Solutions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Comprehensive protection plans tailored to your
              financial needs and life goals.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                  Free Consultation
                </div>

                <h3 className="mt-5 text-2xl font-bold text-red-700">
                  {plan.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {plan.desc}
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800">
                    What You'll Get:
                  </h4>

                  <ul className="mt-3 space-y-2">
                    {plan.benefits.map((benefit, i) => (
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
                  Trusted Protection
                </h3>

                <p className="mt-2 text-gray-200">
                  Insurance solutions designed around your needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Financial Security
                </h3>

                <p className="mt-2 text-gray-200">
                  Build confidence knowing your future is protected.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Free Consultation
                </h3>

                <p className="mt-2 text-gray-200">
                  Get expert guidance before making any decisions.
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

