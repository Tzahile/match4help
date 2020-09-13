import Vue from "vue";
import Vuetify from "vuetify/lib";
import { colors } from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  rtl: true,
  theme: {
    themes: {
      light: {
        primary: colors.blue.base,
        secondary: colors.grey.darken1,
        accent: colors.lightBlue.accent2,
        error: colors.red.darken1,
        info: colors.lightBlue.lighten2,
        success: colors.green,
        warning: colors.amber.darken1,
      },
    },
  },
});
