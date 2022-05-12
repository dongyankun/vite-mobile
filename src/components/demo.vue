<script setup lang="ts">
import { store } from "@/store/index";
import {
  ref,
  computed,
  watch,
  onBeforeUnmount,
  onMounted,
  isRef,
  unref,
  toRef,
  toRefs,
  nextTick,
  h
} from "vue";
const emit = defineEmits(["change"]);

//普通data
let normalData = 123123;
//响应式数据data
let refData = ref(["name"]);
console.log(refData.value);
// fun
const click = () => {
  console.log(1123);
};
// 使用prop
let props = defineProps({
  sessionTimeout: {
    type: Boolean
  }
});
// 调用emit
const clickEmit = () => {
  let name = "我是传递的值";
  emit("change", name);
};
// computed
const getRefData = computed(() => {
  return refData.value;
});
// watch
watch(
  () => {
    return props.sessionTimeout;
  },
  () => {
    console.log("sessionTimeout发生了变化");
  }
);
// vuex
console.log(store.state.count);
// 组件内部数据不暴露，导出数据，父组件可通过ref获取数据
defineExpose({ refData });
//生命周期
onBeforeUnmount(() => {
  console.log("即将消失");
});
onMounted(() => {
  console.log("渲染完成");
});
// 其他不常用的属性
// isRef判断是否为ref
let isRefStatus = isRef(refData);
console.log(isRefStatus);

// unref 如果参数是一个 ref 则返回它的 value，否则返回参数本身。
let data = unref(normalData);
let data2 = unref(refData);
console.log(data, data2);
// toRefs
// let refObj = ref({
//   name: 123,
//   age: 999
// });
// let flag = {
//   ...refObj
// };
// flag.value.name = 213;
// let newRefData = toRefs(refObj);
</script>

<template>
  <div>{{ refData }}{{ normalData }}</div>
  <!-- 触发方法 -->
  <button @click="click">点我触发自定义方法</button>
  <!-- 使用props -->
  <div>{{ sessionTimeout }}</div>
  <!-- 使用图标 -->
  <i style="color: #3366ff; cursor: pointer" class="iconfont icon-eye"></i>
  <!-- 点击触发emit -->
  <button @click="clickEmit">点我触发自定义方法</button>
  <!-- computed -->
  <div>{{ getRefData }}</div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
