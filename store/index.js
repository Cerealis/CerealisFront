export const state = () => ({
  status: null,
  apiResponse: null,
});

export const getters = {
  getStatus: (state) => {
    return state.status;
  },
  getApiResponse: (state) => {
    return state.apiResponse;
  },
};

export const mutations = {
  SET_STATUS(state, status) {
    state.status = status;
  },
  SET_API_RESPONSE(state, apiResponse) {
    state.apiResponse = apiResponse;
  },
};

export const actions = {
  changeStatus(context, status) {
    context.commit("SET_STATUS", status);
  },

  getHello(context) {
    this.$axios
      .get("http://localhost:8080/", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        context.commit("SET_API_RESPONSE", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getAllUsers(context) {
    this.$axios
      .get("http://localhost:8080/getinfos", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        context.commit("SET_API_RESPONSE", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  deleteUser(context) {
    this.$axios
      .get("http://localhost:8080/getinfos", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        context.commit("SET_API_RESPONSE", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  login(context, id) {
    this.$axios
      .post(`http://localhost:5000/v1/grouper/login/${username}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        console.log(response);

        if (username == "admin") {
          context.commit("SET_IS_LOGGED", true);
          context.commit("SET_IS_ADMIN", true);
          context.commit("SET_USER", "admin");
          this.$router.push("/admin");
        } else {
          context.commit("SET_IS_LOGGED", true);
          context.commit("SET_IS_ADMIN", false);
          context.commit("SET_USER", username);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
