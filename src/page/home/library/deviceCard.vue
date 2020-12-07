<template>
  <v-row justify="center">
    <v-col v-for="n in 10" :key="n" cols="auto">
      <v-card :elevation="n - 1" height="500" width="650" class="secondary">
        {{ devicemsg }}
        <v-row
          class="fill-height"
          align="center"
          justify="center"
          v-text="n - 1"
        ></v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "deviceCard",
  props: ["devicemsg"],
  data() {
    return {};
  },
};
</script>
