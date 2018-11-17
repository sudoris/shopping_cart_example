<template>
  <div class="products-wrapper">      

    <div class="products">        
      <div class="product" v-for="(item, index) in products" :key="index">            
        <Product :data="item"></Product>        
      </div>                        
    </div>    

  </div>
</template>

<script>
import Product from "./Product"
// import ShoppingCart from "./ShoppingCart"


export default {
  name: 'Index',
  components: {
    Product,
    // ShoppingCart,
    
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
      ]          
    }
  }  
}
</script>

<style>
.products-container {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

.products {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product {  
  margin: 1% 2%;
  width: 29%;
  text-align: center;
}
</style>
