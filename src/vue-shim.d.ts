// 由于 TypeScript 默认并不支持 *.vue 后缀的文件，
// 所以在 vue 项目中引入的时候需要创建一个 vue-shim.d.ts 文件，
// 放在项目项目对应使用目录下
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
