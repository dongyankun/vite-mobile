<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    sessionTimeout: {
      type: Boolean
    }
  },
  emits: ["change"],
  setup(props, ctx) {
    console.log(ctx);
    console.log(props.sessionTimeout);
    let name = ref("1");
    return {
      name: name
    };
  },
  data() {
    return {
      fff: 2
    };
  },
  computed: {
    // getname() {
    //   return this.name;
    // }
  },
  mounted() {
    console.log(321321);
  }
});
</script>

<template>
  <div>other style{{ name }}</div>
</template>

<style scoped></style>
