export type Job = {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
  salary: string;
};
