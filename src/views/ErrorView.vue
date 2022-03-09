<template>
  <div class="error">
    <h2 class="text-medium">Une erreur est survenue</h2>
    <BackButton />
  </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";

export default {
  name: "ErrorView",
  components: {
    BackButton,
  },
};
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  place-content: center;
  place-items: center;
  flex-direction: column;
  height: 100vh;

  img {
    width: 100%;
    max-width: 550px;
  }
}
</style>
