import { Program, Experience, Pillar, FAQItem } from '../types';

export const SCHOOL_PHONE = '9717867308';
export const FORMATTED_PHONE = '+91 97178 67308';
export const ACADEMIC_YEAR = '2026–27';
export const SCHOOL_ADDRESS = 'F-180, Shaheen Bagh, Near Shaheen Masjid, Jamia Nagar, Okhla, New Delhi–110025';
export const DIRECTOR_NAME = 'Mr. Jiyad Mateen';
export const HEADMISTRESS_NAME = 'Mrs. Seeneena Mateen';

export const PROGRAMS: Program[] = [
  {
    id: 'playgroup',
    name: 'Playgroup',
    shortName: 'Playgroup',
    tagline: 'A gentle and joyful introduction to school life',
    ageRange: '1.5 to 2.5 Years',
    description:
      'A gentle and joyful introduction to school life where children begin developing independence, communication and social skills through play.',
    curriculumHighlights: [
      'Sensory bins & exploratory tactile play',
      'Gentle settling routines & comfort transitions',
      'Nursery rhymes, rhythm circles & gesture songs',
      'Free gross motor play & indoor soft climbing',
      'Basic verbal expression & teacher bonding'
    ],
    keyOutcomes: [
      'Comfortable separation from parents',
      'Eagerness to explore new materials',
      'Social awareness in shared spaces'
    ],
    timings: '9:00 AM – 11:30 AM (Monday to Friday)',
    batchSize: '1:6 Teacher to Child Ratio'
  },
  {
    id: 'nursery',
    name: 'Nursery',
    shortName: 'Nursery',
    tagline: 'Building curiosity, language, creativity and confidence',
    ageRange: '2.5 to 3.5 Years',
    description:
      'Building curiosity, language, creativity and confidence through hands-on activities and meaningful classroom experiences.',
    curriculumHighlights: [
      'Phonics readiness & rich vocabulary storytimes',
      'Pre-writing tactile exercises (sand, clay, finger paint)',
      'Number sense through counting wooden pebbles & blocks',
      'Daily creative arts & open-ended crafting',
      'Outdoor nature walks and sensory gardening'
    ],
    keyOutcomes: [
      'Clear sentence formation and storytelling',
      'Fine motor pincer grasp development',
      'Joyful participation in group discussions'
    ],
    timings: '8:45 AM – 12:15 PM (Monday to Friday)',
    batchSize: '1:8 Teacher to Child Ratio'
  },
  {
    id: 'junior-kg',
    name: 'Junior KG',
    shortName: 'Junior KG',
    tagline: 'Engaging concepts and self-expression',
    ageRange: '3.5 to 4.5 Years',
    description:
      'Encouraging children to explore concepts, express themselves and develop essential skills through engaging and interactive learning.',
    curriculumHighlights: [
      'Interactive phonics, letter sounds & sight words',
      'Mathematical reasoning, patterns & spatial orientation',
      'Mini science experiments & guided questions',
      'Role play, puppetry & show-and-tell stage days',
      'Collaborative building and team discovery projects'
    ],
    keyOutcomes: [
      'Independent reading curiosity',
      'Confident peer conversation & conflict resolution',
      'Analytical curiosity about how things work'
    ],
    timings: '8:30 AM – 12:45 PM (Monday to Friday)',
    batchSize: '1:10 Teacher to Child Ratio'
  },
  {
    id: 'senior-kg',
    name: 'Senior KG',
    shortName: 'Senior KG',
    tagline: 'Preparing confident minds for tomorrow',
    ageRange: '4.5 to 5.5+ Years',
    description:
      'Preparing children for their next academic journey while nurturing confidence, independence, communication and a love for learning.',
    curriculumHighlights: [
      'Early reading fluency, creative journaling & dictation',
      'Addition concepts, mental math & measurement',
      'Environmental inquiry & life science explorations',
      'Public speaking, stage presentations & elocution',
      'Critical problem-solving & sustained focus habits'
    ],
    keyOutcomes: [
      'Seamless transition into primary grade 1',
      'High self-confidence and emotional resilience',
      'Intrinsic lifelong curiosity for discovery'
    ],
    timings: '8:30 AM – 1:15 PM (Monday to Friday)',
    batchSize: '1:10 Teacher to Child Ratio'
  }
];

