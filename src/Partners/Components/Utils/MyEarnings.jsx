import React from "react";

const MyEarnings = () => {
  return (
    <div className="bg-fuchsia-100 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-5xl p-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Shop Logo"
              className="w-20 h-20 rounded-full border-4 border-fuchsia-300 object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-neutral-700">Shop-Sukh Mart</h2>
              <p className="text-neutral-500">Lucknow, India</p>
              <p className="text-neutral-400 text-sm">Earnings Report: 01 Oct 2025 - 31 Oct 2025</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <button className="bg-fuchsia-400 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-fuchsia-500 transition">
              Download Report
            </button>
          </div>
        </div>

        {/* Earnings Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-fuchsia-50 rounded-xl p-4 text-center shadow">
            <p className="text-sm text-neutral-400">Total Revenue</p>
            <h3 className="text-xl font-bold text-neutral-700 mt-1">₹ 2,47,800</h3>
          </div>

          <div className="bg-fuchsia-50 rounded-xl p-4 text-center shadow">
            <p className="text-sm text-neutral-400">This Month</p>
            <h3 className="text-xl font-bold text-neutral-700 mt-1">₹ 54,600</h3>
          </div>

          <div className="bg-fuchsia-50 rounded-xl p-4 text-center shadow">
            <p className="text-sm text-neutral-400">Pending Payout</p>
            <h3 className="text-xl font-bold text-neutral-700 mt-1">₹ 12,400</h3>
          </div>

          <div className="bg-fuchsia-50 rounded-xl p-4 text-center shadow">
            <p className="text-sm text-neutral-400">Last Payment</p>
            <h3 className="text-xl font-bold text-neutral-700 mt-1">₹ 18,200</h3>
          </div>
        </div>

        {/* Transaction History */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-neutral-700 mb-3">Recent Transactions</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm text-neutral-600">
              <thead className="bg-fuchsia-50 text-neutral-700">
                <tr>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Order ID</th>
                  <th className="px-4 py-2 border">Amount</th>
                  <th className="px-4 py-2 border">Payment Mode</th>
                  <th className="px-4 py-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">21 Oct 2025</td>
                  <td className="px-4 py-2 border">ORD1029</td>
                  <td className="px-4 py-2 border">₹ 1,250</td>
                  <td className="px-4 py-2 border">UPI</td>
                  <td className="px-4 py-2 border text-green-500 font-semibold">Completed</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">19 Oct 2025</td>
                  <td className="px-4 py-2 border">ORD1028</td>
                  <td className="px-4 py-2 border">₹ 780</td>
                  <td className="px-4 py-2 border">Card</td>
                  <td className="px-4 py-2 border text-green-500 font-semibold">Completed</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">18 Oct 2025</td>
                  <td className="px-4 py-2 border">ORD1027</td>
                  <td className="px-4 py-2 border">₹ 1,890</td>
                  <td className="px-4 py-2 border">Cash</td>
                  <td className="px-4 py-2 border text-yellow-500 font-semibold">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Info */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-neutral-700 mb-3">Payment Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-fuchsia-50 p-4 rounded-xl shadow">
              <p className="text-neutral-500">Bank Name:</p>
              <p className="font-semibold text-neutral-700">HDFC Bank</p>
              <p className="text-neutral-500 mt-2">Account No:</p>
              <p className="font-semibold text-neutral-700">XXXXXX4532</p>
            </div>
            <div className="bg-fuchsia-50 p-4 rounded-xl shadow">
              <p className="text-neutral-500">UPI ID:</p>
              <p className="font-semibold text-neutral-700">shopsukh@upi</p>
              <p className="text-neutral-500 mt-2">Next Payout:</p>
              <p className="font-semibold text-neutral-700">27 Oct 2025</p>
            </div>
          </div>
        </div>

        {/* Taxes & Deductions */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-neutral-700 mb-3">Taxes & Deductions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-fuchsia-50 p-4 rounded-xl shadow text-center">
              <p className="text-sm text-neutral-400">GST Deduction</p>
              <h3 className="text-xl font-bold text-neutral-700 mt-1">₹ 4,120</h3>
            </div>
            <div className="bg-fuchsia-50 p-4 rounded-xl shadow text-center">
              <p className="text-sm text-neutral-400">Platform Fees</p>
              <h3 className="text-xl font-bold text-neutral-700 mt-1">₹ 1,250</h3>
            </div>
            <div className="bg-fuchsia-50 p-4 rounded-xl shadow text-center">
              <p className="text-sm text-neutral-400">TDS</p>
              <h3 className="text-xl font-bold text-neutral-700 mt-1">₹ 980</h3>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t pt-3 text-center text-neutral-400 text-sm">
          <p>Generated on: 23 Oct 2025</p>
          <p>Report ID: __________</p>
        </div>
      </div>
    </div>
  );
};

export default MyEarnings;
