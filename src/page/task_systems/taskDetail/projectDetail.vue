<template>
  <v-container>
    <!-- <v-card max-width="1000" class="mx-auto">
      <v-card-title class="d-flex justify-space-between">
        <v-sheet class="d-flex">
          <v-checkbox color="success"></v-checkbox>
          <v-text-field autofocus value="吴城测绘" style="border:none"> </v-text-field>
        </v-sheet>
        <v-btn icon><v-icon>mdi-pencil-circle</v-icon></v-btn>
      </v-card-title>
      <v-card-subtitle>

      </v-card-subtitle>
      <v-divider></v-divider>
    </v-card> -->
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">名字</th>
            <th class="text-left">值</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    desserts: [
      {
        name: "项目名称",
        calories: "洪城项目",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
      },
      {
        name: "Eclair",
        calories: 262,
      },
      {
        name: "Cupcake",
        calories: 305,
      },
      {
        name: "Gingerbread",
        calories: 356,
      },
      {
        name: "Jelly bean",
        calories: 375,
      },
      {
        name: "Lollipop",
        calories: 392,
      },
      {
        name: "Honeycomb",
        calories: 408,
      },
      {
        name: "Donut",
        calories: 452,
      },
      {
        name: "KitKat",
        calories: 518,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
