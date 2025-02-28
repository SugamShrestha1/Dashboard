import React from "react";
import { Scale, Heart, Percent, ShoppingCart, Wallet, PhoneCall } from "lucide-react";

const reports = [
  {
    title: "BALANCE SHEET",
    value: "N/A",
    description: "Snapshot of your business.",
    icon: <Scale size={20} />,
  },
  {
    title: "GENERAL LEDGER",
    value: "N/A",
    description: "Detailed list of all transactions and their total.",
    icon: <Scale size={20} />,
  },
  {
    title: "PROFIT & LOSS",
    value: "-Rs10,113.00",
    description: "Quarterly profit & loss by category.",
    icon: <Heart size={20} />,
  },
  {
    title: "PROFIT & LOSS (COA)",
    value: "Rs0.00",
    description: "Quarterly profit & loss by chart of account.",
    icon: <Heart size={20} />,
  },
  {
    title: "TAX SUMMARY",
    value: "Rs0.00",
    description: "Quarterly tax summary.",
    icon: <Percent size={20} />,
  },
  {
    title: "TRIAL BALANCE",
    value: "Rs0.00",
    description: "Balance of all your chart of accounts.",
    icon: <Scale size={20} />,
  },
];

const incomeExpenses = [
  {
    title: "EXPENSE SUMMARY",
    value: "Rs20,000.00",
    description: "Monthly expense summary by category.",
    icon: <ShoppingCart size={20} />,
  },
  {
    title: "EXPENSE SUMMARY (COA)",
    value: "-Rs10,100.00",
    description: "Monthly expense summary by chart of account.",
    icon: <ShoppingCart size={20} />,
  },
  {
    title: "INCOME SUMMARY (COA)",
    value: "Rs0.00",
    description: "Monthly income summary by chart of account.",
    icon: <Wallet size={20} />,
  },
  {
    title: "INCOME VS EXPENSE",
    value: "Rs70,113.00",
    description: "Monthly income vs expense by category.",
    icon: <PhoneCall size={20} />,
  },
  {
    title: "INCOME VS EXPENSE (COA)",
    value: "Rs30,100.00",
    description: "Monthly income vs expense by chart of account.",
    icon: <PhoneCall size={20} />,
  },
  {
    title: "INCOME VS EXPENSE (COA)",
    value: "Rs30,100.00",
    description: "Monthly income vs expense by chart of account.",
    icon: <PhoneCall size={20} />,
  },
];

const Reports: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Reports</h2>
        <div className="space-x-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">Add New</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md">Clear Cache</button>
        </div>
      </div>

      <h3 className="text-lg font-medium mb-2">Accounting</h3>
      <div className="grid grid-cols-3 gap-4">
        {reports.map((report, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow flex items-start space-x-4">
            <div className="bg-orange-500 text-white p-2 rounded-full">{report.icon}</div>
            <div>
              <h4 className="text-gray-600 font-semibold">{report.title}</h4>
              <p className="text-xl font-bold">{report.value}</p>
              <p className="text-gray-500 text-sm">{report.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-medium mt-6 mb-2">Income & Expense</h3>
      <div className="grid grid-cols-3 gap-4">
        {incomeExpenses.map((report, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow flex items-start space-x-4">
            <div className="bg-orange-500 text-white p-2 rounded-full">{report.icon}</div>
            <div>
              <h4 className="text-gray-600 font-semibold">{report.title}</h4>
              <p className="text-xl font-bold">{report.value}</p>
              <p className="text-gray-500 text-sm">{report.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
