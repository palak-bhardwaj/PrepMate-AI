import React from "react";

const QuantAptitude = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-[var(--color-text-main)] bg-gradient-to-b from-[#fafdff] to-[#f0f6ff]">
      <h1 className="text-4xl font-bold mb-6 text-[var(--color-accent-dark)]">🧮 Quantitative Aptitude</h1>
      <p className="mb-8 text-lg text-[var(--color-text-muted)]">
        Quantitative Aptitude tests your numerical and problem-solving skills. It includes arithmetic, algebra, geometry, and data-related questions. Speed, accuracy, and logical reasoning are crucial.
      </p>

      {/* Theory Section */}
      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-[var(--color-accent-light)]">
          <h2 className="text-2xl font-semibold text-[var(--color-accent-dark)] mb-3">📚 Theory</h2>
          <ul className="list-disc pl-5 space-y-2 text-[var(--color-text-main)]">
            <li><strong>Number System:</strong> Divisibility, LCM/HCF, factorials</li>
            <li><strong>Percentages:</strong> Profit & Loss, Discount, Marked Price</li>
            <li><strong>Ratio & Proportion:</strong> Partnership, Mixture</li>
            <li><strong>Algebra:</strong> Linear & Quadratic equations, simplification</li>
            <li><strong>Mensuration:</strong> Area, Volume of 2D & 3D figures</li>
            <li><strong>Time-based Problems:</strong> Time & Work, Time & Distance</li>
            <li><strong>Simple & Compound Interest</strong></li>
          </ul>
        </div>
 <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-accent)]">🎯 Theory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Number System",
              content:
                "Covers whole numbers, integers, rational numbers, and their properties like divisibility, LCM, HCF, and factors.",
            },
            {
              title: "Percentages",
              content:
                "Understanding percentages, percentage change, profit/loss, and discount applications in real scenarios.",
            },
            {
              title: "Simple & Compound Interest",
              content:
                "Basic formulae and their differences; solving interest problems over different time periods.",
            },
            {
              title: "Time, Speed, and Distance",
              content:
                "Formulas and shortcuts to solve problems involving travel, trains, boats, and relative speed.",
            },
            {
              title: "Ratio & Proportion",
              content:
                "Concepts of direct, inverse variation, and applications in mixture, partnership, and more.",
            },
            {
              title: "Algebra",
              content:
                "Includes simplification, linear/quadratic equations, identities, and algebraic expressions.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-5 transition hover:shadow-xl border-l-4 border-[var(--color-accent-light)]"
            >
              <h3 className="text-xl font-semibold text-[var(--color-accent)] mb-2">{card.title}</h3>
              <p className="text-[var(--color-text-muted)]">{card.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE QUESTIONS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-accent)]">🧠 Practice Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "If a train travels 120 km in 2 hours, what is its speed in km/hr?",
            "A shopkeeper gives 20% discount on an item. If the marked price is ₹500, what is the selling price?",
            "What is the compound interest on ₹5000 at 10% per annum for 2 years?",
            "In how many ways can the letters of the word 'MATH' be arranged?",
            "If A:B = 3:4 and B:C = 2:5, what is the ratio A:C?",
            "Find the value of x: 2x + 3 = 15."
          ].map((q, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition"
            >
              <p className="font-medium text-[var(--color-text-main)]">Q{i + 1}: {q}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIPS AND TRICKS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-accent)]">💡 Tips & Tricks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Learn multiplication tables up to 20 for faster calculations.",
            "Use ratio box or alligation method to solve mixture problems quickly.",
            "Convert percentage to fraction to reduce steps (e.g., 25% = 1/4).",
            "Practice mental math to reduce calculator dependency.",
            "Eliminate wrong options in MCQs using estimation.",
            "Use shortcuts for squares and cubes (e.g., (a+b)^2 = a^2 + 2ab + b^2)."
          ].map((tip, i) => (
            <div
              key={i}
              className="bg-[#f4f9ff] border-l-4 border-[var(--color-accent)] p-4 rounded-lg shadow-sm"
            >
              <p className="text-[var(--color-text-muted)]">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ADDITIONAL INFO */}
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-accent)]">📚 Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Practice Daily",
              desc: "Set aside 30–45 minutes daily for aptitude practice to build speed and consistency.",
            },
            {
              title: "Mock Tests",
              desc: "Take full-length mock tests under time limits to simulate exam pressure.",
            },
            {
              title: "Topic-Wise Tracking",
              desc: "Track which topics you’re weak in and revise them regularly with short notes.",
            },
            {
              title: "Revision Formula Sheet",
              desc: "Prepare a one-page sheet of all important formulas and review it before practice.",
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-md border-l-4 border-[var(--color-accent)]">
              <h3 className="font-bold text-[var(--color-accent-dark)] text-lg mb-1">{item.title}</h3>
              <p className="text-[var(--color-text-muted)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
        {/* Tips & Tricks */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-[var(--color-accent-light)]">
          <h2 className="text-2xl font-semibold text-[var(--color-accent-dark)] mb-3">💡 Tips & Tricks</h2>
          <ul className="list-disc pl-5 space-y-2 text-[var(--color-text-main)]">
            <li>Memorize squares (1–30) and cubes (1–20) for fast calculation</li>
            <li>Use approximation for faster solving in options-based questions</li>
            <li>Vedic Maths shortcuts can boost speed drastically</li>
            <li>Draw diagrams where applicable (geometry/mensuration)</li>
            <li>Scan all options before solving—sometimes options are hints</li>
          </ul>
        </div>
      </section>

      {/* Practice Questions */}
      <section className="bg-white rounded-xl shadow-lg p-6 border border-[var(--color-accent-light)] mb-12">
        <h2 className="text-2xl font-semibold text-[var(--color-accent-dark)] mb-4">📝 Practice Questions</h2>
        <ol className="list-decimal pl-6 space-y-3 text-[var(--color-text-main)]">
          <li>
            A train 150m long passes a man walking at 6 km/h in the opposite direction in 7.2 seconds. Find the speed of the train.
          </li>
          <li>
            A can do a piece of work in 20 days and B in 30 days. If both work together, in how many days will the work be finished?
          </li>
          <li>
            If 15% of x is equal to 20% of y, find the ratio of x to y.
          </li>
          <li>
            A person sells an article at a profit of 20%. If he had sold it for ₹60 more, he would have gained 30%. Find the cost price.
          </li>
          <li>
            A sum of ₹12,000 is invested at 10% per annum compound interest. What will be the amount after 2 years?
          </li>
        </ol>
      </section>

      {/* Additional Info */}
      <section className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-5 border border-[var(--color-accent-light)]">
          <h3 className="text-xl font-semibold text-[var(--color-accent-dark)] mb-2">🔎 Common Pitfalls</h3>
          <ul className="list-disc pl-4 text-[var(--color-text-main)] space-y-1">
            <li>Rushing without reading the full question</li>
            <li>Skipping units (m/s, km/hr, %, etc.)</li>
            <li>Not managing time—spending too long on tough problems</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 border border-[var(--color-accent-light)]">
          <h3 className="text-xl font-semibold text-[var(--color-accent-dark)] mb-2">📘 Books for Practice</h3>
          <ul className="list-disc pl-4 text-[var(--color-text-main)] space-y-1">
            <li>RS Aggarwal – Quantitative Aptitude</li>
            <li>Arun Sharma – Quant for CAT</li>
            <li>SSC-CGL Tier I & II Practice Books</li>
            <li>Fast Track Objective Arithmetic by Rajesh Verma</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default QuantAptitude;
