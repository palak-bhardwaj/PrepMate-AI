import React from 'react';
import { PREP_TOPICS } from '../../utils/prepTopics';

const PrepTopicsGrid = ({ onTopicSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {PREP_TOPICS.map(topic => (
        <div
          key={topic.id}
          onClick={() => onTopicSelect(topic)}
          className="card cursor-pointer hover:shadow-xl transition bg-white border border-[var(--color-card-border)] rounded-xl p-5"
        >
          <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-2">
            {topic.title}
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] mb-2">
            {topic.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {topic.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-[var(--color-bg-light)] text-[var(--color-text-main)] px-2 py-1 rounded-full border border-[var(--color-accent-dark)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrepTopicsGrid;
