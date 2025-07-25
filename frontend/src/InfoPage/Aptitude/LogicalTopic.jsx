import React from 'react';

const LogicalTopic = () => {
  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f0f6ff] max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">Logical Reasoning</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        Logical Reasoning evaluates your ability to think critically and solve pattern-based problems. It's an essential part of aptitude assessments.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Key Areas</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Puzzles and Seating Arrangements</li>
          <li>Blood Relations, Directions, Coding-Decoding</li>
          <li>Series (Number/Alphabet), Syllogisms</li>
          <li>Analytical Reasoning, Cause-Effect</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Preparation Tips</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Understand logical patterns and flowcharts</li>
          <li>Practice with reasoning books and online quizzes</li>
          <li>Break complex problems into smaller chunks</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Sample Puzzle</h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
{`Q: John is looking at Tina. Tina is looking at Rahul. John is married, Rahul is not. Is a married person looking at an unmarried person?

A: Yes.`}
        </pre>
      </section>
    </div>
  );
};

export default LogicalTopic;
