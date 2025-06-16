"use client";
import React from 'react';
import { TrendingUp, Users, Activity, AlertTriangle, Edit, Trash2, Info } from 'lucide-react';

const Indicators = () => {
  const indicators = [
    {
      id: 1,
      title: 'Indicator',
      value: 'value',
      icon: Activity,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      change: '+12%',
      changeType: 'positive'
    },
    {
      id: 2,
      title: 'Indicator',
      value: 'value',
      icon: Activity,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      change: '+12%',
      changeType: 'positive'
    },
    {
      id: 3,
      title: 'Indicator',
      value: 'value',
      icon: Activity,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      change: '+12%',
      changeType: 'positive'
    },
    {
      id: 4,
      title: 'Indicator',
      value: 'value',
      icon: Activity,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      change: '+12%',
      changeType: 'positive'
    },
    {
      id: 5,
      title: 'Indicator',
      value: 'value',
      icon: Activity,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      change: '+12%',
      changeType: 'positive'
    },
  ];

  return (
    <div className="w-full overflow-x-hidden ">
    <div className="overflow-x-auto  flex gap-6 px-4 py-2 scrollbar-hide">
      {indicators.map((indicator) => {
        const Icon = indicator.icon;
        return (
          <div
            key={indicator.id}
            className={`min-w-[300px] relative p-6 rounded-2xl bg-gradient-to-br ${indicator.bgColor} border border-black shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-blue-500 border-black border-2 shadow-lg`}>
                <Icon size={24} className="text-white" />
              </div>
              
            </div>
            
            <h1 className="flex justify-between text-slate-700 mb-2">{indicator.title}  :  {indicator.value}</h1>
            <p className="text-2xl font-bold text-slate-800 mb-4"></p>
            
           <div className="flex gap-2 mt-2">
              <button className="flex-1 p-1 rounded">
                <Info size={16} className="text-slate-600" />
              </button>
              <button className="flex-1 p-1 rounded">
                <Edit size={16} className="text-blue-600" />
              </button>
              <button className="flex-1 p-1 rounded">
                <Trash2 size={16} className="text-red-600" />
              </button>
            </div>

            
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Indicators;