import React from 'react';

const QuantTopic = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">Quantitative Aptitude</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        Quantitative Aptitude tests your numerical ability and mathematical reasoning. It is crucial for cracking competitive exams and placement tests.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Key Topics</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Percentages, Profit & Loss, Discounts</li>
          <li>Time & Work, Time-Speed-Distance</li>
          <li>Simple & Compound Interest</li>
          <li>Ratios, Proportions, Mixtures, Averages</li>
          <li>Number Systems, HCF & LCM</li>
          <li>Permutations & Combinations, Probability</li>
          <li>Mensuration, Geometry, Algebra</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Tips to Master Quant</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Practice regularly to improve speed and accuracy</li>
          <li>Memorize key formulas and tricks</li>
          <li>Solve previous year papers and mock tests</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Sample Problem</h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
{`Q: A man buys a shirt for ₹500 and sells it at a profit of 20%. What is the selling price?

A: SP = CP × (1 + Profit%) = 500 × (1 + 0.20) = ₹600`}
        </pre>
      </section>
    </div>
  );
};

export default QuantTopic;
