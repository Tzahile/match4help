<template>
  <v-app>
    <app-bar></app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import appBar from "@/components/appBar.vue";
export default {
  name: "App",
  components: {
    appBar,
  },
};
</script>
