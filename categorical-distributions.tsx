import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import Papa from 'papaparse';

const CategoricalDistributions = () => {
  const [data, setData] = useState({
    opportunityCategories: [],
    genderDistribution: [],
    studentStatus: []
  });

  useEffect(() => {
    const loadData = async () => {
      const response = await window.fs.readFile('Opportunity Wise Data.csv', { encoding: 'utf8' });
      const parsedData = Papa.parse(response, {
        header: true,
        skipEmptyLines: true
      });
      
      // Process opportunity categories
      const categories = {};
      const genders = {};
      const status = {};
      
      parsedData.data.forEach(row => {
        // Count categories
        categories[row['Opportunity Category']] = (categories[row['Opportunity Category']] || 0) + 1;
        genders[row['Gender'] || 'Unknown'] = (genders[row['Gender'] || 'Unknown'] || 0) + 1;
        status[row['Current Student Status'] || 'Unknown'] = (status[row['Current Student Status'] || 'Unknown'] || 0) + 1;
      });

      setData({
        opportunityCategories: Object.entries(categories).map(([name, value]) => ({ name, value })),
        genderDistribution: Object.entries(genders).map(([name, value]) => ({ name, value })),
        studentStatus: Object.entries(status).map(([name, value]) => ({ name, value }))
      });
    };

    loadData();
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="space-y-8">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Opportunity Categories Distribution</h2>
        <div className="h-64">
          <BarChart width={600} height={250} data={data.opportunityCategories}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Gender Distribution</h2>
        <div className="h-64">
          <PieChart width={400} height={250}>
            <Pie
              data={data.genderDistribution}
              cx={200}
              cy={125}
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.genderDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Student Status Distribution</h2>
        <div className="h-64">
          <PieChart width={400} height={250}>
            <Pie
              data={data.studentStatus}
              cx={200}
              cy={125}
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.studentStatus.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default CategoricalDistributions;