export const PILLARS: Pillar[] = [
  {
    id: 'play',
    number: '01',
    title: 'Learning Through Play',
    description:
      'Because children learn best when they are actively involved, curious and having fun. We create structured and open-ended play experiences that spark genuine wonder.',
    highlight: 'Children learn best through active involvement and fun'
  },
  {
    id: 'nurture',
    number: '02',
    title: 'Nurturing Environment',
    description:
      'A warm and caring atmosphere where every child is given individual attention, gentle encouragement and everyday opportunities to blossom naturally.',
    highlight: 'Warm, safe atmosphere with individualized guidance'
  },
  {
    id: 'creativity',
    number: '03',
    title: 'Creativity & Exploration',
    description:
      'Art, craft, experiments, stories, activities and experiences that encourage children to imagine, create and discover their unique creative voices.',
    highlight: 'Hands-on art, storytelling and tactile discovery'
  },
  {
    id: 'confidence',
    number: '04',
    title: 'Building Confidence',
    description:
      'We encourage children to speak, participate, perform and express their thoughts — helping even shy children find their voice in a kind, unhurried space.',
    highlight: 'Helping even the shyest children speak and stand proud'
  },
  {
    id: 'social',
    number: '05',
    title: 'Social & Emotional Growth',
    description:
      'Children learn to share, communicate, cooperate, make genuine friends and understand their own feelings with emotional mindfulness.',
    highlight: 'Sharing, empathy, and constructive communication'
  },
  {
    id: 'beyond-books',
    number: '06',
    title: 'Learning Beyond Books',
    description:
      'Our classrooms go far beyond worksheets and textbooks through hands-on activities, real-world observations and experiential learning.',
    highlight: 'Experiential learning rather than dry memorization'
  },
  {
    id: 'every-child',
    number: '07',
    title: 'Every Child Matters',
    description:
      'We understand that every child is different. We respect individual interests, abilities, personalities and learning pace without unfair comparisons.',
    highlight: 'Honoring individual personalities and unique learning rhythms'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'plantation',
    title: 'Plantation & Nature Activities',
    tag: 'Nature & Soil',
    iconName: 'Sprout',
    shortDescription: 'Tending to small seedbeds, feeling wet soil, observing earthworms and watching tender green shoots sprout.',
    detailedInsight: 'Children learn responsibility, environmental empathy, and patience as they care for seedlings and discover the cycle of plant life in our garden.',
    skillsDeveloped: ['Environmental Stewardship', 'Patience & Observation', 'Sensory Grounding']
  },
  {
    id: 'science',
    title: 'Fun Science Experiments',
    tag: 'Curiosity',
    iconName: 'Sparkles',
    shortDescription: 'Safe, magical discoveries with water density, bubble physics, baking soda reactions, and light prisms.',
    detailedInsight: 'Fostering hypothesis building and joyful wonder. Children ask "why" and "what if", discovering physical laws through delightful trial and error.',
    skillsDeveloped: ['Causal Reasoning', 'Inquiry Mindset', 'Analytical Wonder']
  },
  {
    id: 'art',
    title: 'Art & Creative Expression',
    tag: 'Imagination',
    iconName: 'Palette',
    shortDescription: 'Messy easel painting, clay sculpting, leaf printing, and textured collages with zero restrictive templates.',
    detailedInsight: 'Process-oriented art where the journey of creation matters more than a pre-determined outcome. Every child produces original expressions.',
    skillsDeveloped: ['Fine Motor Coordination', 'Original Expression', 'Aesthetic Appreciation']
  },
  {
    id: 'stories',
    title: 'Stories & Language Activities',
    tag: 'Language',
    iconName: 'BookOpen',
    shortDescription: 'Interactive read-alouds, puppet theatre, imaginative storytelling circles and phonemic awareness games.',
    detailedInsight: 'Building rich mental imagery, extensive vocabulary, and the lifelong habit of cherishing books and expressive spoken language.',
    skillsDeveloped: ['Vocabulary Expansion', 'Listening Comprehension', 'Empathic Perspective']
  },
  {
    id: 'music',
    title: 'Music, Rhymes & Movement',
    tag: 'Rhythm',
    iconName: 'Music',
    shortDescription: 'Rhythmic clap games, percussion shakers, classical tunes, cultural folk beats and whole-body joyful movement.',
    detailedInsight: 'Music wires neural pathways for mathematical patterns and memory while releasing positive energy in joyful physical coordination.',
    skillsDeveloped: ['Rhythmic Processing', 'Auditory Memory', 'Bilateral Body Control']
  },
  {
    id: 'puzzles',
    title: 'Puzzles & Problem-Solving',
    tag: 'Logic',
    iconName: 'Puzzle',
    shortDescription: 'Tangrams, wooden maze tracks, sorting trays, pattern sequences, and progressive jigsaw puzzles.',
    detailedInsight: 'Encouraging quiet concentration, geometric reasoning, and the sweet satisfaction of trying multiple solutions until one clicks.',
    skillsDeveloped: ['Spatial Reasoning', 'Frustration Tolerance', 'Pattern Recognition']
  },
  {
    id: 'roleplay',
    title: 'Role Play & Stage Activities',
    tag: 'Confidence',
    iconName: 'Drama',
    shortDescription: 'Pretend kitchen, doctor clinic, mini marketplace, gentle podium elocution and festival playlets.',
    detailedInsight: 'Stepping into diverse roles gives children deep empathy, social situational awareness, and poise when standing before an appreciative audience.',
    skillsDeveloped: ['Public Confidence', 'Empathy & Role Theory', 'Verbal Fluency']
  },
  {
    id: 'social',
    title: 'Social & Group Activities',
    tag: 'Community',
    iconName: 'Users',
    shortDescription: 'Circle time discussions, snack sharing etiquette, group parachute games, and buddy project tasks.',
    detailedInsight: 'Learning to listen when others speak, taking turns patiently, offering a hand to a fallen friend, and discovering the joy of companionship.',
    skillsDeveloped: ['Conflict Resolution', 'Cooperative Play', 'Emotional Regulation']
  },
  {
    id: 'movement',
    title: 'Movement & Motor-Skill Activities',
    tag: 'Physical Health',
    iconName: 'Activity',
    shortDescription: 'Balance beams, obstacle stepping stones, beanbag tosses, animal crawls and hand-eye coordination courses.',
    detailedInsight: 'Strengthening vestibular balance, core muscles, and proprioception — the essential physiological bedrock for sitting comfortably and writing.',
    skillsDeveloped: ['Gross Motor Balance', 'Proprioception', 'Physical Resilience']
  },
  {
    id: 'celebrations',
    title: 'Celebrations, Events & Special Days',
    tag: 'Joy & Culture',
    iconName: 'PartyPopper',
    shortDescription: 'Grandparents Day, Harvest festivals, Color Days, Book Week, Nature Walk picnics, and Annual Day.',
    detailedInsight: 'Creating heartwarming childhood memories that children recount with sparkling eyes, celebrating the rich cultural tapestry of our community.',
    skillsDeveloped: ['Cultural Inclusivity', 'Community Spirit', 'Cherished Memories']
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'admissions',
    question: 'How does the admission process work for the 2026–27 session?',
    answer:
      'Our admission process is simple, warm, and parent-friendly. You begin by filling out an online enquiry or calling us at 9717867308. We then invite you and your child for an unhurried, informal campus visit where you can experience our classrooms, meet teachers, and discuss your child’s needs. There are no stressful interviews or testing of young children.'
  },
  {
    category: 'care',
    question: 'How do you help young children settle in during their first weeks?',
    answer:
      'We follow a gentle, phased settling-in schedule. In the initial days, school hours are shorter and parents or familiar guardians are welcome to stay nearby until the child feels completely safe, secure, and bonded with their class educator.'
  },
  {
    category: 'academics',
    question: 'What is the teacher-to-student ratio at The Almond School?',
    answer:
      'We maintain an intimate teacher-to-child ratio ranging from 1:6 in Playgroup to 1:8 in Nursery and 1:10 in Kindergarten. This ensures every single child receives mindful observation, personal attention, and unconditional encouragement.'
  },
  {
    category: 'care',
    question: 'How are safety, hygiene, and cleanliness maintained?',
    answer:
      'Safety and hygiene are non-negotiable foundations. Our classrooms feature child-safe rounded furniture, non-toxic eco-friendly materials, child-sized sanitized washrooms, round-the-clock secure entry, and dedicated attendant staff trained in first aid and gentle child care.'
  },
  {
    category: 'academics',
    question: 'Do you give homework or tests to young children?',
    answer:
      'No. At The Almond School, we believe home time is for family bonding, free unstructured play, and restful sleep. We assess development through qualitative daily observations and milestone portfolios rather than stressful competitive marks or worksheets.'
  },
  {
    category: 'general',
    question: 'Can parents interact with teachers regularly?',
    answer:
      'Yes, wholeheartedly. We believe in an open-door partnership. Teachers provide frequent observational updates, and parents are invited for dedicated one-on-one developmental dialogues every term, in addition to everyday informal check-ins.'
  }
];
