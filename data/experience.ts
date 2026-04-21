export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Badan Pusat Statistik (BPS)',
    role: 'Internship - Programmer',
    period: '2024',
    description: 'Membangun program untuk pengolahan dan visualisasi data statistik daerah.',
    current: false,
  },
  {
    id: '2',
    company: 'Universitas',
    role: 'Mahasiswa Teknik Informatika',
    period: '2022 - Sekarang',
    description: 'Mahasiswa aktif mengerjakan berbagai proyek tugas kampus menggunakan Python, Laravel, Flutter, dan lainnya.',
  },
];