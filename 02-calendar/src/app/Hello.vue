<template>
  <h2>{{ getGreeting }}</h2>
</template>

<script>
export default {
  name: 'HelloComponent',
  data() {
    return {
      reversedGreeting: '!dlrow olleH',
    };
  },
  computed: {
    getGreeting() {
      return this.reversedGreeting.split("").reverse().join("");
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  width: 100%;
  text-align: center;
}
</style>