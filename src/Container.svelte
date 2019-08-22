<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    flex-direction: column;
  }
  p.error {
    color: red;
    font-size: 14px;
  }
</style>

<div class="container">
  <slot>
    <p class="error">Oops, it seems there is no child component!</p>
  </slot>
</div>
