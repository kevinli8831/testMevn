<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Create Student</h3>
      <form @submit.prevent="handleSubmitForm">
        <div >
          <label>Name</label>
          <input type="text" class="form-control" v-model="student.name" required>
        </div>
        <div >
          <label>Email</label>
          <input type="email" class="form-control" v-model="student.email" required>
        </div>
        <div >
          <label>Phone</label>
          <input type="text" class="form-control" v-model="student.phone" required>
        </div>
        <div class="mt-3">
          <button class="btn btn-danger btn-block" type="submit">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      student: {
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    handleSubmitForm() {
      let apiURL = 'http://localhost:4000/api/create-student';
      axios.post(apiURL, this.student).then(() => {
        this.$router.push('/viewStudents')
        this.student = {
          name: '',
          email: '',
          phone: ''
        }
      }).catch(error => {
        console.log(error)
      });
    }
  }
}
</script>
