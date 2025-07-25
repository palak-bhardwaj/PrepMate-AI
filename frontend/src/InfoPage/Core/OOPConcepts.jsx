import React from 'react';

const OOPConcepts = () => {
  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f0f6ff] max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">Object-Oriented Programming (OOP)</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        OOP is a programming paradigm based on the concept of "objects", which can contain data and methods.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Four Pillars of OOP</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Encapsulation:</strong> Wrapping data and methods together</li>
          <li><strong>Abstraction:</strong> Showing only essential features</li>
          <li><strong>Inheritance:</strong> Acquiring properties from another class</li>
          <li><strong>Polymorphism:</strong> Same method behaving differently based on context</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Sample Code (Java)</h2>
        <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto">
{`class Animal {
  void sound() {
    System.out.println("Animal sound");
  }
}

class Dog extends Animal {
  void sound() {
    System.out.println("Bark");
  }
}

public class Main {
  public static void main(String[] args) {
    Animal obj = new Dog();
    obj.sound(); // Outputs: Bark
  }
}`}
        </pre>
      </section>
    </div>
  );
};

export default OOPConcepts;
