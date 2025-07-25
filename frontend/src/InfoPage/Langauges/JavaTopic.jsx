import React from 'react';

const JavaTopic = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">Java Programming</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        Java is a class-based, object-oriented programming language known for its platform independence via the Java Virtual Machine (JVM). It's widely used in web, Android, enterprise, and backend development.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Platform Independent (Write Once, Run Anywhere)</li>
          <li>Automatic Garbage Collection</li>
          <li>Robust Exception Handling</li>
          <li>Rich standard libraries (Java API)</li>
          <li>Multi-threaded and secure</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Core Concepts</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Data Types:</strong> int, double, char, boolean, String</li>
          <li><strong>OOPs:</strong> Class, Object, Inheritance, Polymorphism, Abstraction, Encapsulation</li>
          <li><strong>Collections:</strong> List, Set, Map, Queue</li>
          <li><strong>Exception Handling:</strong> try, catch, finally, throw, throws</li>
          <li><strong>Interfaces & Abstract Classes</strong></li>
          <li><strong>Multithreading:</strong> Thread class, Runnable interface, Synchronization</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Sample Program</h2>
        <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto">
{`public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, Java!");
  }
}`}
        </pre>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Theory Questions</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>What is the difference between abstract class and interface?</li>
          <li>Explain JVM, JRE, and JDK.</li>
          <li>How does Java achieve platform independence?</li>
          <li>Difference between method overloading and overriding?</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Practice Problems</h2>
        <ul className="list-decimal pl-5 space-y-2">
          <li>Write a program to reverse a string.</li>
          <li>Create a class hierarchy using inheritance and override a method.</li>
          <li>Demonstrate use of HashMap with student data.</li>
          <li>Implement multithreading with two threads printing even and odd numbers.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Learning Resources</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><a href="https://docs.oracle.com/javase/tutorial/" className="text-blue-600 underline" target="_blank" rel="noreferrer">Official Java Tutorials</a></li>
          <li><a href="https://www.geeksforgeeks.org/java/" className="text-blue-600 underline" target="_blank" rel="noreferrer">GeeksforGeeks – Java</a></li>
          <li><a href="https://www.javatpoint.com/java-tutorial" className="text-blue-600 underline" target="_blank" rel="noreferrer">JavaTpoint – Java Track</a></li>
        </ul>
      </section>
    </div>
  );
};

export default JavaTopic;
