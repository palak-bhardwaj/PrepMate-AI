import React from 'react';

const OperatingSystems = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">Operating System (OS)</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        An Operating System is system software that manages hardware, software resources, and provides common services for computer programs.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Key Concepts</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Process Management (CPU Scheduling, Multithreading)</li>
          <li>Memory Management (Paging, Segmentation, Virtual Memory)</li>
          <li>Deadlocks (Detection, Avoidance, Prevention)</li>
          <li>File Systems (FAT, NTFS, Inodes)</li>
          <li>Concurrency and Synchronization (Semaphores, Mutex, Race Conditions)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Sample Theory Question</h2>
        <pre className="bg-gray-100 text-sm p-4 rounded-md">
{`Q: What is the difference between a process and a thread?

A: A process is an independent unit of execution with its own memory space.
   A thread is a lightweight process that shares memory with other threads in the same process.`}
        </pre>
      </section>
    </div>
  );
};

export default OperatingSystems;
