<template>
  <div>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  props: ['msg']
}
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>
