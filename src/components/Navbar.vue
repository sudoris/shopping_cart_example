<template>
  <div>       
    <nav>                
      <ul class="nav bg-dark justify-content-center">
        <li class="nav-item">
          <!-- <router-link to="">
            <span></span>
          </router-link>  -->
          <a class="nav-link" href="#">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fas fa-shopping-cart"></i></a>
        </li>        
      </ul>  
    </nav>  
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return{

    }
  }

}
</script>

<style>
a {
  color: #fff !important;
}
</style>
