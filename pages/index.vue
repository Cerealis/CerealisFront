<template>
  <div>
    <h1>Cerialis Front</h1>
    <article class="cards" v-if="getApiResponse">
      <UserCard
        v-for="(user, i) in getApiResponse"
        :key="user.id"
        :user="user"
        :style="{ animationDelay: `${0.1 * i}s` }"
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
  color: #d90429;
  font-size: 25px;
}
</style>
