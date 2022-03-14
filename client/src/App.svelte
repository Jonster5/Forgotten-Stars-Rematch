<script lang="ts">
    import { Writable, writable } from 'svelte/store';
    import Home from './components/Home.svelte';
    import Play from './components/Play.svelte';
    import { LoadAssets } from './lib/assets';

    export let url: string;

    const page: Writable<'home' | 'play'> = writable('home');
</script>

{#await LoadAssets(url)}
    Loading Assets
{:then assets}
    {#if $page === 'home'}
        <Home {page} {assets} />
    {:else if $page === 'play'}
        <Play {assets} />
    {/if}
{:catch error}
    {error}
{/await}
