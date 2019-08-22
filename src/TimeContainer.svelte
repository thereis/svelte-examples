<script>
  import { onMount, onDestroy } from "svelte";

  let currentTime = new Date();
  let intervalHandler;

  onMount(() => {
    intervalHandler = setInterval(() => (currentTime = new Date()), 1000);
  });

  onDestroy(() => {
    if (intervalHandler) clearInterval(intervalHandler);
  });
</script>

Current time is: {currentTime.toLocaleTimeString()}
