import React from 'react';

const PythonTopic = () => {
  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f0f6ff] max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">Python Programming</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        Python is a high-level, interpreted language known for its readability and vast ecosystem. It's used in web development, data science, automation, scripting, AI, and more.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Simple syntax and readable code</li>
          <li>Dynamic typing and automatic memory management</li>
          <li>Huge collection of libraries (NumPy, Pandas, TensorFlow)</li>
          <li>Interpreted and interactive</li>
          <li>Cross-platform and open-source</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Core Concepts</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Data Types:</strong> int, float, str, bool, list, tuple, dict, set</li>
          <li><strong>Functions:</strong> def, return, lambda</li>
          <li><strong>OOP:</strong> class, object, inheritance, __init__, self</li>
          <li><strong>Exception Handling:</strong> try-except-finally</li>
          <li><strong>File Handling:</strong> open(), read(), write(), close()</li>
          <li><strong>Modules & Packages:</strong> import, pip, virtualenv</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Popular Libraries</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>NumPy:</strong> Numerical computations</li>
          <li><strong>Pandas:</strong> Data manipulation</li>
          <li><strong>Matplotlib:</strong> Data visualization</li>
          <li><strong>Flask/Django:</strong> Web development</li>
          <li><strong>Scikit-learn:</strong> Machine learning</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Sample Code</h2>
        <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto">
{`def greet(name):
    return f"Hello, {name}!"

print(greet("Python"))`}
        </pre>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Theory Questions</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>What is the difference between list and tuple?</li>
          <li>Explain Python’s memory management.</li>
          <li>How are modules different from packages?</li>
          <li>What is the use of decorators?</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Practice Problems</h2>
        <ul className="list-decimal pl-5 space-y-2">
          <li>Write a Python function to check for palindrome.</li>
          <li>Read a CSV file and display its contents using pandas.</li>
          <li>Build a calculator using functions.</li>
          <li>Sort a dictionary by its values.</li>
          <li>Plot a bar chart using Matplotlib.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Learning Resources</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><a href="https://docs.python.org/3/tutorial/" className="text-blue-600 underline" target="_blank" rel="noreferrer">Python Official Docs</a></li>
          <li><a href="https://realpython.com/" className="text-blue-600 underline" target="_blank" rel="noreferrer">Real Python Tutorials</a></li>
          <li><a href="https://www.geeksforgeeks.org/python-programming-language/" className="text-blue-600 underline" target="_blank" rel="noreferrer">GeeksforGeeks Python</a></li>
        </ul>
      </section>
    </div>
  );
};

export default PythonTopic;
