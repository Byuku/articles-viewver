<template>
  <header>
    <p>HappyNel</p>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style lang="scss" scoped>
header {
  background-color: #d51c5f;
  height: 70px;
  color: #ffffff;
  display: flex;
  place-content: center;
  place-items: center;

  p {
    margin: 0;
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
