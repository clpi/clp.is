<script>
  import Btn from '$components/Btn.svelte';
  import Content from '$components/Content.svelte';
    export let selected = "contact";
</script>

<svelte:head>
  <title>Contact • clp.is</title>
</svelte:head>

<Content>
<h3>contact</h3>
<p>You can also reach me at clp at (this website's domain name)!</p>
<br/>
<form name="contact" data-netlify="true">
  <p>
  <label>Your Name:<br/><br/><input type="text" name="name" /></label>
  </p>
  <p>
  <label>Your Email:<br/><br/> <input type="email" name="email" /></label>
  </p>
  <p>
  <label>Message:<br/><br/> <textarea name="message"></textarea></label>
  </p>
  <p>
    <Btn type="submit" btn="filled">Send</Btn>
  </p>
</form>
</Content>

<style>
  label {
    font-size: 0.8em;
    padding-top: 0px;
    margin-top: 0px;
  }
  textarea {
    border-radius: 4px;
    border: 1px solid #91ffaa;
    padding: 5px 10px 5px 10px;
    color: #91ffaa;
    max-width: 60%;
    width: 60%;
    height: 100px;
    background: rgba(0,0,0,0.3);
    box-shadow: 0px 2px 1px #000;
  }
  input, textarea {
    margin-top: 0px;
    border-radius: 5px;
    border: 1px solid transparent;
    border-bottom: 1px solid #91ffaa;
    padding: 10px 20px 10px 20px;
    color: #91ffaa;
    background: rgba(0,0,0,0.3);
    box-shadow: 0px 2px 4px rgba(0,0,0,0.4);
  }
  input:active, textarea:active {
    border: 1px solid #fff;
  }
</style>
