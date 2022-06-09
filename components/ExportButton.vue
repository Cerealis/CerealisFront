<template>
  <fa
    @click="exportToCSV"
    class="download-icon"
    :icon="['fas', 'file-arrow-down']"
  />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UserCard",
  props: {
    users: Array,
  },
  methods: {
    ...mapActions(["getAllUsers"]),
    download(exportObj, exportName) {
      let dataStr =
        "data:text/plain;charset=utf-8," + encodeURIComponent(exportObj);
      let downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", exportName + ".csv");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    },
    exportToCSV() {
      let json = this.users;
      let fields = Object.keys(json[0]);
      let replacer = function (key, value) {
        return value === null ? "" : value;
      };
      let csv = json.map(function (row) {
        return fields
          .map(function (fieldName) {
            return JSON.stringify(row[fieldName], replacer);
          })
          .join(",");
      });

      csv.unshift(fields.join(",")); // add header column
      csv = csv.join("\r\n");

      console.log(csv);
      this.download(csv, "data");
    },
  },
};
</script>

<style scoped>
.download-icon {
  font-size: 24px;
  color: rgb(200, 200, 200);
  transition: 0.3s;
}

.download-icon:hover {
  cursor: pointer;
  color: #f9c74f;
  transform: rotate(6deg);
}
</style>
