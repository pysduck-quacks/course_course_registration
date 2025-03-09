
import React from 'react';

interface SemesterTabsProps {
  activeTab: number;
  onChange: (index: number) => void;
}

const SemesterTabs: React.FC<SemesterTabsProps> = ({ activeTab, onChange }) => {
  const tabs = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'];
  
  return (
    <div className="bg-purple-500 rounded-t-2xl px-2 pt-2">
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-6 py-3 text-sm transition-all duration-200 ${
              activeTab === index ? 'tab-active' : 'tab-inactive'
            }`}
            onClick={() => onChange(index)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SemesterTabs;
