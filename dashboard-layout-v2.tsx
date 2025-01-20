import React, { useState } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const DashboardLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Sample data for trend line
  const trendData = [
    { value: 40 }, { value: 30 }, { value: 25 }, 
    { value: 40 }, { value: 60 }, { value: 65 }
  ];

  return (
    <div className="bg-[#e6f3f7] min-h-screen p-4">
      {/* Page Title */}
      <div className="mb-4">
        <input 
          type="text" 
          className="w-full max-w-md p-2 border border-gray-300 rounded bg-white"
          placeholder="Page Title"
        />
      </div>

      <div className="flex gap-4">
        {/* Left Sidebar */}
        <div className="w-48 flex flex-col gap-4">
          {/* Navigation */}
          <div className="bg-white rounded-md p-2 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Navigation</div>
            {['Page 1', 'Page 2', 'Page 3'].map((page, index) => (
              <button
                key={index}
                className="w-full text-left px-3 py-2 rounded-md mb-1 text-sm bg-[#e6f3f7] hover:bg-[#d9ebf1]"
              >
                {page}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="bg-white rounded-md p-2 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Filters</div>
            {['Filter 1', 'Filter 2', 'Filter 3', 'Filter 4'].map((filter, index) => (
              <div key={index} className="mb-2">
                <div className="text-sm text-gray-600 mb-1">{filter}</div>
                <input 
                  type="text" 
                  className="w-full p-1.5 border border-gray-200 rounded text-sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* KPIs Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {[1, 2, 3, 4].map((kpi) => (
              <div key={kpi} className="bg-white p-4 rounded-md shadow-sm h-32">
                <div className="w-12 h-12 bg-gray-200 rounded-md mb-2" />
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded w-3/4" />
                  <div className="h-2 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            {/* Left Column */}
            <div className="flex-1">
              {/* Trend Analysis */}
              <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                <div className="text-sm text-gray-600 mb-2">Trend Analysis</div>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData}>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#94a3b8" 
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Categorical Analysis */}
              <div className="bg-white p-4 rounded-md shadow-sm flex-1">
                <div className="text-sm text-gray-600 mb-2">Categorical Analysis</div>
                <div className="h-48 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="#e2e8f0" />
                    <path d="M50 50 L50 10 A40 40 0 0 1 85 65 Z" fill="#94a3b8" />
                    <path d="M50 50 L85 65 A40 40 0 0 1 15 65 Z" fill="#cbd5e1" />
                    <path d="M50 50 L15 65 A40 40 0 0 1 50 10 Z" fill="#e2e8f0" />
                  </svg>
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-sm text-gray-600 mb-2">Data Table</div>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((row) => (
                    <div key={row} className="h-6 bg-gray-100 rounded-md" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-4 gap-2">
        <button className="p-1 bg-white rounded border border-gray-200">←</button>
        <div className="text-sm text-gray-600">Page No.</div>
        <button className="p-1 bg-white rounded border border-gray-200">→</button>
      </div>
    </div>
  );
};

export default DashboardLayout;
