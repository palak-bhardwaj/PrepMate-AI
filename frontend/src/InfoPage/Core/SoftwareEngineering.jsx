import React from 'react';

const SoftwareEngineering = () => {
  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f0f6ff] max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">Software Engineering</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        Software Engineering is the application of engineering principles to software development in a systematic method.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Key Concepts</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Software Development Life Cycle (SDLC)</li>
          <li>Agile, Scrum, and Waterfall models</li>
          <li>Use Case Diagrams and UML</li>
          <li>Version Control (Git, GitHub)</li>
          <li>Software Testing – Unit, Integration, System</li>
          <li>Design Patterns (Singleton, Factory, Observer)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Sample Theory Question</h2>
        <pre className="bg-gray-100 text-sm p-4 rounded-md">
{`Q: What is the main benefit of using Agile over Waterfall?

A: Agile allows iterative development with faster feedback and adaptability, whereas Waterfall is rigid and sequential.`}
        </pre>
      </section>
    </div>
  );
};

export default SoftwareEngineering;
