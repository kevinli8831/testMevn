<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="teacher in teachers" :key="teacher._id">
          <td>{{ teacher.name }}</td>
          <td>{{ teacher.email }}</td>
          <td>{{ teacher.phone }}</td>
          <td>
            <router-link :to="{name: 'edit', params: { id: teacher._id }}" class="btn btn-success">Edit
            </router-link>
            <button @click.prevent="deleteStudent(teacher._id)" class="btn btn-danger">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      teachers: []
    }
  },
  created() {
    let apiURL = 'http://localhost:4000/api/listTeachers';
    axios.get(apiURL).then(res => {
      this.teachers = res.data;
      console.log(res,'res')
    }).catch(error => {
      console.log(error)
    });
  },
  methods: {
    deleteStudent(id){
      let apiURL = `http://localhost:4000/api/delete-teacher/${id}`;
      let indexOfArrayItem = this.teachers.findIndex(i => i._id === id);
      if (window.confirm("Do you really want to delete?")) {
        axios.delete(apiURL).then(() => {
          this.teachers.splice(indexOfArrayItem, 1);
        }).catch(error => {
          console.log(error)
        });
      }
    }
  }
}
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>
