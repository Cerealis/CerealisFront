<template>
  <section>
    <aside>
      <h2>{{ user.firstname }}</h2>
      <span
        ><fa
          @click="deleteUser(user.id)"
          class="delete-button"
          :icon="['fas', 'trash']"
      /></span>
    </aside>
    <p>{{ user.email }}</p>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "UserCard",
  props: {
    user: Object,
  },
  methods: {
    ...mapActions(["deleteUser"]),
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;

  width: 300px;

  padding: 20px;
  box-shadow: 15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
  border-radius: 5px;

  transition: 0.3s;
  transform: translateY(-5px);
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

section aside {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
  width: 100%;
}

section h2 {
  margin: 0;

  font-size: 20px;
  font-weight: normal;
}

section p {
  margin: 0;
  font-size: 16px;
  color: rgb(100, 100, 100);
}

.delete-button {
  transition: 0.3s;
  color: rgb(200, 200, 200);
}

.delete-button:hover {
  cursor: pointer;
  transform: rotate(6deg);
  color: #d90429;
}

@media screen and (max-width: 790px) {
  section {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  section {
    width: 100%;
  }

  section h2 {
    font-size: 18px;
  }

  section p {
    font-size: 14px;
  }
}
</style>
