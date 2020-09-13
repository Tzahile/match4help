<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-tabs
          v-model="tab"
          background-color="deep-purple accent-4"
          centered
          dark
          icons-and-text
        >
          <v-tab>
            Match4Help
            <v-icon>mdi-phone</v-icon>
          </v-tab>
        </v-tabs>
        <v-data-table
          :loading="GetDataTable == undefined"
          :headers="GetHeaders"
          :items="GetDataTable ? GetDataTable['Match4Help'] : []"
        >
          <template #item.b_name="props">
            <v-edit-dialog
              :return-value.sync="props.item.b_name"
              large
              persistent
              @save="SaveNewValue(props.item)"
            >
              <div>{{ props.item.b_name }}</div>
              <template #input>
                <v-text-field
                  v-model="props.item.b_name"
                  label="Edit Name"
                  :rules="[rules.notEmpty, rules.max25]"
                  counter="25"
                  autofocus
                ></v-text-field>
              </template>
            </v-edit-dialog>
          </template>

          <template #item.f_status="props">
            <v-edit-dialog
              :return-value.sync="props.item.f_status"
              large
              persistent
              @save="SaveNewValue(props.item)"
            >
              <div>{{ props.item.f_status }}</div>
              <template #input>
                <v-text-field
                  v-model="props.item.f_status"
                  label="Edit Status"
                  :rules="[rules.notEmpty, rules.max25]"
                  counter="25"
                  autofocus
                ></v-text-field>
              </template>
            </v-edit-dialog>
          </template>

          <template #item.g_helper="props">
            <v-edit-dialog
              :return-value.sync="props.item.g_helper"
              large
              persistent
              @save="SaveNewValue(props.item)"
            >
              <div>{{ props.item.g_helper }}</div>
              <template #input>
                <v-text-field
                  v-model="props.item.g_helper"
                  label="Edit Name"
                  :rules="[rules.notEmpty, rules.max25]"
                  counter="25"
                  autofocus
                ></v-text-field>
              </template>
            </v-edit-dialog>
          </template>

          <template #item.h_notes="props">
            <v-edit-dialog
              :return-value.sync="props.item.h_notes"
              large
              persistent
              @save="SaveNewValue(props.item)"
            >
              <div>{{ props.item.h_notes }}</div>
              <template #input>
                <v-text-field
                  v-model="props.item.h_notes"
                  label="Edit Note"
                  :rules="[rules.notEmpty, rules.max25]"
                  counter="25"
                  autofocus
                ></v-text-field>
              </template>
            </v-edit-dialog>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { UpdateTableValue } from "../firebaseAPI/dataTable.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      tab: undefined,
      showSheets: false,
      json: undefined,
      rules: {
        notEmpty(v) {
          console.log(v.length);
          return v.length > 0 || "Can't be empty";
        },
        max25(v) {
          v.length <= 25 || "Max 25 characters";
        },
      },
    };
  },
  methods: {
    SaveNewValue(item) {
      console.log(this.GetDataTable["Match4Help"]);
      UpdateTableValue(item);
    },
  },
  computed: {
    ...mapGetters({
      GetDataTable: "datatable/GetDataTable",
    }),
    GetHeaders() {
      return [
        { text: "id", value: "a_id" },
        { text: "name", value: "b_name" },
        { text: "address", value: "c_address" },
        { text: "phone", value: "d_phone" },
        { text: "information", value: "e_information" },
        { text: "status", value: "f_status" },
        { text: "helper", value: "g_helper" },
        { text: "notes", value: "h_notes" },
      ];
    },
  },
};
</script>
