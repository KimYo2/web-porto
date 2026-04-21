export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'SIAP Inventaris',
    description: 'Sistem informasi administrasi parish untuk manage inventaris barang menggunakan Laravel dan Flutter.',
    tags: ['Laravel', 'Flutter', 'MySQL', 'REST API'],
    githubUrl: 'https://github.com/KimYo2/siap-inventaris',
  },
  {
    id: '2',
    title: 'Web Portfolio',
    description: 'Personal portfolio website modern dengan Next.js, Tailwind CSS, Framer Motion, dan MongoDB.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/KimYo2/web-porto',
  },
  {
    id: '3',
    title: 'YouTube Downloader',
    description: 'Desktop app untuk download video YouTube menggunakan Python dengan fitur playlist.',
    tags: ['Python', 'yt-dlp', 'GUI'],
    githubUrl: 'https://github.com/KimYo2/Yt-Downloader',
  },
  {
    id: '4',
    title: 'New Sentiment Scope',
    description: 'Aplikasi analisis sentiment untuk menganalisis opini pengguna terhadap produk atau layanan.',
    tags: ['HTML', 'JavaScript', 'Python', 'Sentiment Analysis'],
    githubUrl: 'https://github.com/KimYo2/New-Sentiment-Scope',
  },
  {
    id: '5',
    title: 'Play Math',
    description: 'Aplikasi edukasi matematika interaktif untuk anak-anak dengan fitur games.',
    tags: ['Laravel', 'Blade', 'JavaScript', 'Education'],
    githubUrl: 'https://github.com/KimYo2/Play-Math',
  },
  {
    id: '6',
    title: 'GIS Bawu',
    description: 'Sistem informasi geografis untuk pemetaan wilayah dengan visualisasi data spasial.',
    tags: ['Laravel', 'Blade', 'GIS', 'MySQL'],
    githubUrl: 'https://github.com/KimYo2/Gis-Bawu',
  },
];