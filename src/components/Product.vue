<template>     

    <div class="product-content">
      <div class="product-img">
        <img class="product-img" src="https://i.pinimg.com/564x/64/1e/8b/641e8bf346a0dc974788ef312dab8ee4.jpg" alt="Product Image">
      </div>
      <div class="product-text">
        <div class="product-name">Name: {{ data.name }}</div>
        <div class="product-price">Price: {{ data.price }}</div>
        <div class="product-rating" >Rating: {{ data.rating }}</div>
        <button @click="addToCart">Add to Cart</button>
      </div>           
    </div>
  
</template>

<script>
import { EventBus } from "../main.js"

export default {
  name: "Product",
  props: [ 
    "data",
    "value"
  ],
  data() {
    return {

    }
  },
  methods: {
    addToCart() {      
      // this.$emit('addToCart', this.data.id)
      EventBus.$emit('addToCart', this.data)
    }
  } 
}
</script>

<style>
.product-content {
  width: 100%;  
  margin: 0 auto;
  border: solid black;
}

.product-img {
  padding: 0;
}

.product-text {
  background: #555;
  color: white;
}

img {
  max-width: 100%;
}

</style>

