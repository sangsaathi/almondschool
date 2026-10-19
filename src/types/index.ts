export interface Program {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  ageRange: string;
  description: string;
  curriculumHighlights: string[];
  keyOutcomes: string[];
  timings: string;
  batchSize: string;
}

export interface Experience {
  id: string;
  title: string;
  tag: string;
  iconName: string;
  shortDescription: string;
  detailedInsight: string;
  skillsDeveloped: string[];
}

export interface Pillar {
  id: string;
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'admissions' | 'academics' | 'care' | 'general';
}

export interface EnquiryFormData {
  parentName: string;
  phoneNumber: string;
  email: string;
  childName: string;
  childAge: string;
  selectedProgram: string;
  visitDate: string;
  preferredSlot: string;
  message: string;
}
