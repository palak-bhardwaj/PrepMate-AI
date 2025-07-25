import React from 'react';

const DBMS = () => {
  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f0f6ff] max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">Database Management Systems (DBMS)</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        DBMS helps manage data efficiently and allows users to store, modify, and retrieve data in a structured way.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Key Concepts</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ER Diagrams, Schemas</li>
          <li>Normalization, ACID Properties</li>
          <li>Transactions, Concurrency</li>
          <li>Indexes, Views, Joins</li>
          <li>Relational & NoSQL Databases</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Example</h2>
        <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto">
{`SELECT employee.name, department.name 
FROM employee 
JOIN department ON employee.dept_id = department.id;`}
        </pre>
      </section>
    </div>
  );
};

export default DBMS;
