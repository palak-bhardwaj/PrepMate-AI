import React from 'react';

const DiTopic = () => {
  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f0f6ff] max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">Data Interpretation (DI)</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        Data Interpretation requires analyzing graphical data and answering logical questions based on it. It tests decision-making ability under time constraints.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Data Types</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Bar Graphs and Line Graphs</li>
          <li>Pie Charts and Tables</li>
          <li>Caselets and Paragraph Data</li>
          <li>Mixed Graphs and Data Sufficiency</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Approach</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Quickly scan the data before reading questions</li>
          <li>Look for trends, highest/lowest values, ratios</li>
          <li>Practice with a timer to improve speed</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Sample DI Set</h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
{`Q: In a bar chart of student scores, if Class A had an average score of 75 and Class B had 80, which class performed better?

A: Class B performed better on average.`}
        </pre>
      </section>
    </div>
  );
};

export default DiTopic;
