<script lang="ts">
  import { Router } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";
  import { emit, listen } from 'tauri/api/event';
  emit('store-js', 'js-payload');
  listen('store-rs', () => { return 'js-payload' });

</script>

<style global>
</style>

<Router {routes} />
