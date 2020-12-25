<script>
  import Btn from '$components/Btn.svelte';
  import Content from '$components/Content.svelte';
  /* import Menubar from '$components/Menubar.svelte'; */
    let selected = "about";
</script>

<svelte:head>
  <title>About • clp.is</title>
</svelte:head>

<Content>
<h3>workspace setup</h3>
<p>Just a little page detailing how my workspace is setup, for my own reference and for anyone else who is curious.</p>

<div class="text">
<h4>hardware</h4>
<ul>
  <li>
    <h4>Main laptop</h4>
    <p>I use the <a href="#">Lenovo Thinkpad E595</a> as my daily driver most days, when I'm not using a desktop for work or an old HP spectre X360 for Windows-related work. I have a bunch of old Thinkpads as well (X220T, X230T, T420, T460s) which I use for writing or for server-ish operations, alongside a few raspberry pis.</p>
  </li>
</ul>

<h4>software</h4>
<ul>
  <li>
    <h4>Operating System</h4>
    <p>Currently using <a href="getfedora.org">Fedora linux</a> as my primary operating system -- although on my older Thinkpads I have several differnt flavors (Arch, Pop, etc.) installed.</p>
  </li>
  <li>
    <h4>Desktop Environment</h4>
    <p>Currently using <a href="getfedora.org">Sway</a> as my daily driver, but I have no issue with the GNOME desktop environment and in fact like it quite a bit. I have customized Sway quite a bit in my time with it -- you can see my dotfiles <a href="https://github.com/clpi/dotfiles.git">here</a>.</p>
  </li>
  <li>
    <h4>Text editor</h4>
    <p><a href="#">Neovim</a> is my text editor of choice, for just about everything, including journalling and task organization. I don't have anything particularly praiseworthy to say about it over other minimalist text editors with optional vim keybindings, or maximalist editors (I'm still playing around with DOOM emacs) or IDEs that I've tried, I've just become so accustomed to it and tweaked it to just my likings that I don't see any other editor being quite as comfortable for me. <a href="#">Kakoune</a> comes really close, though.</p>
  </li>
</ul>
</div>

<a href="/contact"><Btn btn="filled">Contact me!</Btn></a>
</Content>
<style>
  div { margin-left: 80px; margin-right: 80px; }
  ul { list-style: none; }
  li { list-style: none; float: left; text-align: justify; }
  h4 { font-weight: 300; font-size: 1.8rem; }
</style>

