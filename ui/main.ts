import App from './App.svelte';

//import { greet } from '../wasm/pkg/wasm.js';
//TODO install wasm rollup plugin


const app = new App({
	target: document.body,
	//props: {
		//name: 'world'
	//}
});

export default app;
