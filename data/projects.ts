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
    title: 'SIAP Inventaris Mobile',
    description: 'Aplikasi mobile inventaris dengan Flutter untuk akses data parish di mobile.',
    tags: ['Flutter', 'Dart', 'Laravel API'],
    githubUrl: 'https://github.com/KimYo2/siap-inventaris-mobile',
  },
  {
    id: '3',
    title: 'Play Math',
    description: 'Aplikasi edukasi matematika interaktif untuk anak-anak.',
    tags: ['Laravel', 'Blade', 'JavaScript'],
    githubUrl: 'https://github.com/KimYo2/Play-Math',
  },
  {
    id: '4',
    title: 'GIS Bawu',
    description: 'Sistem informasi geografis untuk pemetaan wilayah.',
    tags: ['Laravel', 'GIS', 'MySQL'],
    githubUrl: 'https://github.com/KimYo2/Gis-Bawu',
  },
  {
    id: '5',
    title: 'Toko Online',
    description: 'E-commerce platform sederhana dengan Laravel.',
    tags: ['Laravel', 'Blade', 'MySQL'],
    githubUrl: 'https://github.com/KimYo2/Toko-online',
  },
  {
    id: '6',
    title: 'YouTube Downloader',
    description: 'Desktop app untuk download video YouTube menggunakan Python.',
    tags: ['Python', 'yt-dlp'],
    githubUrl: 'https://github.com/KimYo2/Yt-Downloader',
  },
];