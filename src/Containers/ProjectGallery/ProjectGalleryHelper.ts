import { IMedia } from "../../Components/MediaCarousel/MediaCarousel";

export interface ILink {
  displayText: string;
  url: string;
}

export interface IProjectData {
  id: number;
  mediaList: IMedia[];
  longDescription: string;
  links: ILink[];
  title: string;
  technologies: string[];
  thumbnail: string;
  shortDescription: string;
}

export const ProjectData: IProjectData[] = [
  
];
