<template>
  <v-footer fixed class="font-weight-medium">
    <v-row align="center" justify="center">
      <v-btn href="https://www.facebook.com/maxime.colomes" target="_blank">
        <v-icon>mdi-facebook</v-icon>
      </v-btn>

      <div style="padding-left: 10px; padding-right: 10px" />

      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">
              <v-icon>mdi-phone</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>
              Contactez-nous
              <v-spacer></v-spacer>
              <v-btn icon @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <br />
            <v-card-text class="subtitle-1 text-center">
              Si vous préférez entendre nos voix douces, voici notre numéro:
              <br />
              <div style="padding:10px; padding-top:10px" class="title">+33 6 08 88 91 84</div>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>

      <div style="padding-left: 10px; padding-right: 10px" />

      <v-btn href="https://www.instagram.com/max_cjs/" target="_blank">
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>