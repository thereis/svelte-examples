<script>
  import { nextTaskId, addTask } from "./Store";
  let name = "";

  const onClick = () => {
    addTask({ name, id: $nextTaskId });
    name = "";
  };
</script>

<div>
  Task name:
  <input type="text" bind:value={name} />
  <button on:click={onClick}>Click to add new task!</button>
</div>
