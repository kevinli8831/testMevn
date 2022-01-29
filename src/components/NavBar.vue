<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
    <div class="container">
      <a class="navbar-brand float-left">MEVN Stack Example | Kevin</a>
      <ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item mx-3">
          <router-link class="nav-link pr-3" to="/">Create Student</router-link>
        </li>
        <li class="nav-item mx-3">
          <router-link class="nav-link pr-3" to="/Teacher">Create Teacher</router-link>
        </li>
        <li class="nav-item mx-3">
          <router-link class="nav-link" to="/viewStudents">View Students</router-link>
        </li>
        <li class="nav-item mx-3">
          <router-link class="nav-link" to="/viewTeachers">View teachers</router-link>
        </li>
        <li class="nav-item mx-3">
          <router-link class="nav-link" to="/test">Test</router-link>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>
