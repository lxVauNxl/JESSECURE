"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Assessment() {
  const [step, setStep] = useState(1);
  const [sending, setSending] = useState(false);

  const [answers, setAnswers] = useState({
  fullName: "",
  email: "",
  phone: "",

  dependents: "",
  supportAmount: "",
  supportYears: "",
  obligations: "",
  obligationAmount: "",
  medicalSources: [],
  insurancePreference: "",
  savingsDuration: "",
  monthlyExpenses: "",
  benefits: [],
  insuranceDetails: [],
  intent: "",
  timeline: "",
});

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (field, value) => {
    setAnswers({ ...answers, [field]: value });
  };

  // FIXED CHECKBOX LOGIC
  const handleCheckbox = (field, value) => {
    let updated = [...answers[field]];

    if (value === "None") {
      updated = updated.includes("None") ? [] : ["None"];
    } else {
      updated = updated.filter((v) => v !== "None");

      if (updated.includes(value)) {
        updated = updated.filter((v) => v !== value);
      } else {
        updated.push(value);
      }
    }

    setAnswers({ ...answers, [field]: updated });
  };

// VALIDATION
const isStepValid = () => {
  switch (step) {
    case 1:
      return answers.dependents !== "";

    case 2:
      return answers.supportAmount !== "";

    case 3:
      return answers.supportYears !== "";

    case 4:
      return answers.obligations !== "";

    case 5:
      return answers.medicalSources.length > 0;

    case 6:
      return answers.insurancePreference !== "";

    case 7:
      return answers.savingsDuration !== "";

    case 8:
      return answers.monthlyExpenses !== "";

    case 9:
      return answers.benefits.length > 0;

    case 10:
      return answers.insuranceDetails.length > 0;

    case 11:
      return answers.intent !== "";

    case 12:
      return answers.timeline !== "";

   case 13:
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^09\d{9}$/;

  return (
    answers.fullName.trim() !== "" &&
    emailRegex.test(answers.email) &&
    phoneRegex.test(answers.phone)
  );
    default:
      return true;
  }
};

const gaps = [];

if (
  answers.dependents !== "none" &&
  answers.benefits.includes("None")
) {
  gaps.push("Your dependents may not be financially protected.");
}

if (
  !answers.insuranceDetails.includes("Life Insurance")
) {
  gaps.push("You do not currently have life insurance coverage.");
}

if (
  !answers.insuranceDetails.includes("Critical Illness")
) {
  gaps.push("You may lack critical illness protection.");
}

if (
  answers.savingsDuration === "3" ||
  answers.savingsDuration === "help"
) {
  gaps.push("Emergency savings may be insufficient.");
}

const riskLevel =
  gaps.length >= 4
    ? "High"
    : gaps.length >= 2
    ? "Medium"
    : "Low";

return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
    <div className="w-full max-w-xl">

      <nav className="flex justify-between items-center mb-6">
  <a
    href="/"
    className="text-red-600 font-semibold hover:underline"
  >
   
  </a>

  <span className="font-bold text-xl text-red-700">
    JesSecure
  </span>
