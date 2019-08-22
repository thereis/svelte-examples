<script>
  let age = 0;
</script>

<div>
  Type your age to see the hidden content:
  <input type="number" bind:value={age} />
</div>

{#if age > 10}
  <p>Wow you've {age} years. Now you're able to see the content.</p>
{:else}
  <p>
    Hmmm, you aren't that old yet. You need to have at least 11. Wait more {11 - age}
    years.
  </p>
{/if}
