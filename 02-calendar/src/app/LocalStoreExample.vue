<template>
  <div>
    <h2>Local Storage Example</h2>
    <NumberDisplay />
    <NumberSubmit />
  </div>
</template>

<script>

import NumberDisplay from './components/NumberDisplay.vue';
import NumberSubmit from './components/NumberSubmit.vue';

export default {
  name: 'LocalStorageExample',
  components: {
    NumberDisplay,
    NumberSubmit,
  },
}
</script>
