<template :align="start" :justify="start">
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="headline">
            Hello, World!
          </v-card-title>
          <v-card-text>
            Nuxt+Vuetifyのテストページです<br>
            <ul>
              <li>
                <nuxt-link to="card-test">
                  v-card test
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="tooltip-test">
                  v-tooltip test
                </nuxt-link>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
  import Logo from '~/components/Logo.vue'
       import VuetifyLogo from '~/components/VuetifyLogo.vue'

  export default {
      components: {}
  }
</script>
