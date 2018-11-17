<template>
  <div>     

    <Navbar></Navbar>    
    
    <div class="main-content">
      <div class="container-fluid">
        <div class="row">        
            <div v-for="(product, index) in products" :key="index" class="col-md-4">            
              <Product :data="product" @addToCart="addToCart"></Product>        
            </div>           
        </div>  
      </div>
    </div>
    <!-- </div> -->

  </div>
</template>

<script>
import Product from "./Product"
// import ShoppingCart from "./ShoppingCart"
import Navbar from "./Navbar"

export default {
  name: 'Index',
  components: {
    Product,
    // ShoppingCart,
    Navbar
  },       
  data() {
    return {      
      products: [
        { id: 1, name: 'Cup Noodles', price: 50, rating: 4, url: "https://s7d2.scene7.com/is/image/PetSmart/5149891?$sclp-prd-main_large$" },        
        { id: 2, name: 'Kleenex', price: 98, rating: 5, url: "https://s7d2.scene7.com/is/image/PetSmart/5149891?$sclp-prd-main_large$" },
        { id: 3, name: 'Dog Food', price: 32, rating: 3, url: "https://s7d2.scene7.com/is/image/PetSmart/5149891?$sclp-prd-main_large$" },
        { id: 4, name: 'Coca Cola 12 Pack', price: 75, rating: 2, url: "https://s7d2.scene7.com/is/image/PetSmart/5149891?$sclp-prd-main_large$" },
        { id: 5, name: 'Cat Food', price: 44, rating: 5, url: "https://s7d2.scene7.com/is/image/PetSmart/5149891?$sclp-prd-main_large$" },
        { id: 6, name: 'Canned Tuna 6 Pack', price: 88, rating: 3, url: "https://s7d2.scene7.com/is/image/PetSmart/5149891?$sclp-prd-main_large$" },
        { id: 7, name: 'Pair of Socks', price: 12, rating: 1, url: "https://s7d2.scene7.com/is/image/PetSmart/5149891?$sclp-prd-main_large$" }        
      ],
      inCart: [

      ]      
    }
  },
  methods: {
    addToCart(id) {
      this.inCart.push(id)
    }
  },
}
</script>

<style>
.main-content {
  margin: 1.5rem 4rem;
}


</style>
