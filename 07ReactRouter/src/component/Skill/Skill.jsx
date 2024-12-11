import React from 'react';

// Data for skills and progress with updated colors
const skills = [
  { skill: 'Node.js', progress: 90, color: 'bg-teal-600' },
  { skill: 'Java', progress: 70, color: 'bg-indigo-600' },
  { skill: 'AWS', progress: 60, color: 'bg-amber-600' },
  { skill: 'React', progress: 75, color: 'bg-sky-500' },
  { skill: 'Selenium', progress: 80, color: 'bg-yellow-500' },
  { skill: 'C++', progress: 85, color: 'bg-violet-600' },
  { skill: 'Graphql', progress: 80, color: 'bg-violet-500' },
  { skill: 'Express', progress: 85, color: 'bg-indigo-500' },
  { skill: 'WebDriver', progress: 75, color: 'bg-indigo-400' },
  { skill: 'Backend Development', progress: 85, color: 'bg-blue-500' },
  { skill: 'Angular', progress: 65, color: 'bg-amber-400' },
  { skill: 'Oracle Apex', progress: 75, color: 'bg-teal-500' },
  { skill: 'PL/Sql', progress: 70, color: 'bg-orange-500' },
  { skill: 'JavaScript', progress: 85, color: 'bg-yellow-400' },
  { skill: 'Postman', progress: 85, color: 'bg-pink-600' },
  { skill: 'API and UI Automation', progress: 85, color: 'bg-pink-500' },
];

// Skill component to render the skills
const Skill = () => {
  return (
    <div className="p-6 sm:p-10 bg-white rounded-lg shadow-2xl border border-gray-200 max-w-4xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">My Skills</h2>
      
      <ul className="space-y-6">
        {skills.map((item, index) => (
          <SkillItem key={index} skill={item.skill} progress={item.progress} color={item.color} />
        ))}
      </ul>
    </div>
  );
};

// SkillItem component for rendering each skill and its progress
const SkillItem = ({ skill, progress, color }) => {
  return (
    <li className="flex items-center hover:scale-105 transition-all duration-300 ml-6 sm:ml-0">
      <span className="w-32 font-medium text-gray-700">{skill}</span>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`${color} h-3 rounded-full transition-all duration-500 ease-in-out`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </li>
  );
};

export default Skill;
