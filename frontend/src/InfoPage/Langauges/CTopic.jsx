import React from 'react';

const CTopic = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">C Programming</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        C is a foundational language used in systems, embedded, and application development. It offers powerful low-level memory control and is an ideal choice for mastering programming fundamentals.
      </p>

      {/* Key Features */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Procedural programming with functions</li>
          <li>Direct memory management using pointers</li>
          <li>Efficient code and performance</li>
          <li>Hardware-level programming capability</li>
        </ul>
      </section>

      {/* Data Types & Variables */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Data Types & Variables</h2>
        <p className="mb-3">C has several built-in data types:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><code>int</code>: integers</li>
          <li><code>float</code>, <code>double</code>: decimal numbers</li>
          <li><code>char</code>: single characters</li>
          <li><code>void</code>: no type (used in functions)</li>
        </ul>
        <pre className="bg-gray-100 text-sm p-4 mt-4 rounded-md overflow-x-auto">
{`int age = 20;
float height = 5.9;
char grade = 'A';`}
        </pre>
      </section>

      {/* Control Flow */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Control Flow</h2>
        <p className="mb-2">C supports various control structures:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><code>if-else</code> for decision making</li>
          <li><code>switch-case</code> for multiple conditions</li>
          <li><code>for</code>, <code>while</code>, <code>do-while</code> loops</li>
        </ul>
        <pre className="bg-gray-100 text-sm p-4 mt-4 rounded-md overflow-x-auto">
{`for (int i = 0; i < 5; i++) {
    printf("%d ", i);
}`}
        </pre>
      </section>

      {/* Storage Classes */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Storage Classes</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><code>auto</code>: default local variable</li>
          <li><code>register</code>: fast-access CPU register</li>
          <li><code>static</code>: retains value between function calls</li>
          <li><code>extern</code>: global variable accessed in multiple files</li>
        </ul>
      </section>

      {/* Common Header Files */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Common Header Files</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><code>&lt;stdio.h&gt;</code>: input/output functions</li>
          <li><code>&lt;stdlib.h&gt;</code>: memory and process control</li>
          <li><code>&lt;string.h&gt;</code>: string handling</li>
          <li><code>&lt;math.h&gt;</code>: math operations</li>
        </ul>
      </section>

      {/* Sample Program */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Sample Program</h2>
        <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto">
{`#include <stdio.h>

int main() {
    int a = 10, b = 20;
    int sum = a + b;
    printf("Sum: %d", sum);
    return 0;
}`}
        </pre>
      </section>

      {/* Important Theory Questions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Important Theory Questions</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>What is the difference between call by value and call by reference?</li>
          <li>Explain different storage classes in C.</li>
          <li>What are the uses of pointers in C?</li>
          <li>Explain structure vs union.</li>
          <li>Difference between malloc() and calloc()</li>
        </ul>
      </section>

      {/* Code Practice Problems */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Practice Problems</h2>
        <ul className="list-decimal pl-5 space-y-2">
          <li>Write a program to reverse a number.</li>
          <li>Implement a program to check for palindrome string.</li>
          <li>Write a program to sort an array using bubble sort.</li>
          <li>Create a structure to store and print student details.</li>
          <li>Write a program to use dynamic memory allocation for an array.</li>
        </ul>
      </section>

      {/* Resources */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Resources to Learn C</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><a href="https://www.learn-c.org/" className="text-blue-600 underline" target="_blank" rel="noreferrer">learn-c.org – Interactive tutorials</a></li>
          <li><a href="https://www.tutorialspoint.com/cprogramming/" className="text-blue-600 underline" target="_blank" rel="noreferrer">TutorialsPoint – C Programming</a></li>
          <li><a href="https://www.geeksforgeeks.org/c-programming-language/" className="text-blue-600 underline" target="_blank" rel="noreferrer">GeeksforGeeks – C Language</a></li>
          <li><a href="https://onlinegdb.com/" className="text-blue-600 underline" target="_blank" rel="noreferrer">OnlineGDB – Online Compiler</a></li>
        </ul>
      </section>

      {/* Closing Tip */}
      <p className="text-center mt-12 text-[var(--color-accent-dark)] font-semibold">
        ✨ Mastering C gives you the confidence to write clean, efficient, and scalable code for any system.
      </p>
    </div>
  );
};

export default CTopic;
