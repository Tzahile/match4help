<template>
  <v-edit-dialog
    :return-value.sync="fieldValue"
    large
    @save="SaveNewValue(item)"
  >
    <div>{{ fieldValue }}</div>
    <template #input>
      <template v-if="input === 'textfield'">
        <v-text-field
          v-model="fieldValue"
          :label="inputLabel"
          :rules="[rules.notEmpty, rules.max25]"
          counter="25"
          autofocus
          @change="ValidateChanges(fieldValue)"
        ></v-text-field>
      </template>

      <template v-if="input === 'select'">
        <v-select v-model="fieldValue" :items="statusOptions" autofocus>
          <template #item="{ item }">
            <v-icon :color="item.iconColor" class="mx-4">
              mdi mdi-{{ item.icon }}
            </v-icon>
            <span>{{ item.text }}</span>
          </template>
        </v-select>
      </template>
    </template>
  </v-edit-dialog>
</template>

<script>
export default {
  name: "TableDialog",
  props: {
    input: {
      type: String,
      default: "textfield",
    },
    inputLabel: {
      type: String,
      default: "",
    },
    field: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      rules: {
        notEmpty(v) {
          return v.length > 0 || "נא הוסף ערך";
        },
        max25(v) {
          v.length <= 25 || "מקסימום 25 תווים";
        },
      },
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
    };
  },
  computed: {
    fieldValue: {
      get() {
        return this.field;
      },
      set(value) {
        this.$emit("change-field", value);
      },
    },
  },
  methods: {
    ValidateChanges(value) {
      if (value.length === 0 || value.length > 25) return;
      this.$emit("save");
    },
  },
};
</script>

<style></style>
