"use client";

import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import {
  TeamData,
  TeamMember,
} from "@/types/team.interface";

const categories = [
  "All",
  "Core",
  "Technical",
  "Operation",
  "Media",
  "Design",
  "Documentation",
  "Community",
  "Project",
];

export const Team = ({ team }: { team: TeamData }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMembers: TeamMember[] =
    selectedCategory === "All"
      ? team.members
      : team.members.filter(
          (member) => member.category === selectedCategory
        );

  return (
    <div className="w-full flex flex-col gap-16">

      {/* ========================================================= */}
      {/* FACULTY COORDINATOR */}
      {/* ========================================================= */}

      <div className="w-full">

        <div className="flex items-center gap-3 mb-5">
          <div className="w-2 h-2 bg-violet-500"></div>

          <p className="text-[10px] text-gray-500 uppercase tracking-widest">
            Faculty Coordinator
          </p>
        </div>

        <div className="relative w-full border border-gray-800 bg-gray-900 overflow-hidden">

          <div className="absolute top-0 right-0 w-12 h-12 bg-violet-600 border-l border-b border-gray-800"></div>

          <div className="flex flex-col sm:flex-row">

            {/* Faculty Photo */}
            <div className="relative w-full sm:w-52 h-64 sm:h-56 shrink-0 bg-gray-950 border-b sm:border-b-0 sm:border-r border-gray-800">

              <Image
                src={team.faculty_coordinator.photo}
                alt={team.faculty_coordinator.name}
                fill
                sizes="(max-width: 640px) 100vw, 208px"
                className="object-cover"
              />

            </div>

            {/* Faculty Information */}
            <div className="flex flex-col justify-center p-6 sm:p-8">

              <p className="text-[9px] text-violet-400 uppercase tracking-widest mb-2">
                AWS Student Builder Group
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 uppercase tracking-tight">
                {team.faculty_coordinator.name}
              </h3>

              <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest">
                {team.faculty_coordinator.position}
              </p>

              {/* Faculty Social Links */}
              <div className="flex items-center gap-2 mt-5">

                {team.faculty_coordinator.linkedin && (
                  <a
                    href={team.faculty_coordinator.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${team.faculty_coordinator.name} LinkedIn`}
                    className="w-8 h-8 border border-gray-700 bg-gray-950 flex items-center justify-center text-gray-500 hover:text-violet-400 hover:border-violet-500 transition-colors"
                  >
                    <FaLinkedin className="w-3.5 h-3.5" />
                  </a>
                )}

                {team.faculty_coordinator.github && (
                  <a
                    href={team.faculty_coordinator.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${team.faculty_coordinator.name} GitHub`}
                    className="w-8 h-8 border border-gray-700 bg-gray-950 flex items-center justify-center text-gray-500 hover:text-violet-400 hover:border-violet-500 transition-colors"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                  </a>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ========================================================= */}
      {/* CATEGORY FILTER */}
      {/* ========================================================= */}

      <div className="w-full pt-5">

        <div className="flex flex-wrap gap-3">

          {categories.map((category) => {

            const isSelected =
              selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={
                  isSelected
                    ? "px-4 py-2 text-[10px] font-bold uppercase tracking-widest border rounded-none bg-violet-600 text-white border-violet-500"
                    : "px-4 py-2 text-[10px] font-bold uppercase tracking-widest border rounded-none bg-gray-900 text-gray-500 border-gray-800 hover:text-gray-200 hover:border-violet-500 hover:bg-gray-800"
                }
              >
                {category}
              </button>
            );

          })}

        </div>

      </div>


      {/* ========================================================= */}
      {/* MEMBER COUNT */}
      {/* ========================================================= */}

      <div className="flex items-center justify-between border-b border-gray-800 pb-3">

        <p className="text-[10px] text-gray-600 uppercase tracking-widest">
          Team Members
        </p>

        <p className="text-[10px] text-gray-600 uppercase tracking-widest">
          {filteredMembers.length} Members
        </p>

      </div>


      {/* ========================================================= */}
      {/* TEAM MEMBERS */}
      {/* ========================================================= */}

      {filteredMembers.length > 0 ? (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">

          {filteredMembers.map((member) => (

            <div
              key={member.id}
              className="group relative border border-gray-800 bg-gray-900 overflow-hidden transition-colors duration-200 hover:border-violet-500"
            >

              


              {/* Member Photo */}
             <div className="relative w-full h-48 sm:h-52 bg-gray-950 overflow-hidden">
  <Image
    src={member.photo}
    alt={member.name}
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    className="object-contain"
  />
</div>


              {/* Member Information */}
              <div className="p-3">

                <p className="text-[8px] text-violet-400 uppercase tracking-widest mb-1">
                  {member.category}
                </p>

                <h3 className="text-sm font-bold text-gray-100 uppercase tracking-tight truncate">
                  {member.name}
                </h3>

                <p className="text-[9px] text-gray-500 mt-1 uppercase tracking-widest truncate">
                  {member.position}
                </p>


                {/* Social Links */}
                {(member.linkedin || member.github) && (

                  <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-gray-800">

                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        className="w-7 h-7 border border-gray-800 bg-gray-950 flex items-center justify-center text-gray-600 hover:text-violet-400 hover:border-violet-500 transition-colors"
                      >
                        <FaLinkedin className="w-3 h-3" />
                      </a>
                    )}

                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} GitHub`}
                        className="w-7 h-7 border border-gray-800 bg-gray-950 flex items-center justify-center text-gray-600 hover:text-violet-400 hover:border-violet-500 transition-colors"
                      >
                        <FaGithub className="w-3 h-3" />
                      </a>
                    )}

                  </div>

                )}

              </div>

            </div>

          ))}

        </div>

      ) : (

        <div className="w-full border border-gray-800 bg-gray-900 py-12 flex items-center justify-center">

          <p className="text-xs text-gray-600 uppercase tracking-widest">
            No members found in this category.
          </p>

        </div>

      )}

    </div>
  );
};
