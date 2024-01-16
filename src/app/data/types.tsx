export type SkillProps = {
  icon: string;
  direction?: string;
  proficiency?: string;
};

export type CardProps = {
  company: string;
  jobTitle: string;
  techUsed: SkillProps[];
  dates: string[];
  points: string[];
};

export type ProjectProps = {
  imgUrl: string;
  title: string;
  description: string;
};