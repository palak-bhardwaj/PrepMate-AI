import React from "react";

const DSA = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">📚 Data Structures & Algorithms (DSA)</h1>

      {/* What is DSA */}
      <div className="bg-white dark:bg-[#1f1f2b] shadow-xl rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">🔰 What is DSA?</h2>
        <p className="text-lg">
          DSA stands for <strong>Data Structures and Algorithms</strong>. It is the foundation of efficient programming and problem-solving. Data Structures deal with how data is stored and organized, while Algorithms define a step-by-step method to solve a problem.
        </p>
      </div>

      {/* Types of Data Structures */}
      <div className="bg-white dark:bg-[#1f1f2b] shadow-xl rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">📦 Types of Data Structures</h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Arrays and Strings</li>
          <li>Linked Lists (Singly, Doubly, Circular)</li>
          <li>Stacks and Queues</li>
          <li>Trees (Binary Trees, BST, AVL, Heaps)</li>
          <li>Graphs (Adjacency Matrix/List, BFS, DFS)</li>
          <li>Hash Tables and Hashing</li>
          <li>Tries, Disjoint Sets, Segment Trees</li>
        </ul>
      </div>

      {/* Algorithms */}
      <div className="bg-white dark:bg-[#1f1f2b] shadow-xl rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">⚙️ Types of Algorithms</h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Searching (Linear, Binary)</li>
          <li>Sorting (Bubble, Merge, Quick, Heap)</li>
          <li>Recursion & Backtracking</li>
          <li>Greedy Algorithms</li>
          <li>Dynamic Programming</li>
          <li>Divide and Conquer</li>
          <li>Graph Algorithms (Dijkstra, Floyd-Warshall, MST)</li>
        </ul>
      </div>

      {/* Code Examples */}
      <div className="bg-white dark:bg-[#1f1f2b] shadow-xl rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">💻 Sample Code: Binary Search</h2>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto text-sm">
{`// Binary Search in C++
int binarySearch(int arr[], int n, int key) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == key) return mid;
        else if (arr[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`}
        </pre>
      </div>

      {/* Practice Questions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-[#1f1f2b] p-6 rounded-2xl shadow-xl">
          <h3 className="text-xl font-semibold text-purple-500 mb-2">📝 Practice Questions</h3>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Two Sum / Pair with Target Sum</li>
            <li>Longest Substring Without Repeating</li>
            <li>Merge Intervals</li>
            <li>Detect Cycle in a Linked List</li>
            <li>Maximum Subarray (Kadane’s Algo)</li>
            <li>Top K Frequent Elements</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-[#1f1f2b] p-6 rounded-2xl shadow-xl">
          <h3 className="text-xl font-semibold text-purple-500 mb-2">💡 Tips & Tricks</h3>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Always analyze time & space complexity.</li>
            <li>Practice writing code without IDEs.</li>
            <li>Use dry run and visualizations for recursion & trees.</li>
            <li>For DP problems, memorize base cases clearly.</li>
            <li>Graph traversal = BFS/DFS first approach.</li>
          </ul>
        </div>
      </div>

      {/* Interview Prep Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          {
            title: "📌 Must-Know Concepts",
            content: [
              "Time & Space Complexity",
              "Recursion and Stack Memory",
              "Hashing Techniques",
              "Sliding Window, Two Pointers",
              "Prefix Sums, Binary Lifting",
            ]
          },
          {
            title: "🧠 Advanced Topics",
            content: [
              "Segment Trees & Fenwick Tree",
              "Disjoint Set Union (DSU)",
              "Topological Sorting",
              "Shortest Path (Dijkstra, Bellman-Ford)",
              "Minimax & Alpha-Beta Pruning"
            ]
          },
          {
            title: "🎯 Interview Tips",
            content: [
              "Start with brute force, then optimize.",
              "Clarify edge cases with interviewer.",
              "Write clean, modular code.",
              "Explain logic out loud while coding.",
              "Use meaningful variable names."
            ]
          }
        ].map((card, index) => (
          <div key={index} className="bg-white dark:bg-[#1f1f2b] p-5 rounded-2xl shadow-md">
            <h4 className="text-xl font-semibold text-purple-600 mb-3">{card.title}</h4>
            <ul className="list-disc list-inside space-y-1 text-lg">
              {card.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Conclusion */}
      <div className="bg-white dark:bg-[#1f1f2b] p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">✅ Conclusion</h2>
        <p className="text-lg leading-relaxed">
          Mastering DSA is essential for excelling in technical interviews and competitive programming. It builds the foundation for writing efficient, optimized code to solve real-world problems. Stay consistent with practice, understand problem patterns, and gradually explore advanced topics.
        </p>
      </div>
    </div>
  );
};

export default DSA;
