import React from 'react';

const CloudComputing = () => {
  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f0f6ff] max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">Cloud Computing</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        Cloud computing provides on-demand computing services over the internet. It enables scalability, cost-efficiency, and accessibility from anywhere.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Key Concepts</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>IaaS, PaaS, SaaS (Service Models)</li>
          <li>Public, Private, Hybrid Cloud (Deployment Models)</li>
          <li>Virtualization, Containers, VMs</li>
          <li>Popular Providers: AWS, Azure, Google Cloud</li>
          <li>Security, Availability, Elasticity</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Use Cases</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Hosting websites and applications</li>
          <li>Data backup and disaster recovery</li>
          <li>AI/ML workloads and big data processing</li>
        </ul>
      </section>
    </div>
  );
};

export default CloudComputing;
