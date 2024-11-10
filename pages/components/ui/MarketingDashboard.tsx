import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const clients = [
  {
    name: 'Blue Island',
    monthly: 2250,
    annual: 25800,
    budget2025: 40600,
  },
  {
    name: 'Domochemica',
    monthly: 410,
    annual: 5520,
    budget2025: 5520,
  },
  {
    name: 'PM Tseriotis',
    monthly: 55,
    annual: 660,
    budget2025: 660,
  },
  {
    name: 'Finders',
    monthly: 200,
    annual: 2400,
    budget2025: 2400,
  },
  {
    name: 'Flamingo Motors',
    monthly: 580,
    annual: 5160,
    budget2025: 8170,
  },
  {
    name: 'Flamingo Properties',
    monthly: 430,
    annual: 5160,
    budget2025: 8620,
  },
  {
    name: 'Adboard',
    monthly: 500,
    annual: 6000,
    budget2025: 1500,
  },
  {
    name: 'IAAC',
    monthly: 500,
    annual: 6000,
    budget2025: 1500,
  },
  {
    name: 'Unicars',
    monthly: 12500,
    annual: 150000,
    budget2025: 150000,
  }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FAD000', '#FF6B6B', '#4CAF50'];

export default function MarketingDashboard() {
  const [selectedClient, setSelectedClient] = useState('all');

  const totalStats = {
    totalMonthly: 17370,
    totalAnnual: 206700,
    total2025: 218970,
    totalPaidBudget: 22600,
    totalCompanyFees: 196370
  };

  return (
    <div className="p-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-blue-800">Total Monthly</h3>
          <p className="text-2xl font-bold text-blue-900">€{totalStats.totalMonthly.toLocaleString()}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-green-800">Total Annual</h3>
          <p className="text-2xl font-bold text-green-900">€{totalStats.totalAnnual.toLocaleString()}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-purple-800">2025 Budget</h3>
          <p className="text-2xl font-bold text-purple-900">€{totalStats.total2025.toLocaleString()}</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-orange-800">Paid Budget</h3>
          <p className="text-2xl font-bold text-orange-900">€{totalStats.totalPaidBudget.toLocaleString()}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="h-96 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={clients}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip formatter={(value) => `€${value.toLocaleString()}`} />
            <Legend />
            <Bar dataKey="monthly" name="Monthly" fill="#3B82F6" />
            <Bar dataKey="annual" name="Annual" fill="#10B981" />
            <Bar dataKey="budget2025" name="2025 Budget" fill="#8B5CF6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="h-96">
        <h3 className="text-lg font-semibold mb-4">Budget Distribution by Client (2025)</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={clients}
              dataKey="budget2025"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              label
            >
              {clients.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `€${value.toLocaleString()}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
