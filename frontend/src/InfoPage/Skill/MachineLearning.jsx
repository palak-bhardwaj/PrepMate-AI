import React from 'react';

const MachineLearning = () => {
  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f0f6ff] max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">Machine Learning (AI/ML)</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        Machine Learning enables systems to learn from data and make predictions or decisions without being explicitly programmed.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">ML Types</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Supervised (Regression, Classification)</li>
          <li>Unsupervised (Clustering, Dimensionality Reduction)</li>
          <li>Reinforcement Learning</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Popular Algorithms</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Linear & Logistic Regression</li>
          <li>Decision Trees, Random Forests</li>
          <li>SVM, KNN, K-Means</li>
          <li>Neural Networks, Deep Learning</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Tools</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Sklearn, TensorFlow, Keras</li>
          <li>Jupyter, Colab</li>
          <li>NLP (Text classification, sentiment analysis)</li>
        </ul>
      </section>
    </div>
  );
};

export default MachineLearning;
