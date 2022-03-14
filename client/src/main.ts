import App from './App.svelte';

const assetURL = 'http://192.168.1.157:3000/assets';

const app = new App({
    target: document.body,
    props: {
        url: assetURL,
    },
});

export default app;
