import { IProject } from "./IProject";

export interface IReport {
  id: number;
  name: string;
  photo: string;
  totalSum: number;
  projects: IProject[];
}
