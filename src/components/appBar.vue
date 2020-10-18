<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title class="black--text"> Match 4 Help </v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="GetUser">
      Hello, {{ GetUser.isAnonymous ? "anonymous" : GetUser.username }}
    </div>
    <v-menu offset-y bottom>
      <template #activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon large>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-show="!GetUser" @click="$router.push(`/Signin`)">
          <v-list-item-title> Sign in </v-list-item-title>
        </v-list-item>
        <v-list-item v-show="GetUser" @click="Signout">
          <v-list-item-title> Sign out </v-list-item-title>
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
    return {};
  },
  computed: {
    ...mapGetters({
      GetUser: "user/GetUser",
    }),
  },
  methods: {
    async Signout() {
      await FirebaseSignout();
      this.$router.push(`/Signin`);
    },
  },
};
</script>

<style></style>
