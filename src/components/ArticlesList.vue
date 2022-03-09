<template>
  <div class="articles">
    <div
      v-for="article in articles"
      :key="article.id"
      :style="`background-image: url(${article.image.url})`"
      class="article"
    >
      <figure>
        <figcaption>
          <div class="article__body">
            <a
              class="article__title text-medium"
              @click="goToArticle(article.id, article.slug)"
              >{{ article.title }}</a
            >
            <p class="article__maj text-light">
              Mise à jour : {{ getDate(article.updated_at) }}
            </p>
          </div>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ArticlesList",
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    getDate(date) {
      const newDate = new Date(date);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return newDate.toLocaleDateString("fr-FR", options);
    },
    goToArticle(articleId, articleSlug) {
      this.$router.push({
        name: "DetailsView",
        params: { id: articleId, slug: articleSlug },
      });
    },
  },
  mounted() {
    axios
      .get("https://cms-beta.happytal.com/articles")
      .then((response) => {
        this.articles = response.data;
      })
      .catch(() => {
        this.$router.push({
          name: "ErrorView",
        });
      });
  },
};
</script>

<style lang="scss" scoped>
.articles {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 30px;
  padding: 40px 15px;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .article {
    width: 100%;
    height: 280px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    place-content: end;
    border: 1px solid #d9e4ff;
    border-radius: 26px;
    overflow: hidden;
    box-shadow: 0px 5px 0px 0px rgba(217, 228, 255, 0.6);

    figure {
      margin: 0;

      figcaption {
        background-color: #ffffff;
        color: #363033;
        width: 100%;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        min-height: 100px;
        height: 100%;
      }
    }

    p {
      margin: 0;
    }

    &__body {
      text-align: left;
      padding: 10px;
    }

    &__img {
      width: 100%;
      height: 100%;
    }

    &__maj {
      font-size: 13px;
      padding-top: 10px;
    }

    &__title {
      text-decoration: none;

      &:hover {
        color: #d51c5f;
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
}
</style>
