<template>
  <div>
    <h1>Cerialis Front</h1>
    <button @click="getAllUsers">get all</button>
    <br /><br /><br />
    <article v-if="getApiResponse">
      <UserCard v-for="user in getApiResponse" :key="user.id" :user="user" />
    </article>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Index",
  computed: {
    ...mapGetters(["getApiResponse"]),
  },
  methods: {
    ...mapActions(["getAllUsers"]),
  },
};
</script>

<style scoped>
article {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: 20px 10px;
}
</style>
