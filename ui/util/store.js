import { writable } from 'svelte/store';

export let isLoggedIn = writable(false);
export let token = writable('');
export let user = writable({
  id: -1, username: "", email: "", token: "", exp: -1
});
