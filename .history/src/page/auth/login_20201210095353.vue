<template>
  <v-container fluid>
    <v-checkbox v-model="checkbox">
      <template v-slot:label>
        <div>
          我同意
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <a
                target="_blank"
                href="http://vuetifyjs.com"
                @click.stop
                v-on="on"
              >
                《注册协议》
              </a>
            </template>
          </v-tooltip>
        </div>
      </template>
    </v-checkbox>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        checkbox: false,
      }
    },
  }
</script>