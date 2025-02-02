import React from 'react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const ScholarshipDashboard = () => {
  const fundingData = [
    { name: 'Data Visualization', value: 941 },
    { name: 'Project Management', value: 658 },
    { name: 'Digital Marketing', value: 385 },
    { name: 'Health Care Management', value: 397 }
  ];

  const educationData = [
    { name: 'Graduate', value: 45.8 },
    { name: 'Undergraduate', value: 34.5 },
    { name: 'Not in Education', value: 14.1 },
    { name: 'High School', value: 5.6 }
  ];

  const skillsData = [
    { name: 'Critical Thinking', value: 2411 },
    { name: 'Communication', value: 2344 },
    { name: 'Creative Thinking', value: 2194 },
    { name: 'Collaboration', value: 2083 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="w-full h-screen bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">Scholarship & Opportunities Dashboard</h1>
      
      <div className="grid grid-cols-2 gap-4">
        {/* Funding Distribution */}
        <div className="bg-gray-50 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Funding Distribution (K$)</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={fundingData}>
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Education Levels */}
        <div className="bg-gray-50 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Education Levels</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={educationData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {educationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Top Skills */}
        <div className="bg-gray-50 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Top Skills Distribution</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={skillsData}>
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Opportunities Summary */}
        <div className="bg-gray-50 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Opportunities Overview</h2>
          <div className="space-y-2">
            <p className="text-sm">Courses: 0.8K started, 0.6K rewarded</p>
            <p className="text-sm">Events: 1.3K team allocations</p>
            <p className="text-sm">Internships: 8.1K started, 1.6K rewarded</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDashboard;