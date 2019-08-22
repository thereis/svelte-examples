<script>
  const people = [
    {
      name: "Lucas",
      age: 23
    },
    {
      name: "Ana",
      age: 21
    }
  ];
</script>

<ul>
  {#each people as person, index}
    <li>
      <p>ID: {index}</p>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
    </li>
  {/each}
</ul>
