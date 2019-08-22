<script>
  import { tasks, deleteTask, nextTaskId } from "./Store";
</script>

<div>
  <p>Next task id will be: {$nextTaskId}</p>
  <p>Tasks:</p>
  <ul>
    {#each $tasks as task}
      <li>
        <p>ID: {task.id}</p>
        <p>Name: {task.name}</p>

        <button on:click={() => deleteTask(task)}>Delete task</button>
      </li>
    {/each}
  </ul>
</div>
