<template>
  <section>
    <aside>
      <h2>{{ user.firstname }}</h2>
      <span><fa class="delete-button" :icon="['fas', 'xmark']" /></span>
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
}

.delete-button:hover {
  cursor: pointer;
  transform: rotate(6deg);
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
