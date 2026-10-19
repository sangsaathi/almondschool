import img1 from '../components/gallery/img1.webp';
import img2 from '../components/gallery/img2.webp';
import img3 from '../components/gallery/img3.webp';
import img4 from '../components/gallery/img4.webp';
import img5 from '../components/gallery/img5.webp';
import img6 from '../components/gallery/img6.webp';
import img7 from '../components/gallery/img7.webp';
import img8 from '../components/gallery/img8.webp';
import img9 from '../components/gallery/img9.webp';
import img10 from '../components/gallery/img10.webp';
import img11 from '../components/gallery/img11.jpeg';

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: 'Classroom' | 'Creative Arts' | 'Nature & Play' | 'Celebrations' | 'Learning Discovery';
  description: string;
  tag: string;
}

export const INITIAL_GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'img-1',
    src: img1,
    title: 'Sensory Exploration & Natural Discovery',
    category: 'Nature & Play',
    description: 'Children discovering textures, natural materials and learning through joyful tactile exploration.',
    tag: 'Sensory Play'
  },
  {
    id: 'img-2',
    src: img2,
    title: 'Creative Atelier & Color Wonder',
    category: 'Creative Arts',
    description: 'Open-ended watercolor painting, drawing and self-expression in our bright, sunlit art space.',
    tag: 'Creativity'
  },
  {
    id: 'img-3',
    src: img3,
    title: 'Hands-on Learning & Fine Motor Work',
    category: 'Classroom',
    description: 'Montessori-inspired wooden manipulation tools that build focus, patience, and dexterity.',
    tag: 'Fine Motor'
  },
  {
    id: 'img-4',
    src: img4,
    title: 'Early Literacy & Story Circle',
    category: 'Learning Discovery',
    description: 'Captivating story sessions fostering deep vocabulary, phonemic awareness, and imagination.',
    tag: 'Storytelling'
  },
  {
    id: 'img-5',
    src: img5,
    title: 'Plantation & Nature Care',
    category: 'Nature & Play',
    description: 'Nurturing little green seedlings in our organic sensory garden with gentle care.',
    tag: 'Nature Walk'
  },
  {
    id: 'img-6',
    src: img6,
    title: 'Joyful Friendship & Social Bonding',
    category: 'Celebrations',
    description: 'Learning to share, cooperate, express feelings and build cherished first friendships.',
    tag: 'Social Growth'
  },
  {
    id: 'img-7',
    src: img7,
    title: 'Puzzles, Problem-Solving & Logic',
    category: 'Classroom',
    description: 'Developing critical thinking and pattern recognition through fun geometric games.',
    tag: 'Problem Solving'
  },
  {
    id: 'img-8',
    src: img8,
    title: 'Role Play & Expressive Stage',
    category: 'Creative Arts',
    description: 'Nurturing confidence through dress-up, theatre, character storytelling, and puppet acts.',
    tag: 'Stage Confidence'
  },
  {
    id: 'img-9',
    src: img9,
    title: 'Movement, Coordination & Motor Skills',
    category: 'Nature & Play',
    description: 'Balancing, jumping, rhythm coordination and physical vitality in safe child-friendly spaces.',
    tag: 'Motor Skills'
  },
  {
    id: 'img-10',
    src: img10,
    title: 'Curiosity & Fun Science Experiments',
    category: 'Learning Discovery',
    description: 'Wonder-filled experiments exploring water density, shadows, sounds, and floating wonders.',
    tag: 'Science Lab'
  },
  {
    id: 'img-11',
    src: img11,
    title: 'Festive Celebrations & Special Moments',
    category: 'Celebrations',
    description: 'Cherishing cultural days, birthday milestones, and vibrant school community celebrations.',
    tag: 'Celebrations'
  }
];
