<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>
      Match 4 Help
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu offset-y bottom>
      <template #activator="{ on }">
        <v-btn v-on="on" icon>
          <v-icon large>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.fn()"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
import { FirebaseSignout } from "../firebaseAPI/signout.js";
export default {
  data() {
    return {
      items: [
        {
          title: "Sign in",
          fn: () => {
            this.$router.push(`/Signin`);
          },
        },
        {
          title: "Sign up",
          fn: () => {
            this.$router.push(`/Signup`);
          },
        },
        {
          title: "Sign out",
          fn: async () => {
            await FirebaseSignout();
            this.$router.push(`/Signin`);
          },
        },
      ],
    };
  },
  computed: {
    ...mapGetters("user", ["GetUser"]),
  },
  watch: {
    GetUser(newValue) {
      debugger;
      console.log(newValue);
    },
  },
};
</script>

<style></style>
