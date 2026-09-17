import { Speaker } from "./speaker.interface";

export interface Event {
  id: string;
  status: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: {
    room: string;
    building: string;
  };
  speakers: Speaker[];
  execution_plan: string[];
}