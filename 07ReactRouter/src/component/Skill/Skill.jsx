import React from 'react';

function Skill() {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">My Skills</h2>
      <ul className="space-y-6">
        {[
          { skill: 'Node.js', progress: 90, color: 'bg-green-600' },
          { skill: 'Java', progress: 70, color: 'bg-blue-600' },
          { skill: 'AWS', progress: 60, color: 'bg-orange-600' },
          { skill: 'React', progress: 75, color: 'bg-blue-500' },
          { skill: 'Selenium', progress: 80, color: 'bg-yellow-600' },
          { skill: 'C++', progress: 85, color: 'bg-purple-600' },
          { skill: 'Graphql', progress: 80, color: 'bg-purple-600' },
          { skill: 'Express', progress: 85, color: 'bg-purple-600' },
          { skill: 'WebDriver', progress: 75, color: 'bg-purple-600' },
          { skill: 'Backend Development', progress: 85, color: 'bg-purple-600' },
          { skill: 'Angular', progress: 65, color: 'bg-purple-600' },
          { skill: 'Oracle Apex', progress: 75, color: 'bg-purple-600' },
          { skill: 'PL/Sql', progress: 70, color: 'bg-purple-600' },
          { skill: 'JavaScript', progress: 85, color: 'bg-purple-600' },
          { skill: 'Postman', progress: 85, color: 'bg-purple-600' },
          { skill: 'Api and Ui Automation', progress: 85, color: 'bg-purple-600' },
        ].map((item, index) => (
          <li key={index} className="flex items-center hover:scale-105 transition-all duration-300 ml-6">
            <span className="w-32 font-medium text-gray-700">{item.skill}</span>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`${item.color} h-3 rounded-full transition-all duration-500 ease-in-out`}
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skill;
