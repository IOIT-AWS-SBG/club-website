export interface TeamMember {
  id: string;
  name: string;
  position: string;
  category: string;
  photo: string;
  github?: string;
  linkedin?: string;
}

export interface FacultyCoordinator {
  name: string;
  position: string;
  photo: string;
  linkedin?: string;
  github?: string;
}

export interface TeamData {
  faculty_coordinator: FacultyCoordinator;
  members: TeamMember[];
}