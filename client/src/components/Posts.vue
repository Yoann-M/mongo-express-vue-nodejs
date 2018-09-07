<template>
  <div class="posts">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "posts",
  data() {
    return {
      msg: "Page Posts"
    };
  }
};
</script>