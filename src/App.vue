<template>
  <div id="app">   
    <Navbar :inCart="inCart"></Navbar>    

    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
import { EventBus } from "./main.js"

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      inCart: []  
    }
  },
  computed: {
    numberInCart() {
      return this.inCart.length;
    }
  },
  created() {
    EventBus.$on('addToCart', (product) => {      
      this.inCart.push(product)    
    })
  }  
}
</script>


<style>

</style>
