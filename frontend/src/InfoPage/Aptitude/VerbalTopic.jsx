import React from 'react';

const VerbalTopic = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">Verbal Ability</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        Verbal Ability assesses your command over the English language, including grammar, comprehension, and vocabulary.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Topics Covered</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Reading Comprehension</li>
          <li>Synonyms, Antonyms, Vocabulary Usage</li>
          <li>Error Spotting, Sentence Correction</li>
          <li>Para Jumbles, Fill in the Blanks</li>
          <li>Idioms, One Word Substitutions</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Study Strategy</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Read newspapers and novels regularly</li>
          <li>Practice comprehension passages</li>
          <li>Revise grammar rules and vocabulary daily</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Sample Question</h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
{`Q: Choose the correct synonym of 'Benevolent'.

A: Kind / Generous`}
        </pre>
      </section>
    </div>
  );
};

export default VerbalTopic;
