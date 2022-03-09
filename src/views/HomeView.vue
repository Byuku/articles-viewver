<template>
  <main>
    <div class="container">
      <ArticlesList />
    </div>
  </main>
</template>

<script>
import ArticlesList from "@/components/ArticlesList.vue";

export default {
  name: "HomeView",
  components: {
    ArticlesList,
  },
};
</script>
