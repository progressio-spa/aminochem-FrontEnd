<template>
    <div class="products">
        <Navbar></Navbar>
        <div>Products</div>
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
