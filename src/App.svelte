<script>
  import Container from "./Container.svelte";
  import Welcome from "./Welcome.svelte";

  import InputContainer from "./InputContainer.svelte";
  import TimeContainer from "./TimeContainer.svelte";

  import HiddenContent from "./HiddenContent.svelte";

  import People from "./People.svelte";

  import RandomUsers from "./RandomUsers.svelte";

  import AddTask from "./AddTask.svelte";
  import Tasks from "./Tasks.svelte";
</script>

<Welcome name="Lucas" />

<Container>
  <Welcome />
</Container>

<Container />

<Container>
  <InputContainer />
</Container>

<Container>
  <TimeContainer />
</Container>

<Container>
  <HiddenContent />
</Container>

<Container>
  <People />
</Container>

<Container>
  <RandomUsers />
</Container>

<Container>
  <AddTask />
  <Tasks />
</Container>
