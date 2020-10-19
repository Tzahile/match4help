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
          <template #[`item.g_status`]="{ item }">
            <tableDialog
              input="select"
              :field="item.g_status"
              @change-field="item.g_status = $event"
              @save="SaveNewValue(item)"
            ></tableDialog>
          </template>

          <template #[`item.h_helper`]="{ item }">
            <tableDialog
              input-label="ערוך מתנדב"
              :field="item.h_helper"
              @change-field="item.h_helper = $event"
              @save="SaveNewValue(item)"
            ></tableDialog>
          </template>

          <template #[`item.i_notes`]="{ item }">
            <tableDialog
              input-label="ערוך הערות"
              :field="item.i_notes"
              @change-field="item.i_notes = $event"
              @save="SaveNewValue(item)"
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
        { text: "נוצר", value: "a_created" },
        { text: "שם", value: "b_name" },
        { text: "דרוש עד תאריך", value: "c_required-date" },
        { text: "כתובת", value: "d_address" },
        { text: "טלפון", value: "e_phone" },
        { text: "מידע", value: "f_information" },
        { text: "סטטוס", value: "g_status" },
        { text: "מתנדב", value: "h_helper" },
        { text: "הערות", value: "i_notes" },
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
