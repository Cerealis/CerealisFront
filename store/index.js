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
};
