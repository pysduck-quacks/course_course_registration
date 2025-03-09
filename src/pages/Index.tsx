
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import MainLayout from '../components/MainLayout';
import SemesterTabs from '../components/SemesterTabs';

const Index = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Course registration data
  const registrationData = [
    {
      unit: 'G2',
      subject: 'COA',
      issueDate: '03/02/2023',
      deadline: '03/05/2023',
      status: 'Submitted'
    },
    {
      unit: 'G1',
      subject: 'SE',
      issueDate: '03/09/2023',
      deadline: '03/09/2025',
      status: 'Pending'
    },
    {
      unit: 'G1',
      subject: 'MAD',
      issueDate: '03/02/2024',
      deadline: '03/10/2026',
      status: 'Pending'
    },
    {
      unit: 'G1',
      subject: 'Design Thinking',
      issueDate: '03/05/2025',
      deadline: '10/17/2025',
      status: 'Pending'
    },
    {
      unit: 'G2',
      subject: 'Machine Learning',
      issueDate: '03/08/2025',
      deadline: '03/10/2025',
      status: 'Late Submission'
    }
  ];

  const getStatusClass = (status: string) => {
    if (status === 'Submitted') return 'status-submitted';
    if (status === 'Pending') return 'status-pending';
    if (status === 'Late Submission') return 'status-late';
    return '';
  };

  const getStatusIcon = (status: string) => {
    if (status === 'Submitted') return <CheckCircle size={16} className="mr-1 text-green-600" />;
    if (status === 'Late Submission') return <XCircle size={16} className="mr-1 text-red-600" />;
    return null;
  };

  return (
    <MainLayout title="Course Registration">
      <div className="glass-card overflow-hidden">
        <SemesterTabs activeTab={activeTab} onChange={setActiveTab} />
        
        <div className="p-6 bg-white rounded-b-2xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b">
                  <th className="pb-3 pl-2 w-10"></th>
                  <th className="pb-3 w-16">Unit</th>
                  <th className="pb-3">Subject</th>
                  <th className="pb-3">Issues Date</th>
                  <th className="pb-3">Deadline</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {registrationData.map((item, index) => (
                  <tr key={index} className="table-row">
                    <td className="py-4 pl-2">
                      {item.status === 'Submitted' && (
                        <div className="w-4 h-4 rounded-full bg-green-500"></div>
                      )}
                      {item.status === 'Late Submission' && (
                        <div className="w-4 h-4 rounded-full bg-red-500"></div>
                      )}
                    </td>
                    <td className="py-4 text-sm font-medium">{item.unit}</td>
                    <td className="py-4 text-sm">{item.subject}</td>
                    <td className="py-4 text-sm text-gray-600">{item.issueDate}</td>
                    <td className="py-4 text-sm text-gray-600">{item.deadline}</td>
                    <td className="py-4">
                      <div className={`flex items-center ${getStatusClass(item.status)}`}>
                        {getStatusIcon(item.status)}
                        {item.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex justify-end">
            <Link 
              to="/courses" 
              className="flex items-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-purple transition-all hover:bg-purple-dark"
            >
              Next
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
