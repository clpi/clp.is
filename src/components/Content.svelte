<div class="content">
  <slot></slot>
</div>
<style>
  .content {
    /* background-image: linear-gradient(rgba(255,255,255,0.1), rgba(0,0,0,0.4)); */
    background-image: linear-gradient(rgba(255,255,255,0.13), rgba(255,255,255,0.05));
    border-left: 1px solid rgba(0,0,0,0.4);
    border-right: 1px solid rgba(0,0,0,0.4);
    padding: 10px 20px 40px 20px;
    border-radius: 4px;
    width: 80%;
    max-width: 90%;
    color: #cbe3e7;
    border-top: 1px solid #91ffaa;
    border-bottom: 2px solid #000000;
    margin: 3% auto 3% auto;
    text-align: center;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.2);
  }
  .content:hover {
    background-image: linear-gradient(rgba(255,255,255,0.13), rgba(255,255,255,0.06));
    transition: 4s ease-out;

  }
</style>
