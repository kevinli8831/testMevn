<template>
<div>
  <slot>
  </slot>
  <input type="checkbox"
         :checked="checked"
         v-on:change=" temp($event)"/>
</div>
</template>

<script>
export default {
  name: "AppCheckbox",
  props:{
    checked:Boolean,
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  methods:{
    temp(event){
      console.log(event,'event')
      this.$emit('change', event.target.checked)
    },
  }

}
</script>

<style scoped>

</style>
