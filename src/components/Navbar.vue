<template>
  <div class="wrapper">     

    <nav>
      <ul>
        <li>          
          <router-link to="/">
              All Products
          </router-link> 
        </li>
         <li>
          <!-- <router-link to="{ name: 'checkout', params: { items: { inCart }}">
              {{ numberInCart }} <i class="fas fa-shopping-cart"></i>
          </router-link>  -->         
          
          <div class="cart" @click="loadCart">
            {{ numberInCart }} <i class="fas fa-shopping-cart"></i>
          </div>

        </li>
      </ul>
    </nav>  

  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: [
    'inCart'
  ],
  data() {
    return{

    }
  },
  methods: {
    loadCart() {      
      this.$router.push({
        name: 'checkout',
        params: { inCart: this.inCart }
      })
    }
  },
  computed: {
     numberInCart() {
      return this.inCart.length;
    }
  }

}
</script>

<style>
.wrapper {
  width: 100%;  
  margin: 0 auto;
}

nav {  
  background: #333;  
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  margin: 0 2rem;
  font-size: 1.5rem;
}

nav a {
  text-decoration: none;
  text-align: center;
  color: #fff;
  display: block;
  padding: 10px;
}

nav a:hover {
  background-color: #555;
}

.cart {  
  text-align: center;
  color: #fff;
  display: block;
  padding: 10px;
}

.cart:hover {
  cursor: pointer;
  background-color: #555;
}

@media screen and (min-width: 768px) {
  nav ul {
    display: flex;
    justify-content: center;
  }

  nav li {
    
  }
}

</style>
