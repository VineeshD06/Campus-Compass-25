"use client";
import React, { useState } from 'react';
import Sidebar from './components/SideBar';
import Indicators from './components/Indicators';
import DataTable from './components/DataTable';
import NoticeForm from './components/NoticeForm';

const Index = () => {
  const [activeSection, setActiveSection] = useState('logs');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeSection) {
      case 'Noticeboard':
        return <NoticeForm />;
      default:
        return (
          <>
            <Indicators />
            <div className="mt-8">
              <DataTable Section={activeSection} />
            </div>
          </>
        );
    }
  };

  return (
      <div className="flex min-h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />
        <main className="flex-1 transition-all duration-300 overflow-x-hidden">
          <div className="p-6">
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-2">
                Admin Portal
              </h1>
            </div>
            
            {renderContent()}
          </div>
        </main>
      </div>
  );
};

export default Index;