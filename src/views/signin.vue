<template>
  <v-row>
    <v-col cols="6" offset="3">
      <v-card>
        <v-card-title primary-title>
          <h3 class="headline mb-0">Sign in</h3>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              v-for="button in signinButtons"
              :key="button.text"
              offset="2"
              cols="8"
            >
              <v-btn
                :dark="!button.lightText"
                width="100%"
                class="justify-space-between"
                :color="button.color"
                @click="SignUserIn(button.text.split(' ').slice(-1))"
              >
                <v-col cols="1">
                  <v-icon>{{ button.icon }}</v-icon>
                </v-col>
                <v-col>
                  {{ button.text }}
                </v-col>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { colors } from "vuetify/lib";
import { FirebaseSignin } from "../firebaseAPI/signin.js";
export default {
  data() {
    return {
      signinButtons: [
        // {
        //   text: "Sign in with Google",
        //   icon: "mdi-google",
        //   color: "white",
        //   lightText: true,
        // },
        {
          text: "Sign in with Phone",
          icon: "mdi-phone",
          color: colors.green.accent4,
        },
        {
          text: "Sign in with Email",
          icon: "mdi-email",
          color: colors.red.darken4,
        },
        // {
        //   text: "Sign in with Facebook",
        //   icon: "mdi-facebook",
        //   color: colors.blue.darken3,
        // },
        // {
        //   text: "Sign in with Twitter",
        //   icon: "mdi-twitter",
        //   color: colors.blue.lighten3,
        // },
        {
          text: "Sign in as a Guest",
          icon: "mdi-clipboard-account",
          color: colors.deepPurple.base,
        },
      ],
    };
  },
  methods: {
    async SignUserIn([option]) {
      await FirebaseSignin({ signinOption: option });
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
