<script>
  const fetchData = async () => {
    const request = await fetch("https://randomuser.me/api/?results=5");
    return await request.json();
  };

  const request = fetchData();
</script>

<style>
  p.error {
    color: red;
  }
</style>

{#await request}
  <p>Loading...</p>
{:then result}
  <h3>Users</h3>
  <div>
    <ul>
      {#each result.results as user}
        <li>{user.email}</li>
      {/each}
    </ul>
  </div>
{:catch message}
  <p class="error">{message}</p>
{/await}
