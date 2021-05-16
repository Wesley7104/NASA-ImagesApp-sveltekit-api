const node = require("@sveltejs/adapter-vercel");
const pkg = require("./package.json");

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
