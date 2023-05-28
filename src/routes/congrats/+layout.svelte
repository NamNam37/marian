<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<!-- Page Route Content -->
	<main>
		<div class="content">
			<header>
				<a href="./"><button>Na Hlavní Stránku</button></a>
			</header>
			<slot />
		</div>
	</main>
</AppShell>

<style>
	header {
		margin: 10px;
	}
	button {
        background-color: #f9f3d8;
        border-radius: 5px;
        padding: 5px;
        color: rgb(171,35,40);
    }
</style>