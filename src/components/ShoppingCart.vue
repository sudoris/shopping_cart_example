<template>
  <div class="products-wrapper">             
    <div class="products">        
      <div class="product" v-for="(item, index) in inCart" :key="index">            
        <Product :data="item"></Product>        
      </div>                        
    </div>          
  </div>
</template>

<script>
import Product from "./Product"

export default {
  name: 'ShoppingCart',
  components: { Product },
  props: [
    'inCart'       
  ],
  data() {
    return {
      
    }
  }  
}
</script>

<style>

</style>
