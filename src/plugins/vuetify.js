import Vue from "vue";
import Vuetify from "vuetify/lib";
import { colors } from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blueGrey,
        secondary: colors.grey.darken1,
        accent: "#82B1FF",
        error: colors.red.darken1,
        info: colors.lightBlue.lighten2,
        success: colors.green,
        warning: colors.amber.darken1,
      },
    },
  },
});
