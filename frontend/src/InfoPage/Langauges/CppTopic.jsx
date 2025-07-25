import React from 'react';

const CppTopic = () => {
  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f0f6ff] max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">C++ Programming</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        C++ is a powerful, high-performance language that supports both procedural and object-oriented paradigms.
        It’s widely used for system software, game engines, competitive programming, and large-scale applications.
      </p>

      {/* Key Features */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Object-Oriented Programming (OOP) support</li>
          <li>Rich Standard Template Library (STL)</li>
          <li>Fast, compiled, and platform-independent</li>
          <li>Supports low-level memory manipulation like C</li>
          <li>Supports procedural and modular programming</li>
        </ul>
      </section>

      {/* Core Concepts */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Core Concepts</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Data Types & Variables:</strong> int, float, bool, char, string</li>
          <li><strong>Control Flow:</strong> if, else, switch, loops (for, while, do-while)</li>
          <li><strong>Functions:</strong> Default, inline, overloading</li>
          <li><strong>Pointers & References:</strong> Memory access and manipulation</li>
          <li><strong>File I/O:</strong> Reading/writing files using fstream</li>
        </ul>
      </section>

      {/* OOP Principles */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Object-Oriented Programming (OOP)</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Encapsulation:</strong> Binding data and functions together</li>
          <li><strong>Abstraction:</strong> Hiding implementation details</li>
          <li><strong>Inheritance:</strong> Reusing properties of base class</li>
          <li><strong>Polymorphism:</strong> Function overriding and overloading</li>
        </ul>
        <pre className="bg-gray-100 text-sm p-4 mt-4 rounded-md overflow-x-auto">
{`class Animal {
public:
    void speak() {
        cout << "Animal speaks" << endl;
    }
};

class Dog : public Animal {
public:
    void speak() {
        cout << "Dog barks" << endl;
    }
};`}
        </pre>
      </section>

      {/* Standard Template Library */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Standard Template Library (STL)</h2>
        <p className="mb-2">STL provides useful data structures and algorithms:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Containers:</strong> vector, list, map, set, queue</li>
          <li><strong>Iterators:</strong> Navigate through containers</li>
          <li><strong>Algorithms:</strong> sort, reverse, find, count</li>
        </ul>
        <pre className="bg-gray-100 text-sm p-4 mt-4 rounded-md overflow-x-auto">
{`#include <vector>
#include <algorithm>
#include <iostream>
using namespace std;

int main() {
    vector<int> v = {4, 2, 1, 5};
    sort(v.begin(), v.end());
    for (int n : v) cout << n << " ";
    return 0;
}`}
        </pre>
      </section>

      {/* File Handling */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">File Handling</h2>
        <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto">
{`#include <fstream>
using namespace std;

int main() {
    ofstream fout("test.txt");
    fout << "Hello C++!";
    fout.close();

    ifstream fin("test.txt");
    string data;
    getline(fin, data);
    cout << data;
    return 0;
}`}
        </pre>
      </section>

      {/* Theory Questions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Important Theory Questions</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>What is the difference between C and C++?</li>
          <li>Explain the four pillars of OOP with examples.</li>
          <li>What are virtual functions and why are they used?</li>
          <li>Difference between function overloading and overriding</li>
          <li>What is a template in C++?</li>
        </ul>
      </section>

      {/* Practice Questions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Practice Problems</h2>
        <ul className="list-decimal pl-5 space-y-2">
          <li>Create a class to store and print student data.</li>
          <li>Write a C++ program to overload ‘+’ operator.</li>
          <li>Reverse a string using STL.</li>
          <li>Implement a stack using STL vector.</li>
          <li>Read a file and count number of words.</li>
        </ul>
      </section>

      {/* Resources */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Resources to Learn C++</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><a href="https://cplusplus.com/doc/tutorial/" className="text-blue-600 underline" target="_blank" rel="noreferrer">CPlusPlus.com – Official Tutorials</a></li>
          <li><a href="https://www.geeksforgeeks.org/cpp-tutorial/" className="text-blue-600 underline" target="_blank" rel="noreferrer">GeeksforGeeks – C++ Track</a></li>
          <li><a href="https://www.learncpp.com/" className="text-blue-600 underline" target="_blank" rel="noreferrer">LearnCpp.com – In-depth topics</a></li>
          <li><a href="https://www.onlinegdb.com/online_c++_compiler" className="text-blue-600 underline" target="_blank" rel="noreferrer">OnlineGDB – Run C++ Online</a></li>
        </ul>
      </section>

      {/* Footer Tip */}
      <p className="text-center mt-12 text-[var(--color-accent-dark)] font-semibold">
        🚀 C++ sharpens both logic and performance skills — keep practicing regularly!
      </p>
    </div>
  );
};

export default CppTopic;
