<template>
    <v-container>
      
      <v-text-field
            :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
            value="Pa"
            @click:append="show4 = !show4"
          ></v-text-field>
    </v-container>
</template>

<script>
export default {
  data() {
    return {

      show4: false,
      
    };
  },
};
</script>
