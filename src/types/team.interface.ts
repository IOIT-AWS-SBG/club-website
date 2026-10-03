export interface TeamMember {
  id: string;
  name: string;
  position: string;
  category?: string;
  photo?: string;
  github?: string;
  linkedin?: string;
}

export interface Principal {
  name: string;
  position: string;
  photo?: string;
  linkedin?: string;
}

export interface FacultyCoordinator {
  name: string;
  position: string;
  photo: string;
  linkedin?: string;
}

export interface TeamSection {
  name: string;
  head: TeamMember;
  members: TeamMember[];
}

export interface TeamData {
  principal: Principal;
  faculty_coordinator: FacultyCoordinator;
  advisory_team: TeamMember[];
  core_committee: TeamMember[];
  teams: TeamSection[];
}