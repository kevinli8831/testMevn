<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Create Teacher</h3>
      <form @submit.prevent="true">
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" v-model="teacher.name" required>
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model="teacher.email" required>
        </div>

        <div class="form-group">
          <label>Phone</label>
          <input type="text" class="form-control" v-model="teacher.phone" required>
        </div>
        <div class="form-group">
          <label>Sex</label>
          <input type="text" class="form-control" v-model="teacher.sex" required>
        </div>
 <div class="form-group">
          <label>isAdmin</label>
          <input type="checkbox" id="scales" name="scales"
          checked v-model="teacher.isAdmin" required>
 </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block" type="submit">Create</button>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
export default {
  name: "CreateTeacherComponent",
  data() {
    return {
      teacher: {
        name: '',
        email: '',
        phone: '',
        sex:'',
        isAdmin:true,
      }
    }
  },

}
</script>

<style scoped>

</style>