</nav>

    {/* PROGRESS BAR */}
    <div className="mb-4">
      <div className="flex justify-between text-sm text-gray-500 mb-2">
      <span>Assessment Progress</span>
      <span>{step}/14</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
      <div
      className="bg-red-600 h-2 rounded-full transition-all duration-300"
      style={{
      width: `${Math.min((step / 14) * 100, 100)}%`,
    }}
      />
      </div>
      </div>


    {/* CARD */}
      <div className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-6 sm:p-8">

      <div className="space-y-6 text-gray-800">

    {/* STEP 1 */}
      {step === 1 && (
      <>
      <h2 className="text-xl font-bold">
      Aside from yourself, is there anyone who depends on you financially?
      </h2>

    <div className="space-y-3">
    {[
    { label: "Yes, I'm the main provider", value: "main" },
    { label: "Yes, but I only share what I can", value: "partial" },
    { label: "No, but I give voluntarily", value: "voluntary" },
    { label: "No, I only support myself", value: "none" },
    ].map((opt) => (
    <label
    key={opt.value}
    className="flex items-start gap-3 border rounded-xl p-4 hover:bg-red-50 cursor-pointer"
    >
    <input
    type="radio"
    name="dependents"
    value={opt.value}
    checked={answers.dependents === opt.value}
    onChange={(e) =>
      handleChange("dependents", e.target.value)
  }
    className="mt-1 accent-red-600"
  />

    <span>{opt.label}</span>
    </label>
  ))}
    </div>
    </>
  )}

    {/* STEP 2 */}
    {step === 2 && (
    <>
    <h2 className="text-xl font-bold">
      Roughly what portion of your monthly income goes to supporting them?
    </h2>

    <input
    type="number"
    placeholder="Amount per MONTH"
    value={answers.supportAmount}
    className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-red-500 outline-none"
    onChange={(e) =>
      handleChange("supportAmount", e.target.value)
  }
    />

    <p className="text-sm text-gray-500">
      Input 0 if you don’t provide for others
    </p>
    </>
  )}

    {/* STEP 3 */}
    {step === 3 && (
    <>
    <h2 className="text-xl font-bold">
      For how many more years do you think they'll need your financial support?
    </h2>

    <input
    type="number"
    placeholder="Number of YEARS"
    value={answers.supportYears}
    className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-red-500 outline-none"
    onChange={(e) =>
      handleChange("supportYears", e.target.value)
  }
  />
    </>
  )}

    {/* STEP 4 */}
    {step === 4 && (
    <>
    <h2 className="text-xl font-bold">
      Do you have financial obligations after death?
    </h2>

    <div className="space-y-3">
    {["yes", "no"].map((val) => (
    <label
    key={val}
    className="flex items-center gap-3 border rounded-xl p-4 hover:bg-red-50 cursor-pointer"
    >
    <input
    type="radio"
    name="obligations"
    value={val}
    checked={answers.obligations === val}
    onChange={(e) =>
      handleChange("obligations", e.target.value)
  }
    className="accent-red-600"
    />

  <span className="capitalize">{val}</span>
  </label>
))}
  </div>

    {answers.obligations === "yes" && (
    <input
    type="number"
    placeholder="Total obligation amount"
    value={answers.obligationAmount}
    className="w-full border border-gray-300 rounded-xl p-4 mt-3"
    onChange={(e) =>
      handleChange("obligationAmount", e.target.value)
}
   />
)}
   </>
 )}

    {/* STEP 5 */}
    {step === 5 && (
    <>
    <h2 className="text-xl font-bold">
      If a major illness costs ₱1,000,000, where would you get the money?
    </h2>

  <div className="space-y-3">
{[
    "Savings",
    "PhilHealth",
    "Company Insurance",
    "Loans",
    "Donations",
    "Personal Insurance",
  ].map((item) => (
    <label
    key={item}
    className="flex items-center gap-3 border rounded-xl p-4 hover:bg-red-50 cursor-pointer"
    >
    <input
    type="checkbox"
    checked={answers.medicalSources.includes(item)}
    onChange={() =>
      handleCheckbox("medicalSources", item)
}
    className="accent-red-600"
    />

    <span>{item}</span>
    </label>
))}
    </div>
    </>
)}

    {/* STEP 6 */}
    {step === 6 && (
    <>
    <h2 className="text-xl font-bold">
       Would you prefer having personal insurance?
    </h2>

    <div className="space-y-3">
                  {[
                    "Yes, I want peace of mind",
                    "I'm good with my current setup",
                  ].map((opt) => (
                  <button
                  key={opt}
                  onClick={() =>
                  handleChange("insurancePreference", opt)
  }
            className={`w-full border rounded-xl p-4 transition ${
            answers.insurancePreference === opt
            ? "bg-red-600 text-white border-red-600"
            : "hover:bg-red-50"
  }`}
>
  {opt}
</button>
                  ))}
                </div>
              </>
            )}

            {/* STEP 7 */}
{step === 7 && (
  <>
    <h2 className="text-xl font-bold">
      If you stop working, how long can savings support you?
    </h2>

    <div className="space-y-3">
      {[
        { label: "3 months", value: "3" },
        { label: "6 months", value: "6" },
        { label: "1 year", value: "12" },
        { label: "Need help", value: "help" },
      ].map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() =>
            handleChange("savingsDuration", opt.value)
          }
          className={`w-full border rounded-xl p-4 transition ${
            answers.savingsDuration === opt.value
              ? "bg-red-600 text-white border-red-600"
              : "hover:bg-red-50"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  </>
)}
            {/* STEP 8 */}
            {step === 8 && (
              <>
                <h2 className="text-xl font-bold">
                  Monthly living expenses?
                </h2>

                <input
                  type="number"
                  placeholder="₱ per month"
                  value={answers.monthlyExpenses}
                  className="w-full border border-gray-300 rounded-xl p-4"
                  onChange={(e) =>
                    handleChange("monthlyExpenses", e.target.value)
                  }
                />
              </>
            )}

            {/* STEP 9 */}
            {step === 9 && (
              <>
                <h2 className="text-xl font-bold">
                  Which benefits do you have?
                </h2>

                <div className="space-y-3">
                  {[
                    "Personal Insurance",
                    "Company Insurance",
                    "PhilHealth",
                    "HMO",
                    "None",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-3 border rounded-xl p-4 hover:bg-red-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={answers.benefits.includes(item)}
                        onChange={() =>
                          handleCheckbox("benefits", item)
                        }
                        className="accent-red-600"
                      />

                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </>
            )}

            {/* STEP 10 */}
            {step === 10 && (
              <>
                <h2 className="text-xl font-bold">
                  Insurance benefits you have?
                </h2>

                <div className="space-y-3">
                  {[
                    "Life Insurance",
                    "Critical Illness",
                    "Disability",
                    "I don't remember",
                    "Not applicable",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-3 border rounded-xl p-4 hover:bg-red-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={answers.insuranceDetails.includes(item)}
                        onChange={() =>
                          handleCheckbox("insuranceDetails", item)
                        }
                        className="accent-red-600"
                      />

                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </>
            )}

  {/* STEP 11 */}
  {step === 11 && (
  <>
    <h2 className="text-xl font-bold">
      Why did you take this test?
    </h2>

    <div className="space-y-3">
      {[
        "Get insured",
        "Compare plans",
        "Learning",
      ].map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => handleChange("intent", opt)}
          className={`w-full border rounded-xl p-4 transition ${
            answers.intent === opt
              ? "bg-red-600 text-white border-red-600"
              : "hover:bg-red-50"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </>
)}
    {/* STEP 12 */}
{step === 12 && (
  <>
    <h2 className="text-xl font-bold">
      When will you get coverage?
    </h2>

    <div className="space-y-3">
      {[
        "ASAP",
        "3 months",
        "Within year",
        "Researching",
      ].map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => handleChange("timeline", opt)}
          className={`w-full border rounded-xl p-4 transition ${
            answers.timeline === opt
              ? "bg-red-600 text-white border-red-600"
              : "hover:bg-red-50"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </>
)}
{/* STEP 13 */}
{step === 13 && (
  <>
    <h2 className="text-xl font-bold">
      Almost Done! Where should we send your results?
    </h2>

    <p className="text-gray-600">
      Enter your details and we'll email your assessment results.
    </p>

    <div className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        value={answers.fullName}
        onChange={(e) =>
          handleChange("fullName", e.target.value)
        }
        className="w-full border border-gray-300 rounded-xl p-4"
      />

     <input
        type="email"
        placeholder="Email Address"
        value={answers.email}
        onChange={(e) =>
           handleChange("email", e.target.value)
  }
      className={`w-full border rounded-xl p-4 ${
      answers.email &&
         !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email)
         ? "border-red-500"
         : "border-gray-300"
  }`}
/>

      {answers.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email) && (
      <p className="text-red-500 text-sm">
      Please enter a valid email address.
  </p>
)}

      <input
  type="tel"
  placeholder="09XXXXXXXXX"
  value={answers.phone}
  onChange={(e) =>
    handleChange("phone", e.target.value)
  }
  className={`w-full border rounded-xl p-4 ${
    answers.phone &&
    !/^09\d{9}$/.test(answers.phone)
      ? "border-red-500"
      : "border-gray-300"
  }`}
/>

{answers.phone &&
!/^09\d{9}$/.test(answers.phone) && (
  <p className="text-red-500 text-sm">
    Please enter a valid Philippine mobile number.
  </p>
)}
    </div>
  </>
)}

{/* STEP 14 - RESULTS */}
{step === 14 && (
  <div className="space-y-6">

    <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center">
      <h2 className="text-3xl font-bold text-red-600">
        You Have {gaps.length} Protection Gaps
      </h2>

      <div className="mt-3 inline-block bg-white border border-red-200 px-4 py-2 rounded-full text-sm font-semibold text-red-600">
        Risk Level: {riskLevel}
      </div>

      <p className="mt-4 text-gray-700">
        Based on your answers, there are areas where your current
        financial protection may not fully cover future risks.
      </p>
    </div>

    <div className="bg-white border rounded-2xl p-6">
      <h3 className="font-bold text-lg mb-4">
        Identified Gaps
      </h3>

      <ul className="space-y-3">
        {gaps.map((gap, i) => (
          <li
            key={i}
            className="bg-red-50 border border-red-100 rounded-xl p-4"
          >
            {gap}
          </li>
        ))}
      </ul>
    </div>

<button
  disabled={sending}
  onClick={async () => {
    if (sending) return;

    setSending(true);

    try {
      const templateParams = {
        full_name: answers.fullName,
        email: answers.email,
        phone: answers.phone,
        risk_level: riskLevel,
        gaps: gaps.join(", "),
        recommendations:
          gaps.length > 0
            ? "Life Insurance, Health Protection, Financial Planning"
            : "Your current protection looks good.",
      };

      // Admin Email
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // Customer Email
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE,
        {
          ...templateParams,
          to_name: answers.fullName,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      alert("Assessment sent successfully!");
    } catch (error) {
      console.error("EmailJS Error:", error);

      if (error?.text) {
        console.error("EmailJS Message:", error.text);
      }

      alert("Failed to send email.");
    } finally {
      setSending(false);
    }
  }}
  className={`w-full py-4 rounded-xl font-semibold text-white transition ${
    sending
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-green-600 hover:bg-green-700"
  }`}
>
  {sending ? "Sending..." : "📧 Email My Results"}
</button>

<button
  onClick={() =>
    window.open(
      "https://calendly.com/coolboygamer107/30min",
      "_blank"
    )
  }
  className="w-full bg-red-600 hover:bg-red-700 transition text-white py-4 rounded-xl font-semibold"
>
  📅 Book Free Consultation
</button>

   

  </div>
)}

</div>

 {/* NAVIGATION */}
        {step < 14 && (
          <div className="mt-8 border-t pt-4 flex justify-between items-center">

            {step > 1 ? (
              <button
                onClick={prevStep}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                ← Prev
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={nextStep}
              disabled={!isStepValid()}
              className={`ml-auto px-6 py-3 rounded-xl text-white transition ${
                isStepValid()
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              NEXT →
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);
}