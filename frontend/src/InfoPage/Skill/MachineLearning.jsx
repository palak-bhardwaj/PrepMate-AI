// AIMLSection.jsx
import React from "react";

const AIMLSection = () => {
  return (
    <section className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">🤖 AI & Machine Learning</h1>

      {/* Theory Card */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8 border-l-4 border-purple-500">
        <h2 className="text-2xl font-semibold mb-3 text-purple-600">📘 Theory Overview</h2>
        <p className="mb-2 text-lg">
          <strong>Artificial Intelligence (AI)</strong> refers to machines designed to simulate human intelligence, while <strong>Machine Learning (ML)</strong> is a subset of AI where machines learn patterns from data and improve over time without being explicitly programmed.
        </p>
        <ul className="list-disc ml-6 text-lg">
          <li><strong>Supervised Learning</strong> – Model learns from labeled data.</li>
          <li><strong>Unsupervised Learning</strong> – Model finds patterns from unlabeled data.</li>
          <li><strong>Reinforcement Learning</strong> – Model learns from trial and error using rewards.</li>
        </ul>
      </div>

      {/* Code Example Card */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8 border-l-4 border-green-500">
        <h2 className="text-2xl font-semibold mb-3 text-green-600">💻 Python ML Example</h2>
        <p className="mb-4 text-lg">A simple example of linear regression using <code>scikit-learn</code>:</p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
{`from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import numpy as np

# Example data
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([1.5, 3.7, 2.9, 4.4, 5.0])

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Predict
predictions = model.predict(X_test)
print("Predictions:", predictions)`}
        </pre>
      </div>

      {/* Use Cases Card */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">🌍 Real-World Use Cases</h2>
        <ul className="list-disc ml-6 text-lg">
          <li>Spam Detection in Emails</li>
          <li>Recommendation Systems (Netflix, Amazon)</li>
          <li>Fraud Detection in Banking</li>
          <li>Speech Recognition (Siri, Google Assistant)</li>
          <li>Autonomous Vehicles</li>
        </ul>
      </div>

      {/* Tips & Tricks Card */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8 border-l-4 border-yellow-500">
        <h2 className="text-2xl font-semibold mb-3 text-yellow-600">⚡ Tips & Tricks</h2>
        <ul className="list-disc ml-6 text-lg">
          <li>Start with linear models before using deep learning.</li>
          <li>Normalize your data to improve accuracy.</li>
          <li>Always split your data into training and test sets.</li>
          <li>Use libraries like <code>scikit-learn</code>, <code>pandas</code>, and <code>matplotlib</code>.</li>
          <li>Evaluate models using metrics like accuracy, F1-score, and RMSE.</li>
        </ul>
      </div>

      {/* Interview Questions Card */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8 border-l-4 border-red-500">
        <h2 className="text-2xl font-semibold mb-3 text-red-600">🎯 Interview Questions</h2>
        <ul className="list-disc ml-6 text-lg">
          <li>What is the difference between AI, ML, and Deep Learning?</li>
          <li>Explain bias-variance trade-off.</li>
          <li>How does a decision tree work?</li>
          <li>What is overfitting and how do you prevent it?</li>
          <li>Explain gradient descent.</li>
        </ul>
      </div>

      {/* Final Notes */}
      <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-purple-700">
        <h2 className="text-2xl font-semibold mb-3 text-purple-700">📝 Final Notes</h2>
        <p className="text-lg">
          AI/ML is one of the most exciting and rapidly growing fields in technology. Whether you're building models or using pre-trained ones, mastering the basics and applying them in real-world projects is key to becoming proficient.
        </p>
      </div>
    </section>
  );
};

export default AIMLSection;
