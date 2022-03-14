<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let text: string = "unset";
    export let action: () => void = () => {};

    const dispatch = createEventDispatcher();

    const onclick = () => {
        action();

        dispatch("click", text);
    };
</script>

<button on:click={onclick}>{text}</button>

<style lang="scss">
    button {
        display: block;

        width: 20vw;
        height: 3.2vw;

        margin: 0.8vw;

        color: white;
        font-family: Trispace;
        font-size: 2vw;

        background: black;
        border-radius: 1.6vw;
        border: none;
        box-shadow: 0 0 1vh #ffffff;

        transition-duration: 50ms;

        &:hover {
            box-shadow: 0 0 3vh #8657eb;
            transform: translateY(-1px);
            cursor: pointer;
        }
    }
</style>
