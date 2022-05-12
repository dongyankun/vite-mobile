<template>
  <div class="name">
    <div class="name1">skyeye</div>
    <Demo ref="demo" :session-timeout="status" @change="changeFun"></Demo>
    <div @click="toDemo2">点我跳转路由</div>
    <div @click="getList">点我请求接口</div>

    <div v-for="(item, index) in typelist" :key="index">{{ item }} </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Demo from "@/components/demo.vue";
import homeApi from "../api/index";

const { currentRoute, replace, push } = useRouter();
const changeFun = (val) => {
  console.log(val);
};
//获取子组件暴露出的数据
const demo = ref();
let status = ref(true);
let typelist = ref([]);
const toDemo2 = () => {
  push({ path: "/home/other" });
};
const getList = async () => {
  let data: any = await homeApi.getTypeList({});
  typelist.value = data;
  console.log(data);
};
setTimeout(() => {
  status.value = false;
  // console.log(demo.value.refData);
}, 5000);
</script>
<style lang="scss"></style>
