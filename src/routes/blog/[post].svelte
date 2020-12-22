<script context="module">
  export async function preload( { params } ) {
    /* let [slug, year, month, day] = params.slug; */
    /* return { slug, year, month, day } */


    /* const res = await this.fetch(`blog/${slug}.json`) */
    /*   .then(res => res.json()) */
    /*   .catch(err => console.error(err)); */
    /* return res; */
  }
</script>

<script>
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<a href="/">Back to blog</a>
<h1>{post.title}</h1>


<div class='content'>
  {@html post.html}
</div>
