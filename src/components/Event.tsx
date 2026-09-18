"use client";

import { Event } from "@/types/event.interface";
import { Check } from "lucide-react";

export const EventModal = ({event}: {event: Event}) => {
  return (
    <div key={event.id} className="relative w-full border border-gray-800 bg-gray-900 rounded-none overflow-hidden font-mono group">
      
      {/* Decorative Blueprint Intersections */}
      <div className="absolute top-0 right-1/3 w-12 h-12 bg-violet-600 border-l border-b border-gray-800 hidden md:block z-10"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-violet-600 border-t border-r border-gray-800 hidden md:block z-10"></div>
      
      {/* Event Header */}
      <div className="bg-gray-950 px-4 sm:px-6 py-4 border-b border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 relative z-20">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
          SYS.EVENT // {event.date}
        </span>
        <span className="bg-violet-600 text-white text-[10px] font-bold px-3 py-1 border border-violet-600 uppercase tracking-widest">
          {event.status}
        </span>
      </div>

      <div className="p-4 sm:p-6 md:p-10 flex flex-col md:flex-row gap-0 w-full relative z-20">
        
        {/* Left Grid Panel: Core Info */}
        <div className="space-y-10 flex-1 w-full md:border-r md:border-gray-800 md:pr-10">
          <div>
            <h3 className="text-3xl font-bold text-gray-100 mb-2 tracking-tight">{event.title}</h3>
            <p className="text-sm text-violet-400">{event.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 border-t border-gray-800 pt-8">
            <div className="space-y-1">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Time</p>
              <p className="text-sm text-gray-300">{event.time}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Location</p>
              <p className="text-sm text-gray-300">{event.location.room}</p>
              <p className="text-xs text-gray-600">{event.location.building}</p>
            </div>
          </div>

          <div className="space-y-4 pt-8 border-t border-gray-800">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">Speaker / Role</p>
            <div className="space-y-4">
              {event.speakers.map((speaker, idx) => (
                <div key={idx} className="flex flex-col border-l-2 border-violet-600 pl-3">
                  <span className="font-bold text-gray-100 text-lg">{speaker.name}</span>
                  <span className="text-gray-500 text-xs">{speaker.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Grid Panel: Execution Plan (HIDDEN ON MOBILE) */}
        <div className="hidden md:block flex-1 bg-gray-950 md:bg-transparent p-6 md:p-0 md:pl-10 w-full mt-8 md:mt-0">
          <h4 className="text-[10px] text-gray-500 uppercase tracking-widest mb-6">Execution Plan</h4>
          <ul className="space-y-4">
            {event.execution_plan.map((topic, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                <div className="w-4 h-4 mt-0.5 shrink-0 bg-gray-800 border border-gray-700 flex items-center justify-center rounded-none">
                  <Check className="w-3 h-3 text-violet-500" />
                </div>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}