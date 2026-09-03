export interface User {
  id: string;
  username: string;
}

export interface Specialization {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
}

export interface SpecializationsResponse {
  data: Specialization[];
}
