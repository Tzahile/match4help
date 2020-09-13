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
          <template #item.e_status="{ item }">
            <v-edit-dialog
              :return-value.sync="item.e_status"
              large
              full-width
              @save="SaveNewValue(item)"
            >
              <div>{{ item.e_status }}</div>
              <template #input>
                <v-select
                  v-model="item.e_status"
                  :items="statusOptions"
                  autofocus
                >
                  <template #item="{ item }">
                    <v-icon :color="item.iconColor" class="mx-4">
                      mdi mdi-{{ item.icon }}
                    </v-icon>
                    <span>{{ item.text }}</span>
                  </template>
                </v-select>
              </template>
            </v-edit-dialog>
          </template>

          <template #item.f_helper="{ item }">
            <v-edit-dialog
              :return-value.sync="item.f_helper"
              large
              @save="SaveNewValue(item)"
            >
              <div>{{ item.f_helper }}</div>
              <template #input>
                <v-text-field
                  v-model="item.f_helper"
                  @change="ValidateChanges(item.f_helper)"
                  label="ערוך מתנדב"
                  :rules="[rules.notEmpty, rules.max25]"
                  counter="25"
                  autofocus
                ></v-text-field>
              </template>
            </v-edit-dialog>
          </template>

          <template #item.g_notes="{ item }">
            <v-edit-dialog
              :return-value.sync="item.g_notes"
              large
              @save="SaveNewValue(item)"
            >
              <div>{{ item.g_notes }}</div>
              <template #input>
                <v-text-field
                  :value="item.g_notes"
                  @change="ValidateChanges(item.g_notes)"
                  label="ערוך הערות"
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
      statusOptions: [
        {
          text: "חדש",
          icon: "plus-circle-outline",
          iconColor: "primary",
        },
        {
          text: "בטיפול",
          icon: "play-circle-outline",
          iconColor: "purple",
        },
        {
          text: "הסתיים",
          icon: "check-circle-outline",
          iconColor: "success",
        },
        {
          text: "נדחה",
          icon: "alert-circle-outline",
          iconColor: "warning",
        },
        {
          text: "בוטל",
          icon: "close-circle-outline",
          iconColor: "error",
        },
      ],
      rules: {
        notEmpty(v) {
          return v.length > 0 || "נא הוסף ערך";
        },
        max25(v) {
          v.length <= 25 || "מקסימום 25 תווים";
        },
      },
    };
  },
  methods: {
    SaveNewValue(item) {
      UpdateTableValue(item);
    },
    ValidateChanges(value) {
      if (value.length === 0 || value.length > 25) return;
      this.$emit("save");
    },
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
};
</script>
