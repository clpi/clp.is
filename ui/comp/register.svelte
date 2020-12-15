  <script>
    //TODO implement this
    import { signupUser, getUserById } from '../util/calls.js';
    import { invoke, promisified } from 'tauri/api/tauri';

    let signup = Promise.resolve([]);
    const { form, handleChange, handleSubmit } = createForm({
      initialValues: {
        email: "",
        username: "",
        password: ""
      },
      onSubmit: values => {
        signup = signupUser(JSON.stringify(values));
        if (signup) {
          invoke({cmd: 'register', params: values})          
        }
      }
    });
  </script>
<style>
  .signupform {
    padding: 10px 5px 10px 5px;
    display: inline-block; 
    margin: auto;
    width: min-content;
  }
  input {
    padding: 10px;
  }
</style>

<div class="signupform">
  <h2>Register</h2>
  <form on:submit={handleSubmit}>
    <label for="email">email</label>
    <input
      id="email"
      name="email"
      on:change={handleChange}
      bind:value={$form.email}/>

    <label for="username">username</label>
    <input
      id="username"
      name="username"
      on:change={handleChange}
      bind:value={$form.username}
    />

    <label for="password">password</label>
    <input
      id="password"
      name="password"
      on:change={handleChange}
      bind:value={$form.password}
    />

    <button type="submit">Submit</button>
  </form>

</div>
