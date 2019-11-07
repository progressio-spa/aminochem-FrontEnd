<template>
    <div class="technical">
        <Navbar></Navbar>
        <div>technical section</div>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'home',
  components: {
    Navbar,
  },
};
</script>
