<template>
  <header>
    <nav>
      <router-link to="/" class="logo">Mini Shop</router-link>
      <div class="nav-links">
        <router-link to="/">Products</router-link>
        <router-link to="/cart" class="cart-link">
          Cart ({{ cart.totalItems }})
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { useCartStore } from '../stores/cart'

export default {
  computed: {
    cart() { return useCartStore() }
  }
}
</script>

<style scoped>
header { background-color: #1e293b; }
nav {
  max-width: 900px;
  margin: 0 auto;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo { color: #e2e8f0; font-size: 20px; font-weight: 700; text-decoration: none; }
.nav-links { display: flex; gap: 20px; }
.nav-links a { color: #94a3b8; text-decoration: none; font-size: 14px; }
.nav-links a:hover, .nav-links a.router-link-active { color: #e2e8f0; }
.cart-link { background-color: #3B2FC6; color: white !important; padding: 5px 14px; border-radius: 6px; }
</style>
