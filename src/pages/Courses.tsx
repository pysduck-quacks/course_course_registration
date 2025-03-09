
import React, { useState } from 'react';
import MainLayout from '../components/MainLayout';
import SemesterTabs from '../components/SemesterTabs';
import { ArrowRight } from 'lucide-react';

const Courses = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Courses data
  const coursesData = [
    {
      code: 'CSE101',
      name: 'COA',
      sessions: 30,
      credits: 3.0,
      facultyName: 'Dr Satyendr Singh'
    },
    {
      code: 'CSE201',
      name: 'SE',
      sessions: 150,
      credits: 3.0,
      facultyName: 'Dr Nishtha Phutela'
    },
    {
      code: 'CSE205',
      name: 'MAD',
      sessions: 45,
      credits: 3.0,
      facultyName: 'Mr Gautam Gupta'
    },
    {
      code: 'PD1201',
      name: 'Design Thinking',
      sessions: 60,
      credits: 2.0,
      facultyName: 'Mr Avijit Chakravorty'
    },
    {
      code: 'CSE301',
      name: 'Machine Learning',
      sessions: 130,
      credits: 3.0,
      facultyName: 'Prof Anustha Rao'
    }
  ];

  return (
    <MainLayout title="Courses">
      <div className="glass-card overflow-hidden">
        <SemesterTabs activeTab={activeTab} onChange={setActiveTab} />
        
        <div className="p-6 bg-white rounded-b-2xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b">
                  <th className="pb-3">Code</th>
                  <th className="pb-3">Course Name</th>
                  <th className="pb-3">Sessions</th>
                  <th className="pb-3">Credits</th>
                  <th className="pb-3">Faculty Name</th>
                </tr>
              </thead>
              <tbody>
                {coursesData.map((course, index) => (
                  <tr key={index} className="table-row">
                    <td className="py-4 text-sm font-medium">{course.code}</td>
                    <td className="py-4 text-sm">{course.name}</td>
                    <td className="py-4 text-sm text-gray-600">{course.sessions}</td>
                    <td className="py-4 text-sm text-gray-600">{course.credits}</td>
                    <td className="py-4 text-sm">{course.facultyName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button 
              className="flex items-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-purple transition-all hover:bg-purple-dark"
            >
              Next
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Courses;
