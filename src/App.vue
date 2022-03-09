<template>
  <div id="app">
    <TheHeader />

    <router-view />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500&display=swap");

#app {
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 15px;
}

body {
  margin: 0;
  background-color: #f8faff;
}

.container {
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
}

.text-thin {
  font-weight: 200;
}

.text-light {
  font-weight: 300;
}

.text-regular {
  font-weight: 400;
}

.text-medium {
  font-weight: 500;
}
</style>
