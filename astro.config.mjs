// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Efficiency Starship',
			logo: {
				src: './src/assets/logo.png',
			},
			social: {
				github: 'https://github.com/MingStudentSE/efficiency-starship',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Test',
					autogenerate: { directory: 'test' },
				},
				{
					label: 'Zeena',
					autogenerate: { directory: 'Zeena' },
				},
				{
					label: '工具',
					autogenerate: { directory: '工具' },
				},
			],
			plugins: [starlightThemeObsidian()]
		}),
	],
});
