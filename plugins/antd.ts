import { defineNuxtPlugin } from '#app'
import Button from 'ant-design-vue/lib/button';
import Upload from 'ant-design-vue/lib/Upload'; 

import 'ant-design-vue/es/button/style/css';
import 'ant-design-vue/es/Upload/style/css';


export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(Button);
  nuxtApp.vueApp.use(Upload)
})