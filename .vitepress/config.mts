import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "دين",
	description:
		"An Islamic Discord Bot on a mission to make the Quran and Hadith accessible for everyone.",
	cleanUrls: true,
	lastUpdated: true,
	metaChunk: true,
	markdown: {
		theme: {
			light: "vitesse-light",
			dark: "vitesse-dark",
		},
	},
	themeConfig: {
		search: {
			provider: "local",
		},
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Legal", link: "/docs/legal/privacy-policy" },
		],

		sidebar: [
			{
				text: "Commands",
				items: [
					{ text: "Message Commands", link: "/docs/cmds/msg" },
					{ text: "Slash Commands", link: "/docs/cmds/slash" },
				],
			},
			{
				text: "Legal",
				items: [
					{ text: "Privacy Policy", link: "/docs/legal/privacy-policy" },
					{ text: "Terms of Service", link: "/docs/legal/tos" },
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/korauo/deen" },
			{ icon: "discord", link: "https://discord.gg/tqwquUfqGq" },
			{
				icon: {
					svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Ko-fi</title><path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/></svg>',
				},
				link: "https://ko-fi.com/korauo",
			},
			{
				icon: {
					svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Top.gg</title><path d="M0 4.3785h7.6215V12H2.329A2.3212 2.3212 0 0 1 .0077 9.6788Zm24 0H8.757v15.243h3.1144a4.5071 4.5071 0 0 0 4.507-4.5071V12h3.1145A4.5073 4.5073 0 0 0 24 7.4929z"/></svg>',
				},
				link: "https://top.gg/bot/1222254816550588426/vote",
			},
		],
	},
});
