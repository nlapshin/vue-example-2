<template>
  <div>
    <h1>This is a Async Component</h1>
    <p>This component includes a lot of data and possibly async computations.</p>
  </div>
</template>

<script>
export default {
  name: 'AsyncComponent',
  mounted() {
    console.log('AsyncComponent has been loaded and mounted.');
  }
}
</script>
