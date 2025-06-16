"use client";
import React, { useState } from 'react';
import { Search, Eye, X, Trash2 } from 'lucide-react';

interface DataTableProps {
  Section: string;
}

const DataTable = ({ Section }: DataTableProps) => {
  const sampleData = {
    Logs: [
      { 
        id: 1, 
        description: 'Example', 
      }
    ],
    Requests: [
      { 
        id: 1, 
        description: 'Example', 
      }
    ],
    flags: [
      { 
        id: 1, 
        description: 'Example', 
      }
    ]
  };

  const data = sampleData[Section as keyof typeof sampleData] || sampleData.Logs;

  return (
    <>
      <div className=" text-black bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 py-2">
          <h2 className="text-xl font-bold text-slate-800">{Section} Data</h2>

          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => {}}
              className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>
        </div>
      


        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 text-lg">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-slate-600  ">ID</th>
                <th className="px-6 py-4 text-left font-semibold text-slate-600  ">Description</th>
                <th className="px-6 py-4 text-left font-semibold text-slate-600  ">View</th>
                <th className="px-6 py-4 text-left font-semibold text-slate-600  ">Delete</th>


              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-900 rounded-lg">
              {data.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-200 transition-colors ">
                  <td className="px-6 py-4 ">
                    <span className="text-sm font-medium rounded-lg ">{item.id}</span>
                  </td>
                  <td className="px-6 py-4">
                      {item.description}
                  </td>
                  <td className="px-6 py-4 ">
                    <button className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Eye size={16} />
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Trash2  size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
        

      
      
    </>
  );
};

export default DataTable;