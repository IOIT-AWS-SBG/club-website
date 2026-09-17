"use client";

import { Event } from "@/types/event.interface";
import { Calendar, CheckCircle2, MapPin } from "lucide-react";

export const EventModal = ({event}: {event: Event}) => {
  return (
    <div key={event.id} className="w-full border border-gray-200 bg-white rounded-sm overflow-hidden">
      {/* Event Header */}
      <div className="bg-gray-50 px-4 sm:px-6 py-3 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
        <span className="text-sm font-semibold text-gray-600">Tech Session</span>
        <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded-sm border border-gray-300 uppercase">
          {event.status}
        </span>
      </div>

      <div className="p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-8 justify-between w-full">
        <div className="space-y-6 flex-1 w-full">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{event.title}</h3>
            <p className="text-sm text-gray-600">{event.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-800">{event.date}</p>
                <p className="text-xs text-gray-500">{event.time}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-800">{event.location.room}</p>
                <p className="text-xs text-gray-500">{event.location.building}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-gray-200">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Speakers</p>
            <ul className="space-y-2">
              {event.speakers.map((speaker, idx) => (
                <li key={idx} className="text-sm text-gray-600">
                  <span className="font-bold text-gray-900">{speaker.name}</span>, {speaker.role}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Execution Plan / Highlights (HIDDEN ON MOBILE, VISIBLE ON MEDIUM SCREENS AND UP) */}
        <div className="hidden md:block flex-1 bg-gray-50 border border-gray-200 p-4 sm:p-6 rounded-sm w-full">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Session Highlights</h4>
          <ul className="space-y-3">
            {event.execution_plan.map((topic, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#FF9900] shrink-0 mt-0.5" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}