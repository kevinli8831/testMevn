<template>

<div style="display: flex;justify-content: space-between;height: 800px">
  <div id="example-1">
    <div id="example-2">
      <button @click="show = !show">Toggle show</button>
      <transition name="bounce">
        <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
      </transition>
    </div>
  </div>
  <div class="text-center" style="width: 200px;background-color: blue">a</div>
  <div class="text-center" style="width: 200px;background-color: red">b</div>
  <div class="text-center" style="width: 200px;background-color: green">c</div>

</div>
</template>

<script>
export default {
  name: "test",
  components: { },
  data(){
    return{
    status:false,
      counter: 1,   show: true,
    }
},

}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
