<template>
  <div>
    <p>当前最新count值为：{{ $store.state.test.count }}</p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      number: 111
    };
  }
};
</script>
