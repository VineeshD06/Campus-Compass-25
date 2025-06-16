"use client";

import React, { useState } from "react";
import { Save, Send, X } from "lucide-react";

const NoticeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    publisher: "",
    eventDate: "",
    eventTime: "",
    location: "",
    entity: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const supplementaryFields = [
  {
    name: "publisher",
    label: "Publisher",
    type: "text",
    placeholder: "Enter publisher name",
  },
  {
    name: "eventDate",
    label: "Event Date",
    type: "date",
  },
  {
    name: "eventTime",
    label: "Event Time",
    type: "time",
  },
  {
    name: "location",
    label: "Location",
    type: "text",
    placeholder: "Enter location",
  },
  {
    name: "entity",
    label: "Entity",
    type: "text",
    placeholder: "Enter entity",
  },
];


  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-6">
        Notice Publishing Form
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Section: Main Content */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter notice title"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg transition-all text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={6}
              placeholder="Enter notice details"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg transition-all resize-none text-black"
            />
          </div>
        </div>

        {/* Section: Supplementary Details */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supplementaryFields.map((field) => (
              <div key={field.name}>
                <label className="block mb-1 text-sm font-medium text-slate-700">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  className={`w-full px-3 py-2 border border-slate-300 rounded-lg text-black  transition ${
                    !formData[field.name as keyof typeof formData] ? "text-slate-400" : "text-black"
                   }`}
                />
              </div>
      ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              <X size={16} />
              Discard
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
              <Save size={16} />
              Save
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg">
              <Send size={16} />
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeForm;
