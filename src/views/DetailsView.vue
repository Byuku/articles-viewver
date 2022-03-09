<template>
  <div class="details">
    <div
      class="details__banner"
      :style="`background-image: url('${article.banner.url}')`"
    ></div>

    <div class="container">
      <BackButton />

      <div class="details__body">
        <div class="details__title">
          <p class="text-thin">{{ article.title }}</p>
        </div>

        <div
          v-if="article.content"
          v-html="compiledMarkdown(article.content)"
          class="details__content"
        ></div>

        <div class="details__partners">
          <ul>
            <li
              v-for="partner in article.partners"
              :key="partner.id"
              class="partner__item"
            >
              <div class="text-light">
                <div class="partner__logo">
                  <img :src="partner.logo.url" alt="" />
                </div>

                <div class="content">
                  <p class="partner__name text-medium">{{ partner.name }}</p>
                  <div class="partner__description">
                    <p v-html="partner.description"></p>
                  </div>
                  <a :href="partner.website" class="partner__website"
                    >Consulter le site internet</a
                  >
                  <p v-if="partner.email != null" class="partner__email">
                    Email : {{ partner.email }}
                  </p>
                  <p v-if="partner.phone != null" class="partner__phone">
                    Numéro de téléphone : {{ partner.phone }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { marked } from "marked";
import BackButton from "@/components/BackButton.vue";

export default {
  name: "DetailsView",
  data() {
    return {
      article: Object,
    };
  },
  methods: {
    compiledMarkdown(markdown) {
      return marked(markdown);
    },
    getArticle() {
      axios
        .get(`https://cms-beta.happytal.com/articles/${this.$route.params.id}`)
        .then((response) => {
          this.article = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.$router.push({
            name: "ErrorView",
          });
        });
    },
  },
  created() {
    this.getArticle();
  },
  components: {
    BackButton,
  },
};
</script>

<style lang="scss" scoped>
.details {
  text-align: left;

  img {
    max-width: 150px;
    width: 100%;
    height: auto;
  }

  p {
    margin: 0;
  }

  &__banner {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 250px;
    margin-bottom: 40px;
    width: 100%;

    @media screen and (min-width: 992px) {
      height: 350px;
    }
  }

  &__body {
    padding: 40px 15px;
  }

  &__partners {
    padding-top: 40px;

    ul {
      display: flex;
      gap: 20px;
      padding: 0;
      flex-direction: column;
      list-style-type: none;
    }

    .partner {
      &__description {
        padding-top: 10px;
      }

      &__item {
        background-color: #ffffff;
        border: 1px solid #eee;
        border-radius: 26px;
        padding: 2rem;
        box-shadow: 0px 5px 0px 0px rgba(238, 238, 238, 0.8);

        & > div {
          display: flex;
          place-items: flex-start;
          gap: 30px;
          flex-direction: column;

          @media screen and (min-width: 992px) {
            flex-direction: row;
          }
        }
      }

      &__logo {
        flex: none;
      }

      &__phone {
        padding-top: 20px;
      }

      &__website {
        margin-top: 20px;
        display: block;
      }
    }
  }

  &__title {
    p {
      color: #d51c5f;
    }
  }
}
</style>
