"use client";
import React from 'react';
import { FileText, MessageSquare, BarChart3, Flag, Menu, X, Bell, ArrowBigLeft } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar = ({ activeSection, setActiveSection, isOpen, setIsOpen }: SidebarProps) => {
  const navItems = [
    { id: 'Logs', icon: FileText },
    { id: 'Requests', icon: MessageSquare },
    { id: 'Dashboard', icon: BarChart3 },
    { id: 'Noticeboard', icon: Bell },
    { id: 'Flags', icon: Flag },
  ];

  return (
    <>
    <div
  className={`fixed left-0 top-0 h-full bg-blue-100 shadow-xl transition-all duration-300 z-40 ${
    isOpen ? 'w-64' : 'w-20'
  } relative`}
>
      <div className={`h-screen bg-blue-100 shadow-xl transition-all duration-50 ${
      isOpen ? 'w-64' : 'w-20'
      } `}>
        <div className="p-4 border-b border-slate-200">
          <button
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 
              <div className='flex'>
                <ArrowBigLeft className=" mt-4 hover:bg-slate-300" color="darkblue" size={36} fill='darkblue' />
                <div className='font-extrabold text-3xl text-blue-900 '>Campus Compass</div>
              </div>
            : <Menu className=" mt-4 ml-1 hover:bg-slate-300" color="darkblue" size={36}  strokeWidth={3}
            />
            }
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex p-3 rounded-xl transition-all duration-200 border-2 border-b-blue-300 bg-white ${isOpen? 'gap-3': 'justify-center' } ${
                  isActive
                    ? `bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105`
                    : 'hover:bg-slate-100 text-slate-900 hover:transform hover:scale-105'
                }`}
              >
                <div className="flex items-center justify-center">
                <Icon size={30} className={`p-1 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                {isOpen && (
                  <span className={`font-medium ${isActive ? 'text-white' : 'text-slate-700'}`}>
                    {item.id}
                  </span>
                )}
                </div>
              </button>
            );
          })}
        </nav>
        
        {isOpen && (
          <div className="absolute bottom-4 left-4 right-4">
            <button className="w-full p-3 text-white text-l hover:bg-slate-700 bg-slate-800 rounded-lg transition-colors">
              Log out
            </button>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default Sidebar;