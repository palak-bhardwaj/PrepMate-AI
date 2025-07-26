import React from "react";

const CloudDevOps = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-700 mb-8">☁️ Cloud Computing & DevOps</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* What is Cloud Computing */}
        <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-2xl border-l-4 border-purple-500">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">🌐 What is Cloud Computing?</h2>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
            Cloud computing delivers computing services (servers, storage, databases, networking, software) over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale. You pay only for the cloud services you use.
          </p>
        </div>

        {/* What is DevOps */}
        <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-2xl border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">⚙️ What is DevOps?</h2>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
            DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the software development lifecycle and provide continuous delivery with high software quality.
          </p>
        </div>

        {/* DevOps Lifecycle */}
        <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-2xl border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">🔄 DevOps Lifecycle</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200">
            <li>Plan</li>
            <li>Develop</li>
            <li>Build</li>
            <li>Test</li>
            <li>Release</li>
            <li>Deploy</li>
            <li>Operate</li>
            <li>Monitor</li>
          </ul>
        </div>

        {/* Tools and Technologies */}
        <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-2xl border-l-4 border-yellow-500">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-2">🧰 DevOps Tools</h2>
          <p className="text-gray-700 dark:text-gray-200">Popular tools include:</p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200">
            <li>Git, GitHub, GitLab</li>
            <li>Jenkins, Travis CI</li>
            <li>Docker, Kubernetes</li>
            <li>Ansible, Puppet, Chef</li>
            <li>Prometheus, Grafana</li>
            <li>Terraform, AWS CloudFormation</li>
          </ul>
        </div>

        {/* CI/CD Concept */}
        <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-2xl border-l-4 border-pink-500">
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">🚀 CI/CD</h2>
          <p className="text-gray-700 dark:text-gray-200">
            Continuous Integration (CI) is the practice of merging code changes frequently with automated testing. Continuous Deployment/Delivery (CD) automates the release of validated code to production.
          </p>
        </div>

        {/* Cloud Platforms */}
        <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-2xl border-l-4 border-indigo-500">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">☁️ Major Cloud Platforms</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200">
            <li><strong>AWS</strong>: S3, EC2, Lambda, CloudWatch</li>
            <li><strong>Azure</strong>: Azure DevOps, Functions, App Services</li>
            <li><strong>GCP</strong>: Compute Engine, Cloud Functions, Kubernetes Engine</li>
          </ul>
        </div>

        {/* Containers & Orchestration */}
        <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-2xl border-l-4 border-cyan-500">
          <h2 className="text-2xl font-semibold text-cyan-600 mb-2">📦 Docker & Kubernetes</h2>
          <p className="text-gray-700 dark:text-gray-200">
            <strong>Docker</strong> is a containerization platform. <strong>Kubernetes</strong> is a container orchestration system that automates deployment, scaling, and management of applications.
          </p>
        </div>

        {/* Interview Questions */}
        <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-2xl border-l-4 border-rose-500">
          <h2 className="text-2xl font-semibold text-rose-600 mb-2">🎯 Interview Questions</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200">
            <li>What is the difference between continuous delivery and continuous deployment?</li>
            <li>Explain the benefits of microservices and containers in DevOps.</li>
            <li>How does Kubernetes handle scaling and load balancing?</li>
            <li>What are the advantages of infrastructure as code?</li>
            <li>How does monitoring and logging contribute to DevOps?</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-2xl border-l-4 border-teal-500">
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">✅ Conclusion</h2>
          <p className="text-gray-700 dark:text-gray-200">
            Cloud & DevOps are integral to modern software delivery. Mastering cloud platforms and DevOps tools not only improves deployment speed and software quality but also makes you industry-ready for modern engineering teams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CloudDevOps;
