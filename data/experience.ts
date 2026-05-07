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
		id: "1",
		company: "Badan Pusat Statistik (BPS)",
		role: "Internship - Programmer",
		period: "2026",
		description:
			"Membangun dan mengembangkan sistem informasi inventaris parish (SIAP Inventaris) untuk pengelolaan data inventaris barang di BPS.",
		current: false,
	},
	{
		id: "2",
		company: "Universitas",
		role: "Mahasiswa Teknik Informatika",
		period: "2023 - Sekarang",
		description:
			"Mahasiswa aktif mengerjakan berbagai proyek tugas kampus menggunakan Python, Laravel, Flutter, dan teknologi lainnya.",
	},
];
