<template>
  <div class="home">
    <Todo msg="Welcome to Your Vue.js App!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from '@/pages/todo/components/Todo.vue'

export default {
  name: 'home',
  components: {
    Todo
  }
}
</script>
