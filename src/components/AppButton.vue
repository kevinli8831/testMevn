<template>
  <div>
    <button style="background-color: pink" @click="temp">
      <slot/>
    </button>
    <div>You click me {{counter}} time</div>
  </div>
</template>

<script>
export default {
  name: "AppButton",
  props:{
    counter:Number,
  },
  data(){
    return{
      innerCounter:this.counter
  }
},
  methods:{
    temp(){
      this.$emit('update:counter', this.innerCounter+=1)    },
  },
}
</script>

<style scoped>

</style>
