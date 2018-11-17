<template>     

    <div class="card text-white bg-secondary">
      <img class="card-img-top" src="https://i.pinimg.com/564x/64/1e/8b/641e8bf346a0dc974788ef312dab8ee4.jpg" alt="Card image cap">
      <div class="card-body">
        <div class="card-text">Name: {{ data.name }}</div>
        <div class="card-text">Price: {{ data.price }}</div>
        <div class="card-text">Rating: {{ data.rating }}</div>
        <button @click="addToCart">Add to Cart</button>
      </div>
      
      
    </div>
  
</template>

<script>
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
      this.$emit('addToCart', this.data.id)
    }
  }
}
</script>

<style>
.card {
  margin-bottom: 1rem;
}
</style>

