export const state = () => ({
  status: "idle",
  apiResponse: null,
  apiMessage: null,
});

export const getters = {
  getStatus: (state) => {
    return state.status;
  },
  getApiResponse: (state) => {
    return state.apiResponse;
  },
  getApiMessage: (state) => {
    return state.apiMessage;
  },
};

export const mutations = {
  SET_STATUS(state, status) {
    state.status = status;
  },
  SET_API_RESPONSE(state, apiResponse) {
    state.apiResponse = apiResponse;
  },
  SET_API_MESSAGE(state, apiMessage) {
    state.apiMessage = apiMessage;
  },
};

export const actions = {
  changeStatus(context, status) {
    context.commit("SET_STATUS", status);
  },

  getHello(context) {
    context.dispatch("changeStatus", "loading");
    this.$axios
      .get(`${this.$axios.defaults.baseURL}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        context.commit("SET_API_RESPONSE", response.data);
        context.dispatch("changeStatus", "ok");
      })
      .catch((error) => {
        console.log(error);
        context.dispatch("changeStatus", "error");
      });
  },

  getAllUsers(context) {
    context.dispatch("changeStatus", "loading");

    this.$axios
      .get(`${this.$axios.defaults.baseURL}getusers`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        context.commit("SET_API_RESPONSE", response.data);
        context.dispatch("changeStatus", "ok");
      })
      .catch((error) => {
        console.log(error);
        context.dispatch("changeStatus", "error");
      });
  },

  deleteUser(context, id) {
    context.dispatch("changeStatus", "loading");
    this.$axios
      .get(`${this.$axios.defaults.baseURL}deleteuser?id=${id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        console.log(response);
        context.commit("SET_API_MESSAGE", response.data);

        context.dispatch("getAllUsers");
        context.dispatch("changeStatus", "ok");
      })
      .catch((error) => {
        console.log(error);
        context.dispatch("changeStatus", "error");
      });
  },
};
