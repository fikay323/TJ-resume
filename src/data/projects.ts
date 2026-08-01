import DIABETES_IMG from '../assets/d2.png'
import REMOTE_LOCKER_IMG from '../assets/r1.png'
import GOPADDI_IMG from '../assets/gopaddi.png'
import PROLAUNCHER_IMG from '../assets/prolauncher.png'
import NOTETOSELF_IMG from '../assets/notetoself.png'

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
  },
  {
    title: 'Gopaddi',
    description:
      'A smart travel and hospitality app combining bookings with an AI travel assistant and a social marketplace. Users can book flights, hotels, restaurants and experiences, plan trips collaboratively with expense splitting, and connect with a global community of travelers.',
    technologies: ['Android', 'Kotlin', 'Jetpack Compose', 'REST API', 'Firebase'],
    category: 'Mobile',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.voyatek.gopaddiapp',
    image: GOPADDI_IMG,
    featured: true
  },
  {
    title: 'Pro Launcher',
    description:
      'A minimalist, productivity-focused Android launcher that gently interrupts time-wasting app usage, and offers a dedicated widget page, custom app categories, daily wallpapers, and gesture-based shortcuts to help users stay focused.',
    technologies: ['Android', 'Kotlin', 'Jetpack Compose', 'RoomDB'],
    category: 'Mobile',
    liveUrl: 'https://play.google.com/store/apps/details?id=app.prolauncher',
    image: PROLAUNCHER_IMG,
    featured: true
  },
  {
    title: 'Note to Self',
    description:
      'A private, offline-first note-taking app with a chat-style interface for fast capture. Supports voice and location notes, image/file attachments, folders, biometric locking, and encrypted backup and sync.',
    technologies: ['Android', 'Kotlin', 'SQLDelight', 'Biometric Auth'],
    category: 'Mobile',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.makenotetoself',
    image: NOTETOSELF_IMG,
    featured: true
  }
];

export default projects;
