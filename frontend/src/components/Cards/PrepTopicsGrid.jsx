import React from 'react';
import { PREP_TOPICS } from '../../utils/prepTopics';

const PrepTopicsGrid = ({ onTopicSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {PREP_TOPICS.map((topic) => (
        <div
          key={topic.id}
          onClick={() => onTopicSelect(topic)}
          className="bg-white border border-[var(--color-card-border)] rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
        >
          {/* Title */}
          <h3 className="text-lg font-semibold text-[var(--color-accent-dark)] mb-2">
            {topic.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
            {topic.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {topic.tags.map((tag, index) => (
              <span
                key={index}
                className="text-[11px] bg-[var(--color-bg-light)] text-[var(--color-text-main)] px-2 py-1 rounded-full border border-[var(--color-accent-dark)]"
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
