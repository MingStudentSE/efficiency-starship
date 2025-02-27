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
					label: '知识',
					autogenerate: { directory: 'knowledge' },
				},
				{
					label: '工具',
					autogenerate: { directory: 'tool' },
				},
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
			],
			plugins: [starlightThemeObsidian()]
		}),
	],
});
