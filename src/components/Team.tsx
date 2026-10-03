"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { TeamData, TeamMember } from "@/types/team.interface";

export const Team = ({ team }: { team: TeamData }) => {
  return (
    <div className="w-full flex flex-col gap-16">

      {/* PRINCIPAL + FACULTY COORDINATOR */}
      <section className="w-full">
        <SectionHeading title="Leadership" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProfileCard
            name={team.principal.name}
            position={team.principal.position}
            photo={team.principal.photo}
            linkedin={team.principal.linkedin}
            accent="Principal"
          />

          <ProfileCard
            name={team.faculty_coordinator.name}
            position={team.faculty_coordinator.position}
            photo={team.faculty_coordinator.photo}
            linkedin={team.faculty_coordinator.linkedin}
            accent="Faculty Coordinator"
          />
        </div>
      </section>

      {/* ADVISORY TEAM */}
      <section className="w-full">
        <SectionHeading title="Advisory Team" />

        <div className="flex flex-wrap justify-center gap-6">
          {team.advisory_team.map((member) => (
            <div
              key={member.id}
              className="w-full sm:w-[320px]"
            >
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </section>

      {/* CORE COMMITTEE */}
      <section className="w-full">
        <SectionHeading title="Core Committee" />

        <div className="flex flex-wrap justify-center gap-6">
          {team.core_committee.map((member) => (
            <div
              key={member.id}
              className="w-full sm:w-[280px] lg:w-[calc(25%-1.125rem)]"
            >
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </section>

      {/* TEAM-WISE SECTIONS */}
      {team.teams.map((teamSection) => (
        <section
          key={teamSection.name}
          className="w-full"
        >
          <SectionHeading title={teamSection.name} />

          {/* TEAM HEAD */}
          {teamSection.head && (
            <div className="mb-8">

              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-1.5 h-1.5 bg-violet-500" />

                <p className="text-[10px] sm:text-xs text-violet-400 uppercase tracking-widest">
                  Team Head
                </p>

                <div className="w-1.5 h-1.5 bg-violet-500" />
              </div>

              <div className="flex justify-center">
                <div className="w-full sm:w-[280px]">
                  <MemberCard
                    member={teamSection.head}
                    featured
                  />
                </div>
              </div>

            </div>
          )}

          {/* TEAM MEMBERS */}
          {teamSection.members.length > 0 && (
            <div>

              <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-6">
                <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-widest">
                  Team Members
                </p>

                <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-widest">
                  {teamSection.members.length} Members
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                {teamSection.members.map((member) => (
                  <div
                    key={member.id}
                    className="w-full sm:w-[280px] lg:w-[calc(25%-1.125rem)]"
                  >
                    <MemberCard member={member} />
                  </div>
                ))}
              </div>

            </div>
          )}
        </section>
      ))}
    </div>
  );
};


/* ============================================================= */
/* SECTION HEADING */
/* ============================================================= */

const SectionHeading = ({
  title,
}: {
  title: string;
}) => {
  return (
    <div className="flex items-center gap-3 mb-6">

      <div className="w-2 h-2 bg-violet-500 shrink-0" />

      <h2 className="text-base sm:text-lg font-bold text-gray-300 uppercase tracking-widest">
        {title}
      </h2>

      <div className="flex-1 h-px bg-gray-800" />

    </div>
  );
};


/* ============================================================= */
/* LEADERSHIP PROFILE CARD */
/* ============================================================= */

const ProfileCard = ({
  name,
  position,
  photo,
  linkedin,
  accent,
}: {
  name: string;
  position: string;
  photo?: string;
  linkedin?: string;
  accent: string;
}) => {
  return (
    <div className="relative border border-gray-800 bg-gray-900 overflow-hidden hover:border-violet-500 transition-colors duration-200">

      {/* Violet corner */}
      <div className="absolute top-0 right-0 w-10 h-10 bg-violet-600 border-l border-b border-gray-800" />

      <div className="flex flex-col sm:flex-row">

        {/* PHOTO */}
        <div className="relative w-full sm:w-48 h-60 sm:h-52 shrink-0 bg-gray-950 border-b sm:border-b-0 sm:border-r border-gray-800">

          {photo ? (
            <Image
              src={photo}
              alt={name}
              fill
              sizes="(max-width: 640px) 100vw, 192px"
              className="object-contain"
            />
          ) : (
            <PhotoPlaceholder />
          )}

        </div>

        {/* INFORMATION */}
        <div className="flex flex-col justify-center p-6">

          <p className="text-[10px] text-violet-400 uppercase tracking-widest mb-2">
            {accent}
          </p>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-100 uppercase tracking-tight">
            {name}
          </h3>

          <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest">
            {position}
          </p>

         {linkedin ? (
  <a
    href={linkedin}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="w-8 h-8 border border-gray-800 bg-gray-950 flex items-center justify-center text-gray-600 hover:text-violet-400 hover:border-violet-500 transition-colors"
  >
    <FaLinkedin className="w-3.5 h-3.5" />
  </a>
) : (
  <div
    aria-label="LinkedIn not available"
    className="w-8 h-8 border border-gray-800 bg-gray-950 flex items-center justify-center text-gray-700"
  >
    <FaLinkedin className="w-3.5 h-3.5" />
  </div>
)}

        </div>
      </div>
    </div>
  );
};


/* ============================================================= */
/* MEMBER CARD */
/* ============================================================= */

const MemberCard = ({
  member,
  featured = false,
}: {
  member: TeamMember;
  featured?: boolean;
}) => {
  return (
    <div
      className={`group relative border border-gray-800 bg-gray-900 overflow-hidden hover:border-violet-500 transition-colors duration-200 ${
        featured ? "w-full" : ""
      }`}
    >

      {/* PHOTO */}
      <div
        className={`relative w-full ${
          featured ? "h-56 sm:h-64" : "h-52"
        } bg-gray-950 overflow-hidden`}
      >

        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes={
              featured
                ? "(max-width: 640px) 100vw, 384px"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            }
            className="object-contain"
          />
        ) : (
          <PhotoPlaceholder />
        )}

      </div>

      {/* INFORMATION */}
      <div className="p-4">

        <p className="text-[9px] sm:text-[10px] text-violet-400 uppercase tracking-widest mb-1">
          {member.position}
        </p>

        <h3 className="text-base sm:text-lg font-bold text-gray-100 uppercase tracking-tight">
          {member.name}
        </h3>

        {member.category &&
          member.category !== "Core" &&
          member.category !== "Advisory" && (
            <p className="text-[9px] text-gray-600 mt-1 uppercase tracking-widest">
              {member.category}
            </p>
          )}

        <SocialLinks
          linkedin={member.linkedin}
          github={member.github}
        />

      </div>
    </div>
  );
};


/* ============================================================= */
/* PHOTO PLACEHOLDER */
/* ============================================================= */

const PhotoPlaceholder = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">

      <div className="w-16 h-16 border border-gray-800 bg-gray-900 flex items-center justify-center">

        <div className="w-7 h-7 border border-gray-700 rounded-full relative">

          <div className="absolute left-1/2 top-1/2 w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 border border-gray-700 rounded-full" />

        </div>
      </div>

      <p className="mt-3 text-[8px] text-gray-700 uppercase tracking-widest">
        Profile Photo
      </p>

    </div>
  );
};


/* ============================================================= */
/* SOCIAL LINKS */
/* ============================================================= */

const SocialLinks = ({
  linkedin,
  github,
}: {
  linkedin?: string;
  github?: string;
}) => {
  return (
    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-800">

      {/* LINKEDIN */}
      {linkedin ? (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-8 h-8 border border-gray-800 bg-gray-950 flex items-center justify-center text-gray-600 hover:text-violet-400 hover:border-violet-500 transition-colors"
        >
          <FaLinkedin className="w-3.5 h-3.5" />
        </a>
      ) : (
        <div
          aria-label="LinkedIn not available"
          className="w-8 h-8 border border-gray-800 bg-gray-950 flex items-center justify-center text-gray-700"
        >
          <FaLinkedin className="w-3.5 h-3.5" />
        </div>
      )}

      {/* GITHUB */}
      {github ? (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-8 h-8 border border-gray-800 bg-gray-950 flex items-center justify-center text-gray-600 hover:text-violet-400 hover:border-violet-500 transition-colors"
        >
          <FaGithub className="w-3.5 h-3.5" />
        </a>
      ) : (
        <div
          aria-label="GitHub not available"
          className="w-8 h-8 border border-gray-800 bg-gray-950 flex items-center justify-center text-gray-700"
        >
          <FaGithub className="w-3.5 h-3.5" />
        </div>
      )}

    </div>
  );
};