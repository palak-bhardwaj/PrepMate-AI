import React from 'react';

const WebDevelopment = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">Full Stack Web Development</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        Full stack development involves building both the frontend and backend of web applications. A full stack developer understands how the web works end to end.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Frontend</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>HTML, CSS, JavaScript</li>
          <li>React.js, Vue.js, Angular</li>
          <li>Responsive Design, Tailwind, Bootstrap</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Backend</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Node.js, Express.js, Django</li>
          <li>REST APIs, JWT Authentication</li>
          <li>MongoDB, PostgreSQL, MySQL</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Tools</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Git & GitHub</li>
          <li>Postman, VSCode, Docker</li>
          <li>CI/CD, Netlify, Vercel, Heroku</li>
        </ul>
      </section>
    </div>
  );
};

export default WebDevelopment;
