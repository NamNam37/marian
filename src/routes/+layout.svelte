<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	export const prerender = true;
	export const ssr = true;
</script>

<!-- App Shell -->
<AppShell>
	<!-- Page Route Content -->
	<main>
		<div class="content">
			<slot />
		</div>
	</main>
</AppShell>

<style>
	main {
		display: flex;
		justify-content: center;
		background-color: rgb(171, 35, 40);
		height: 100%;
	}
	.content {
		width: 390px;
	}
	* {
		font-family: 'Roboto', sans-serif;
		color: #f9f3d8;
	}
</style>
