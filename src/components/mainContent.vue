<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-tabs
          v-model="tab"
          background-color="accent"
          centered
          dark
          icons-and-text
        >
          <v-tab class="black--text">
            Match4Help
            <v-icon>mdi-phone</v-icon>
          </v-tab>
        </v-tabs>
        <v-data-table
          locale="he-IL"
          :loading="GetDataTable == undefined"
          :headers="GetHeaders"
          :items="GetDataTable ? GetDataTable['Match4Help'] : []"
        >
          <template #[`item.e_status`]="{ item }">
            <tableDialog
              input="select"
              :field="item.e_status"
              @change-field="item.e_status = $event"
              @save="this.$emit('save')"
            ></tableDialog>
          </template>

          <template #[`item.f_helper`]="{ item }">
            <tableDialog
              input-label="ערוך מתנדב"
              :field="item.f_helper"
              @change-field="item.f_helper = $event"
              @save="this.$emit('save')"
            ></tableDialog>
          </template>

          <template #[`item.g_notes`]="{ item }">
            <tableDialog
              input-label="ערוך הערות"
              :field="item.g_notes"
              @change-field="item.g_notes = $event"
              @save="this.$emit('save')"
            ></tableDialog>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { UpdateTableValue } from "../firebaseAPI/dataTable.js";
import tableDialog from "./tableDialog.vue";
export default {
  name: "HelloWorld",
  components: {
    tableDialog,
  },
  data() {
    return {
      tab: undefined,
    };
  },
  computed: {
    ...mapGetters({
      GetDataTable: "datatable/GetDataTable",
    }),
    GetHeaders() {
      return [
        // { text: "id", value: "a_id" },
        { text: "שם", value: "a_name" },
        { text: "כתובת", value: "b_address" },
        { text: "טלפון", value: "c_phone" },
        { text: "מידע", value: "d_information" },
        { text: "סטטוס", value: "e_status" },
        { text: "מתנדב", value: "f_helper" },
        { text: "הערות", value: "g_notes" },
      ];
    },
  },
  methods: {
    SaveNewValue(item) {
      UpdateTableValue(item);
    },
  },
};
</script>
