import DIABETES_IMG from '../assets/d2.png'
import REMOTE_LOCKER_IMG from '../assets/r1.png'

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: 'Mobile' | 'Web' | 'Full-Stack';
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  year?: number;
}

const projects: Project[] = [
  {
    title: 'Diabetes app',
    description:
      'This mobile app provides individuals with features that allow them to read articles on diabetes, get recipes and tutorial videos for these recipes for diabetes meal plan.',
    technologies: ['Android', 'XML', 'Firebase', 'REST API'],
    category: 'Mobile',
    image: DIABETES_IMG,
    featured: true
  },
  {
    title: 'Remote Locker',
    description:
      'Built to address device security concerns by tracking user location, remotely locking, and triggering alarms on registered devices.',
    technologies: ['Android', 'XML', 'Firebase'],
    category: 'Mobile',
    githubUrl: 'https://github.com/J-cart/DeviceAdminSample',
    liveUrl: 'https://github.com/J-cart/DeviceAdminSample/tree/dev_one/app/release',
    image: REMOTE_LOCKER_IMG,
    featured: true
  }
];

export default projects;
