<template>
  <div>
    <nav></nav>
    <header>
      <fa class="wheat-icon" :icon="['fas', 'wheat-awn']" />
      <h1>Cerealis</h1>
    </header>
    Envi

    <article class="cards" v-if="getApiResponse">
      <UserCard
        v-for="(user, i) in getApiResponse"
        :key="user.id"
        :user="user"
        :style="{ animationDelay: `${0.1 * i + 0.5}s` }"
      />
    </article>
    <article class="container loading" v-if="getStatus == 'loading'">
      <img src="~/assets/img/loading.gif" />
      <p v-if="!getApiResponse">Chargement des utilisateurs</p>
      <p v-else>Mise à jour des utilisateurs...</p>
    </article>
    <article class="container error" v-if="getStatus == 'error'">
      <fa class="error-icon" :icon="['fas', 'xmark']" />
      <p>Erreur : La connexion à l'API n'a pu être établie</p>
    </article>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Index",
  computed: {
    ...mapGetters(["getApiResponse", "getStatus", "getApiMessage"]),
  },
  mounted() {
    this.getAllUsers();
  },
  methods: {
    ...mapActions(["getAllUsers"]),
  },
};

// v-if="getStatus == 'loading'"
</script>

<style scoped>
nav {
  background: url("~assets/img/wheat.jpg");
  /* Photo prise sur https://pixabay.com/fr/photos/bl%c3%a9-sur-le-terrain-des-c%c3%a9r%c3%a9ales-3241114/ */
  height: 300px;
  width: 100%;
  border-radius: 5px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  transition: 0.3s;
  transform: translateY(-5px);
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;

  margin-top: 20px;
}

header {
  transition: 0.3s;
  opacity: 0;
  transform: translateX(-5px);
  animation: fadeInWheat 0.5s ease forwards;
  animation-delay: 0.3s;
}

header h1 {
  margin-top: 10px;
  color: rgb(50, 50, 50);
}

header .wheat-icon {
  font-size: 40px;
  margin-top: -55px;
  border-top-right-radius: 50px;
  padding-top: 25px;
  padding-right: 25px;

  background: white;
  color: #f9c74f;
}

.cards {
  margin-top: 50px;
  margin-bottom: 25px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  gap: 20px 20px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  gap: 10px 10px;

  transition: 0.3s;
  transform: translateY(-5px);
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

.container p {
  margin: 0;
  font-size: 16px;
  color: rgb(100, 100, 100);
}

.loading img {
  width: 75px;
}

.loading p {
  transition: 0.3s;
  opacity: 0;
  animation: loading 1.5s ease infinite;
}

.error .error-icon {
  margin-top: 15px;
  color: #f94144;
  font-size: 25px;
}
</style>
