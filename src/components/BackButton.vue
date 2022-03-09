<template>
  <button @click="backToHome()">Retour accueil</button>
</template>

<script>
export default {
  name: "BackButton",
  methods: {
    backToHome() {
      this.$router.push({ name: "HomeView" });
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: #ffffff;
  border: 1px solid;
  font-size: 15px;
  padding: 0.6rem 2rem;
  border-radius: 26px;
  border: none;
  font-family: "Nunito", sans-serif;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #04cdc4;
    cursor: pointer;
  }
}
</style>
