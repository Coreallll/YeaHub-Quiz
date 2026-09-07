export interface Skill {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  specializations: string[];
}

export interface SkillsResponse {
  data: Skill[];
  limit: number;
}
