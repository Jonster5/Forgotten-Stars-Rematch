<script lang="ts">
    import { Assets } from 'src/lib/assetTypes';
    import { Game } from 'src/lib/game';
    import { onMount } from 'svelte';

    export let assets: Assets;

    let target: HTMLElement;
    let game: Game;

    onMount(() => {
        game = new Game(target);
        console.log(assets.ships['SL Fighter']);
        game.spawnPlayer(assets.ships['SL Fighter']);
    });
</script>

<div bind:this={target} />

<style lang="scss">
    div {
        display: block;
        position: absolute;
        width: 100vw;
        height: 100vh;
    }
</style>
