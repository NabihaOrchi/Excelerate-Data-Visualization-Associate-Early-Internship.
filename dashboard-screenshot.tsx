import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { Download, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ScreenshotDashboard() {
  // Sample data
  const trendData = [
    { month: 'Jan', value: 40 }, 
    { month: 'Feb', value: 30 }, 
    { month: 'Mar', value: 25 },
    { month: 'Apr', value: 40 }, 
    { month: 'May', value: 60 }, 
    { month: 'Jun', value: 65 }
  ];

  const pieData = [
    { name: 'A', value: 35 },
    { name: 'B', value: 25 },
    { name: 'C', value: 20 },
    { name: 'D', value: 20 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="bg-[#e6f3f7] w-[1280px] h-[800px] p-6 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <input 
          type="text" 
          className="w-64 p-2 border border-gray-300 rounded bg-white"
          placeholder="Page Title"
          defaultValue="Data Analysis Dashboard"
        />
        <div className="flex gap-2">
          <select className="p-2 border border-gray-300 rounded bg-white text-sm">
            <option>Opportunity Data (20,322)</option>
            <option>User Data (27,563)</option>
          </select>
          <button className="p-2 bg-white rounded border border-gray-300">
            <Download className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex gap-4 h-[650px]">
        {/* Left Sidebar */}
        <div className="w-48 flex flex-col gap-4">
          {/* Navigation */}
          <div className="bg-white rounded-md p-3 shadow-sm">
            <div className="text-sm font-medium mb-2">Navigation</div>
            {['Overview', 'Detailed Analysis', 'User Metrics'].map((page, i) => (
              <button
                key={i}
                className={`w-full text-left px-3 py-2 rounded-md mb-1 text-sm ${
                  i === 0 ? 'bg-blue-100' : 'bg-[#e6f3f7] hover:bg-[#d9ebf1]'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="bg-white rounded-md p-3 shadow-sm flex-1">
            <div className="flex justify-between items-center mb-3">
              <div className="text-sm font-medium">Filters</div>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Filter className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            {['Date Range', 'Data Category', 'Status', 'Region'].map((filter, i) => (
              <div key={i} className="mb-3">
                <div className="text-sm text-gray-600 mb-1">{filter}</div>
                <select className="w-full p-1.5 border border-gray-200 rounded text-sm bg-white">
                  <option>Select {filter}</option>
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* KPIs */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {[
              { title: 'Total Records', value: '20,322', change: '+2.5%' },
              { title: 'Active Users', value: '15,420', change: '+5.2%' },
              { title: 'Conversion Rate', value: '68.5%', change: '+1.8%' },
              { title: 'Growth Rate', value: '+12.3%', change: '+3.1%' }
            ].map((kpi, i) => (
              <div key={i} className="bg-white p-4 rounded-md shadow-sm">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center" />
                  <div className="text-xs text-green-600">{kpi.change}</div>
                </div>
                <div className="mt-2">
                  <div className="text-sm text-gray-600">{kpi.title}</div>
                  <div className="text-xl font-semibold mt-1">{kpi.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 flex-1">
            {/* Left Column */}
            <div className="flex-1">
              <div className="bg-white p-4 rounded-md shadow-sm h-[400px]">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm font-medium">Trend Analysis</div>
                  <select className="text-sm border border-gray-200 rounded p-1">
                    <option>Last 6 Months</option>
                  </select>
                </div>
                <div className="h-[300px]">
                  <ResponsiveContainer>
                    <LineChart data={trendData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={{ fill: '#2563eb' }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Pie Chart */}
              <div className="bg-white p-4 rounded-md shadow-sm h-[200px]">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-medium">Categorical Analysis</div>
                  <select className="text-sm border border-gray-200 rounded p-1">
                    <option>By Category</option>
                  </select>
                </div>
                <div className="h-[150px]">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={pieData}
                        innerRadius={40}
                        outerRadius={60}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-white p-4 rounded-md shadow-sm flex-1">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm font-medium">Data Table</div>
                  <button className="text-sm text-blue-600">View All →</button>
                </div>
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      {['ID', 'Category', 'Status', 'Date'].map(header => (
                        <th key={header} className="text-xs text-gray-500 font-medium text-left p-2">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3].map(row => (
                      <tr key={row} className="border-t border-gray-100">
                        {[1, 2, 3, 4].map(cell => (
                          <td key={cell} className="p-2">
                            <div className="h-4 bg-gray-100 rounded w-20" />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-600">Team DVA 0601 - 1A</div>
        <div className="flex items-center gap-2">
          <button className="p-1 bg-white rounded border border-gray-200">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="text-sm text-gray-600">Page 1</div>
          <button className="p-1 bg-white rounded border border-gray-200">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
