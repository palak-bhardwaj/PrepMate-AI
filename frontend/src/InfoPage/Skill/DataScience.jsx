import React from 'react';

const DataScience = () => {
  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f0f6ff] max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">Data Science</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        Data Science is the discipline of using data to solve problems through insights, predictions, and decisions. It blends statistics, programming, and domain expertise.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Key Tools & Libraries</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Python, Jupyter Notebooks</li>
          <li>Libraries: Pandas, NumPy, Matplotlib, Seaborn</li>
          <li>Data Cleaning, EDA (Exploratory Data Analysis)</li>
          <li>Visualization and Storytelling with data</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Applications</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Business Intelligence</li>
          <li>Marketing & Sales Analytics</li>
          <li>Healthcare, Finance, Sports</li>
        </ul>
      </section>
    </div>
  );
};

export default DataScience;
