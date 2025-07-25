import React from 'react';

const DSATopic = () => {
  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f0f6ff] max-w-6xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-6 text-[var(--color-accent-dark)]">Data Structures & Algorithms (DSA)</h1>

      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        DSA is the foundation of efficient problem-solving and coding. It helps in organizing data, optimizing code, and is crucial for cracking coding interviews and building scalable applications.
      </p>

      {/* Key Concepts */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">📘 Key Concepts</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Data Structures:</strong> Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hash Tables</li>
          <li><strong>Algorithms:</strong> Searching, Sorting, Recursion, Backtracking, Dynamic Programming</li>
          <li><strong>Complexity Analysis:</strong> Time & Space complexity, Big-O Notation</li>
          <li><strong>Problem Solving:</strong> Pattern recognition, breaking down problems, edge cases</li>
        </ul>
      </section>

      {/* Common Data Structures */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">🧱 Common Data Structures</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Array:</strong> Fixed size, direct index access, basic foundation</li>
          <li><strong>Linked List:</strong> Dynamic size, great for insert/delete, types: singly/doubly</li>
          <li><strong>Stack:</strong> LIFO structure, used in undo features, recursion</li>
          <li><strong>Queue:</strong> FIFO structure, used in scheduling, BFS</li>
          <li><strong>Hash Table:</strong> Key-value storage with average O(1) lookup</li>
          <li><strong>Tree:</strong> Hierarchical data (Binary, BST, AVL, Segment Trees)</li>
          <li><strong>Graph:</strong> Used in networks, paths, connected components</li>
        </ul>
      </section>

      {/* Common Algorithms */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">⚙️ Important Algorithms</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Searching:</strong> Linear, Binary Search</li>
          <li><strong>Sorting:</strong> Bubble, Selection, Insertion, Merge, Quick, Heap Sort</li>
          <li><strong>Recursion:</strong> Factorial, Fibonacci, Backtracking (N-Queens, Sudoku)</li>
          <li><strong>Dynamic Programming:</strong> Memoization, Tabulation, Longest Common Subsequence, Knapsack</li>
          <li><strong>Greedy Algorithms:</strong> Activity Selection, Huffman Encoding</li>
          <li><strong>Graph Algorithms:</strong> BFS, DFS, Dijkstra’s, Kruskal’s, Prim’s</li>
        </ul>
      </section>

      {/* Sample Problem */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">💡 Sample Code: Binary Search</h2>
        <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto">
{`// Binary Search in C++
int binarySearch(int arr[], int n, int target) {
  int low = 0, high = n - 1;
  while (low <= high) {
    int mid = low + (high - low) / 2;
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1; // Not found
}`}
        </pre>
      </section>

      {/* Interview Questions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">🧠 Popular Interview Questions</h2>
        <ul className="list-decimal pl-5 space-y-2">
          <li>Reverse a linked list</li>
          <li>Check if a string is a palindrome using stack</li>
          <li>Find the majority element in an array (Moore’s Voting)</li>
          <li>Implement LRU Cache using LinkedHashMap</li>
          <li>Detect cycle in a graph (DFS/Union-Find)</li>
          <li>Find Kth largest element using Heap</li>
        </ul>
      </section>

      {/* Learning Resources */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">📚 Learning Resources</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">LeetCode</a> – Practice problems with company tags</li>
          <li><a href="https://www.geeksforgeeks.org/data-structures/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GeeksForGeeks</a> – Topic-wise DSA guide</li>
          <li><a href="https://www.codingninjas.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Coding Ninjas</a> – DSA courses and mentorship</li>
          <li><a href="https://visualgo.net/en" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">VisuAlgo</a> – Visual explanations of DSA</li>
        </ul>
      </section>

      {/* Tips */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">🎯 Tips to Master DSA</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Start with understanding time/space complexity</li>
          <li>Solve problems in increasing difficulty (easy → hard)</li>
          <li>Learn standard templates for recursion, DFS, DP, etc.</li>
          <li>Join contests (e.g., LeetCode Weekly, Codeforces)</li>
        </ul>
      </section>

      <p className="text-center mt-12 text-[var(--color-accent-dark)] font-semibold">
        💪 Practice consistently. Think in patterns. Trust the process.
      </p>
    </div>
  );
};

export default DSATopic;
