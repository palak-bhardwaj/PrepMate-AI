import React from 'react';

const MySQL = () => {
  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f0f6ff] max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">MySQL</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        MySQL is a popular open-source relational database management system used for web and enterprise applications.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Basic SQL Commands</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code></li>
          <li>Filtering with <code>WHERE</code>, <code>LIKE</code>, <code>IN</code></li>
          <li>Joins: INNER, LEFT, RIGHT</li>
          <li>Aggregate functions: COUNT, SUM, AVG</li>
          <li>Stored Procedures, Triggers</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Example Query</h2>
        <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto">
{`SELECT name, salary 
FROM employees 
WHERE department = 'IT' 
ORDER BY salary DESC;`}
        </pre>
      </section>
    </div>
  );
};

export default MySQL;
