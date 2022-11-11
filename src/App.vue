<template>
  <BootNavbar />
  <div class="mt-3 pb-5">
    <router-view></router-view>
  </div>
  <BootFooter />
</template>

<script>
import BootNavbar from './components/BootNavbar.vue'
import BootFooter from './components/BootFooter.vue'

export default {
  name: 'App',
  components: {
    BootNavbar,
    BootFooter,
  }
}
</script>

<style>

</style>
