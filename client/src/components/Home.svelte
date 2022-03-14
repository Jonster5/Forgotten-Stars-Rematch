<script lang="ts">
    import { Assets } from 'src/lib/assetTypes';

    import { Page } from 'src/lib/uiTypes';
    import { onMount } from 'svelte';
    import { Writable } from 'svelte/store';
    import Button from './Button.svelte';

    export let page: Writable<Page>;
    export let assets: Assets;

    onMount(() => {
        console.log(assets);
    });

    const onPlay = () => {
        $page = 'play';
    };
</script>

<main>
    <h1>FORGOTTEN STARS</h1>
    <h4>CIVIL WAR</h4>
    <Button text="Play Online" action={onPlay} />
    <Button text="Tutorial" />
    <Button text="Settings" />
</main>

<style lang="scss">
    main {
        display: flex;
        width: 100%;
        height: 100%;

        flex-direction: column;
        align-items: center;

        h1 {
            font-family: Righteous;
            font-size: 8vw;
            margin: 4vw 0 0 0;
            color: #ffdc2e;
            text-shadow: 0 0 3vh #ffdc2e;
            letter-spacing: 5px;
        }

        h4 {
            font-size: 2vw;
            color: #8657eb;
            text-shadow: 0 0 1vh #8657eb;
            margin: 0 0 5vw 0;
            font-family: Trispace;
        }

        background: radial-gradient(#00000080, #000000cc),
            url('background.png') no-repeat center center fixed;
        background-size: cover;
    }
</style>
