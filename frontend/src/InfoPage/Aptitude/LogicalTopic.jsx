import React from "react";

const LogicalAptitude = () => {
  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f0f6ff] max-w-6xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-6 text-[var(--color-accent-dark)]">🧠 Logical Aptitude</h1>
      <p className="text-lg text-[var(--color-text-muted)] mb-10">
        Logical Aptitude evaluates a candidate's ability to analyze patterns, interpret data, and solve reasoning-based questions. This is crucial for cracking competitive exams, job assessments, and improving problem-solving skills.
      </p>

      {/* Theory Section */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6 border border-purple-100">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">🔍 Series & Sequences</h2>
          <p>Identify numeric, alphabetic, or mixed patterns. Requires understanding of progressions and logical shifts.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-purple-100">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">🧩 Coding-Decoding</h2>
          <p>Translate words or sentences into codes using logical operations like shifting alphabets, reversing, or mathematical rules.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-purple-100">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">🔗 Blood Relations</h2>
          <p>Determine family relationships from textual descriptions. Diagrams help visualize the relationships.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-purple-100">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">🏠 Direction Sense</h2>
          <p>Track a person’s path based on directions and distances. Practice converting left/right turns and compass-based moves.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-purple-100">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">🔃 Syllogisms</h2>
          <p>Logical deductions using Venn diagrams or direct analysis of statements and conclusions.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-purple-100">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">📊 Data Sufficiency</h2>
          <p>Assess whether provided data is sufficient to answer a question without solving it completely.</p>
        </div>
      </section>

      {/* Practice Questions Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">📝 Practice Questions</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              q: "Find the next number: 2, 4, 8, 16, ?",
              a: "Answer: 32 (Each number is doubled)"
            },
            {
              q: "If 'FOOD' is coded as 'GPPD', what is the code for 'GOOD'?",
              a: "Answer: HPPD (Each letter incremented by 1)"
            },
            {
              q: "A is the father of B. B is the brother of C. How is A related to C?",
              a: "Answer: Father"
            },
            {
              q: "Ravi walks north for 10m, turns right, walks 5m, turns right, walks 10m. How far is he from the start?",
              a: "Answer: 5m (forms a rectangle)"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg border border-purple-100 shadow-md">
              <p className="font-medium mb-2">Q: {item.q}</p>
              <p className="text-green-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips & Tricks Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">💡 Tips & Tricks</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border-l-4 border-purple-400 shadow">
            <h3 className="text-lg font-semibold mb-2">Practice Timed Sets</h3>
            <p>Use online resources or mock tests to solve logical problems under time pressure to improve speed.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border-l-4 border-purple-400 shadow">
            <h3 className="text-lg font-semibold mb-2">Use Elimination</h3>
            <p>In multiple-choice, eliminate incorrect or illogical options first to improve accuracy.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border-l-4 border-purple-400 shadow">
            <h3 className="text-lg font-semibold mb-2">Draw Diagrams</h3>
            <p>Use charts or tables for blood relations, directions, or puzzles to visualize the logic better.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border-l-4 border-purple-400 shadow">
            <h3 className="text-lg font-semibold mb-2">Re-read Carefully</h3>
            <p>Ensure you don’t misinterpret statements. Logical reasoning often hides the key in the phrasing.</p>
          </div>
        </div>
      </section>
{/* Section: Practice Questions */}
<section className="mb-12">
  <h2 className="text-3xl font-semibold mb-6 text-[var(--color-accent)]">
    📝 Practice Questions
  </h2>
  <div className="grid sm:grid-cols-2 gap-6">
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-2 text-purple-600">🔹 Q1. Seating Arrangement</h3>
      <p className="mb-2 text-base">
        A, B, C, D, E and F are sitting in a circle. A is between D and B. F is between B and C. Who is sitting to the right of D?
      </p>
      <p className="font-semibold text-green-600">Answer: B</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-2 text-purple-600">🔹 Q2. Number Series</h3>
      <p className="mb-2 text-base">
        2, 6, 12, 20, 30, ? <br />Find the next number in the series.
      </p>
      <p className="font-semibold text-green-600">Answer: 42</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-2 text-purple-600">🔹 Q3. Blood Relation</h3>
      <p className="mb-2 text-base">
        Pointing to a girl, Raj said, “She is the daughter of the only son of my grandfather.” How is the girl related to Raj?
      </p>
      <p className="font-semibold text-green-600">Answer: Sister</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-2 text-purple-600">🔹 Q4. Statement & Conclusion</h3>
      <p className="mb-2 text-base">
        Statement: All roses are flowers. Some flowers fade quickly. <br />
        Conclusion: Some roses fade quickly. <br />
        Is the conclusion correct?
      </p>
      <p className="font-semibold text-red-600">Answer: No</p>
    </div>
  </div>
</section>
{/* Section: More Practice Questions */}
<section className="mb-12">
  <h2 className="text-3xl font-semibold mb-6 text-[var(--color-accent)]">
    🧠 More Practice Questions
  </h2>
  <div className="grid sm:grid-cols-2 gap-6">
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-2 text-purple-600">🔸 Q5. Coding-Decoding</h3>
      <p className="mb-2 text-base">
        If in a certain language, “MANGO” is written as “NZOHQ”, how is “APPLE” written in that language?
      </p>
      <p className="font-semibold text-green-600">Answer: BQQMF</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-2 text-purple-600">🔸 Q6. Direction Sense</h3>
      <p className="mb-2 text-base">
        A man walks 4 km north, then turns right and walks 3 km. Then he turns right again and walks 4 km. Which direction is he facing?
      </p>
      <p className="font-semibold text-green-600">Answer: South</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-2 text-purple-600">🔸 Q7. Letter Series</h3>
      <p className="mb-2 text-base">
        Find the missing letter in the series: A, C, F, J, O, ?
      </p>
      <p className="font-semibold text-green-600">Answer: U</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-2 text-purple-600">🔸 Q8. Syllogism</h3>
      <p className="mb-2 text-base">
        Statements: All dogs are animals. Some animals are cats. <br />
        Conclusion 1: Some cats are dogs. <br />
        Conclusion 2: All animals are dogs. <br />
        Which conclusion(s) follow?
      </p>
      <p className="font-semibold text-red-600">Answer: Neither</p>
    </div>
  </div>
</section>
{/* Section: Tips & Tricks */}
<section className="mb-12">
  <h2 className="text-3xl font-semibold mb-6 text-[var(--color-accent)]">
    🎯 Tips & Tricks
  </h2>
  <div className="grid sm:grid-cols-2 gap-6">
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-purple-600 mb-2">🧩 Tip 1: Understand Patterns</h3>
      <p className="text-base">
        Practice common number and letter series to develop pattern recognition. Look for differences, alternate positions, or square/cube relationships.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-purple-600 mb-2">🧠 Tip 2: Use Diagrams for Direction</h3>
      <p className="text-base">
        For direction-based questions, sketch the route. Visual aids make it easier to track turns and directions.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-purple-600 mb-2">🔍 Tip 3: Eliminate Wrong Options</h3>
      <p className="text-base">
        Use the process of elimination in puzzles and syllogisms. If you can disprove an option logically, discard it.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-purple-600 mb-2">📚 Tip 4: Learn Basic Logic Rules</h3>
      <p className="text-base">
        Familiarize yourself with logical laws like De Morgan’s Theorem, converse-inverse statements, and implication rules for statement logic questions.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-purple-600 mb-2">⏱️ Tip 5: Time Management</h3>
      <p className="text-base">
        Allocate time smartly during exams. Skip overly complex puzzles on the first go and return later if time permits.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-purple-600 mb-2">🔢 Tip 6: Use Options Wisely</h3>
      <p className="text-base">
        In number puzzles or coding-decoding, plug options back into the question. Sometimes reverse-engineering is faster.
      </p>
    </div>
  </div>
</section>

      {/* Additional Info Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">📘 Additional Information</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h3 className="text-purple-600 font-semibold mb-1">Logical Reasoning vs Analytical Reasoning</h3>
            <p>Logical focuses on patterns and conclusions, analytical involves interpreting complex data and problems.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h3 className="text-purple-600 font-semibold mb-1">Common Exams Testing Logical Aptitude</h3>
            <p>CAT, GATE, SSC, Bank PO, Campus Placements – all test these reasoning skills.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h3 className="text-purple-600 font-semibold mb-1">Best Resources</h3>
            <p>Books like RS Aggarwal, online mock platforms like Testbook, Oliveboard, and BYJU’S Exam Prep.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogicalAptitude;
