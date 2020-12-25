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
  <label>Your name:&nbsp;&nbsp;&nbsp;<input type="text" name="name" /></label>
  </p>
  <p>
  <label>Your email:&nbsp;&nbsp;&nbsp;<input type="email" name="email" /></label>
  </p>
  <p>
  <label>Subject:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="email" name="email" /></label>
  </p>
  <p><br/>
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
  p { line-height: 15px; text-shadow: 1.5px 2px 3px rgba(0,0,0,0.9);}
  textarea {
    border-radius: 4px;
    border: 1px solid #91ffaa;
    color: #91ffaa;
    max-width: 60%;
    width: 60%;
    height: 100px;
    background: rgba(0,0,0,0.3);
    box-shadow: 0px 2px 1px #000;
  }
  label { margin: 0; padding: 0; }
  input, textarea {
    margin-top: 0px;
    margin-bottom: 0px;
    border-radius: 3px;
    border: 1px solid transparent;
    border-bottom: 1px inset rgba(150,255,170,0.8);
    border-top: 1px solid rgba(0,0,0,0.4);
    padding: 15px 20px 15px 20px;
    color: #91ffaa;
    /* background: rgba(0,0,0,0.3); */
    background: #201e36;
    background: #222039;
    box-shadow: 0px 2px 1px rgba(0,0,0,0.3);
  }
  input:active, textarea:active {
    border: 1px solid #fff;
  }
</style>
