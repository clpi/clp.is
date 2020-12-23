// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	extends: '@sveltejs/snowpack-config',
	mount: {
		'src/components': '/_components',
    'src/styles': '/_styles',
    // 'src/posts': '/_posts'
	},
	alias: {
		$components: './src/components',
		$styles: './src/styles',
    // $posts: './src/routes/blog/posts'
	},
  // plugins: [
    // ["@intrnl/snowpack-plugin-rollup", {

    // }],
    // ["snowpack-plugin-mdsvex", {
    //   extensions: ['.md', '.svx'],
    //   // include: ['./src/routes/blog/posts/'],
    //   // css: true
    // }],
  // ]
};
