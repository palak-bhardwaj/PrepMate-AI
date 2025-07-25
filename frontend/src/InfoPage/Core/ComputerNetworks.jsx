import React from 'react';

const ComputerNetworks = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">Computer Networks</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        Computer Networks enable devices to communicate and share resources. It's the backbone of the internet and data communication.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Topics Covered</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>OSI & TCP/IP Models</li>
          <li>IP Addressing, Subnetting, DNS</li>
          <li>Routing Protocols: RIP, OSPF, BGP</li>
          <li>HTTP/HTTPS, FTP, DHCP, ARP</li>
          <li>Congestion Control, Firewalls, NAT</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Sample Q&A</h2>
        <pre className="bg-gray-100 text-sm p-4 rounded-md">
{`Q: What is the purpose of DNS?

A: Domain Name System (DNS) translates human-readable domain names like google.com into IP addresses like 142.250.64.78.`}
        </pre>
      </section>
    </div>
  );
};

export default ComputerNetworks;
