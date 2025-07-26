import React from 'react';

const VerbalAbilityTopic = () => {
  return (
    <div className="bg-gradient-to-b from-[#fffdfd] to-[#f3f4ff] max-w-5xl mx-auto px-4 py-12 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">📚 Verbal Ability</h1>
      <p className="text-lg text-[var(--color-text-muted)] mb-6">
        Verbal Ability tests a candidate's command over the English language, including grammar, vocabulary, comprehension, and logical reasoning in language use. It plays a key role in competitive exams and job interviews.
      </p>

      {/* THEORY SECTION */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">📘 Theory Overview</h2>
        <div className="space-y-4 leading-relaxed">
          <p>
            Verbal ability questions assess a person’s grasp on correct usage of English grammar, word meanings, sentence construction, and logical thinking through passages or questions.
          </p>
          <ul className="list-disc pl-6">
            <li>Grammar Rules (Tenses, Prepositions, Articles, Subject-Verb Agreement)</li>
            <li>Vocabulary (Synonyms, Antonyms, Word Usage)</li>
            <li>Reading Comprehension</li>
            <li>Sentence Rearrangement & Completion</li>
            <li>Para Jumbles and Odd One Out</li>
          </ul>
        </div>
      </section>

      {/* PRACTICE QUESTIONS SECTION */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">📝 Practice Questions</h2>
        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-[var(--color-accent)]">
            <p className="font-medium">Q1: Choose the correct sentence:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>He don’t like coffee.</li>
              <li>He doesn’t likes coffee.</li>
              <li className="text-green-600 font-semibold">He doesn’t like coffee.</li>
              <li>He don’t likes coffee.</li>
            </ul>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-[var(--color-accent)]">
            <p className="font-medium">Q2: Find the synonym of "Obsolete":</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Modern</li>
              <li>Current</li>
              <li className="text-green-600 font-semibold">Outdated</li>
              <li>Innovative</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TIPS & TRICKS SECTION */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">💡 Tips & Tricks</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Read newspapers daily to enhance vocabulary and comprehension speed.</li>
          <li>Practice grammar exercises regularly, focusing on weak areas.</li>
          <li>Use flashcards to memorize difficult words and their meanings.</li>
          <li>Don’t just memorize rules—understand why they're used.</li>
          <li>Try to form your own sentences with new words to retain them better.</li>
        </ul>
      </section>

      {/* EXTRA INFORMATION IN CARD FORMAT */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">📦 More Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white border rounded-xl p-5 shadow hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[var(--color-accent-dark)]">🧠 Word Power</h3>
            <p className="text-[var(--color-text-muted)]">
              Building vocabulary is the foundation of verbal ability. Try using apps like WordUp, vocabulary builders, or word-a-day calendars.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-5 shadow hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[var(--color-accent-dark)]">🔠 Grammar Mastery</h3>
            <p className="text-[var(--color-text-muted)]">
              Grammar isn't about memorizing rules. Focus on patterns in native speech and write short paragraphs to apply grammar naturally.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-5 shadow hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[var(--color-accent-dark)]">📖 Reading Comprehension</h3>
            <p className="text-[var(--color-text-muted)]">
              Skim the passage first, then read questions. Look for key facts, tone of the author, and implied meanings.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-5 shadow hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[var(--color-accent-dark)]">🪜 Difficulty Levels</h3>
            <p className="text-[var(--color-text-muted)]">
              Start with beginner-level exercises and gradually move to CAT-level or GRE-level verbal questions.
            </p>
          </div>
        </div>
      </section>
<br />
      <section className="mb-10 card">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">📚 Topics Covered</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>Reading Comprehension (RC)</li>
          <li>Para Jumbles (Sentence Rearrangement)</li>
          <li>Sentence Correction / Spotting Errors</li>
          <li>Fill in the Blanks</li>
          <li>Vocabulary (Synonyms/Antonyms)</li>
          <li>Idioms and Phrases</li>
          <li>One Word Substitution</li>
          <li>Analogy & Word Relations</li>
        </ul>
      </section>

      {/* Theory Sections */}
      <section className="mb-12 card">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">📖 Core Concepts</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">1. Reading Comprehension</h3>
          <p className="mb-2 text-base leading-relaxed">
            RC passages test your ability to understand and analyze a given piece of text. Questions range from direct factual to inference-based.
          </p>
          <p className="italic text-sm text-gray-600">
            Example: What is the author's tone in the passage?
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">2. Sentence Correction</h3>
          <p className="mb-2 text-base leading-relaxed">
            These questions involve spotting grammatical or structural errors in a sentence. Topics like subject-verb agreement, tenses, modifiers, etc., are commonly tested.
          </p>
          <p className="italic text-sm text-gray-600">
            Example: "She don't like mangoes." → "She doesn't like mangoes."
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">3. Para Jumbles</h3>
          <p className="mb-2 text-base leading-relaxed">
            You’re given 4-5 jumbled sentences that form a coherent paragraph when arranged correctly. Look for logical connectors, transitions, and topic sentences.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">4. Vocabulary</h3>
          <p className="mb-2 text-base leading-relaxed">
            Covers synonyms, antonyms, analogies, and word usage in context. Vocabulary strength directly improves comprehension speed and accuracy.
          </p>
          <p className="italic text-sm text-gray-600">
            Example: "Obstinate" → synonym: "Stubborn", antonym: "Compliant"
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">5. Idioms & Phrases</h3>
          <p className="mb-2 text-base leading-relaxed">
            Common English expressions that aren't always literal. Understanding idioms boosts your interpretation of colloquial texts.
          </p>
          <p className="italic text-sm text-gray-600">
            Example: "Spill the beans" → Reveal a secret.
          </p>
        </div>
      </section>

      {/* Theory Card */}
      <section className="bg-white shadow-lg rounded-2xl p-6 mb-10 border-l-4 border-[var(--color-accent)]">
        <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-4">
          📘 Theory
        </h2>
        <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
          Verbal Ability assesses a candidate’s command over language, vocabulary,
          and grammar. It evaluates comprehension skills, logical thinking,
          sentence construction, and the ability to spot and correct errors.
          Common question types include:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>Synonyms and Antonyms</li>
          <li>Reading Comprehension</li>
          <li>Sentence Correction & Completion</li>
          <li>Para Jumbles</li>
          <li>Idioms & Phrases</li>
          <li>One-word Substitution</li>
        </ul>
      </section>

      {/* Practice Questions Card */}
      <section className="bg-white shadow-lg rounded-2xl p-6 mb-10 border-l-4 border-indigo-400">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-4">
          📝 Practice Questions
        </h2>

        <div className="space-y-6 text-base leading-relaxed">
          <div className="bg-gray-50 p-4 rounded-md border-l-4 border-blue-400">
            <strong>Q1:</strong> Choose the correct synonym for "Ephemeral":
            <br />
            A) Permanent &nbsp;&nbsp; B) Transient &nbsp;&nbsp; C) Stable &nbsp;&nbsp; D) Enduring
            <br />
            <strong>Answer:</strong> B) Transient
          </div>

          <div className="bg-gray-50 p-4 rounded-md border-l-4 border-blue-400">
            <strong>Q2:</strong> Identify the error: "He do not know the answer."
            <br />
            <strong>Answer:</strong> "do" should be "does"
          </div>

          <div className="bg-gray-50 p-4 rounded-md border-l-4 border-blue-400">
            <strong>Q3:</strong> Rearrange the following to form a meaningful sentence:
            <br />
            (a) to / (b) the temple / (c) went / (d) they <br />
            <strong>Answer:</strong> They went to the temple.
          </div>
        </div>
      </section>

      {/* Tips and Tricks Card */}
      <section className="bg-white shadow-lg rounded-2xl p-6 mb-10 border-l-4 border-emerald-400">
        <h2 className="text-2xl font-semibold text-emerald-500 mb-4">
          🎯 Tips & Tricks
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-muted)]">
          <li>Read English newspapers daily to improve vocabulary and grammar.</li>
          <li>Practice comprehension passages to boost reading speed and inference skills.</li>
          <li>Understand the context before choosing synonyms/antonyms.</li>
          <li>Brush up on common idioms, one-word substitutions, and phrasal verbs.</li>
          <li>Always eliminate wrong options to improve accuracy.</li>
          <li>Learn common grammar rules and practice sentence correction regularly.</li>
        </ul>
      </section>

      {/* Additional Info in Cards */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[var(--color-accent-dark)] mb-6">
          🔍 Additional Info
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-[var(--color-accent)] mb-2">Common Errors</h3>
            <p className="text-[var(--color-text-muted)]">
              Watch out for subject-verb agreement, article usage, and tense mistakes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-[var(--color-accent)] mb-2">Books to Refer</h3>
            <p className="text-[var(--color-text-muted)]">
              Wren & Martin, Word Power Made Easy, Objective English by S.P. Bakshi.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-[var(--color-accent)] mb-2">Exam Focus</h3>
            <p className="text-[var(--color-text-muted)]">
              Pay attention to formats of exams like CAT, SSC, and Bank PO that often include VA sections.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-[var(--color-accent)] mb-2">Real-World Benefit</h3>
            <p className="text-[var(--color-text-muted)]">
              Strong verbal ability improves communication in interviews, writing emails, and public speaking.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-[var(--color-accent)] mb-2">Practice Frequency</h3>
            <p className="text-[var(--color-text-muted)]">
              Dedicate 30 minutes daily to verbal questions to see gradual improvement.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-[var(--color-accent)] mb-2">Mock Tests</h3>
            <p className="text-[var(--color-text-muted)]">
              Attempt full-length mock tests with sectional timers to simulate exam conditions.
            </p>
          </div>
        </div>
      </section>

      {/* === Section: Theory === */}
      <section className="grid gap-6 md:grid-cols-2 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-purple-600 mb-3">📘 Grammar & Usage</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Grammar rules are essential for sentence correction and spotting errors. Focus on subject-verb agreement, tenses, modifiers, articles, prepositions, and voice.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-purple-600 mb-3">📖 Reading Comprehension</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Tests your ability to understand, interpret, and infer from passages. Practice both factual and inferential questions. Speed reading and skimming improve performance.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-purple-600 mb-3">🔀 Para Jumbles</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            These test your logical sequencing skills. Identify opening/closing sentences and use connectors or pronouns as clues. Practice helps develop flow sense.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-purple-600 mb-3">🔤 Vocabulary</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Includes synonyms, antonyms, word usage, and idioms/phrases. Build vocabulary through daily reading and flashcards. Context-based guessing is key in exams.
          </p>
        </div>
      </section>

      {/* === Section: Practice Questions === */}
      <section className="mb-12">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">📝 Practice Questions</h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-800 text-lg">
            <li><strong>RC:</strong> Read the passage and answer — What is the main idea of the passage?</li>
            <li><strong>Error Spotting:</strong> He don't have any idea about the plan. [Find the error]</li>
            <li><strong>Para Jumble:</strong> Reorder the following sentences to form a coherent paragraph.</li>
            <li><strong>Fill in the blanks:</strong> She is ______ to speak in public. (afraid/afraid of)</li>
            <li><strong>Synonym:</strong> Choose the word closest in meaning to “Taciturn”.</li>
          </ul>
        </div>
      </section>

      {/* === Section: Tips & Tricks === */}
      <section className="grid gap-6 md:grid-cols-2 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-purple-600 mb-3">💡 Grammar Tips</h2>
          <ul className="list-disc pl-5 text-lg space-y-2">
            <li>Always check subject-verb agreement in complex sentences.</li>
            <li>Use elimination in multiple-choice grammar questions.</li>
            <li>Practice active vs. passive voice conversions.</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-purple-600 mb-3">🧠 RC Solving Strategy</h2>
          <ul className="list-disc pl-5 text-lg space-y-2">
            <li>Skim first, then read closely for question-specific areas.</li>
            <li>Answer factual questions first, then inference-based ones.</li>
            <li>Mark keywords or transitional phrases during reading.</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-purple-600 mb-3">🔗 Para Jumbles Tricks</h2>
          <ul className="list-disc pl-5 text-lg space-y-2">
            <li>Find opening sentences (no pronouns, general statement).</li>
            <li>Match pairs based on logical connectors or flow.</li>
            <li>Look for cause-effect or chronological sequences.</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-purple-600 mb-3">📘 Vocabulary Memory Tips</h2>
          <ul className="list-disc pl-5 text-lg space-y-2">
            <li>Use Mnemonics: “Taciturn” → sounds like “Taxi turns quietly”.</li>
            <li>Use flashcards with examples in sentences.</li>
            <li>Read newspapers to see word usage in context.</li>
          </ul>
        </div>
      </section>

      {/* === Section: More Info (Cards) === */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-purple-600 mb-6">📚 Additional Info</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-4">
            <h3 className="font-bold text-lg mb-2 text-purple-700">Common VA Topics</h3>
            <ul className="list-disc pl-4 space-y-1 text-[var(--color-text-muted)]">
              <li>Sentence Correction</li>
              <li>Reading Comprehension</li>
              <li>Synonyms & Antonyms</li>
              <li>Para Completion</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4">
            <h3 className="font-bold text-lg mb-2 text-purple-700">Recommended Books</h3>
            <ul className="list-disc pl-4 space-y-1 text-[var(--color-text-muted)]">
              <li>Word Power Made Easy – Norman Lewis</li>
              <li>High School English Grammar – Wren & Martin</li>
              <li>Objective English – SP Bakshi</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4">
            <h3 className="font-bold text-lg mb-2 text-purple-700">Practice Strategy</h3>
            <ul className="list-disc pl-4 space-y-1 text-[var(--color-text-muted)]">
              <li>Daily 1 RC + 5 Grammar + 5 Vocab Questions</li>
              <li>Revise difficult words weekly</li>
              <li>Take timed mock tests for speed</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default VerbalAbilityTopic;
