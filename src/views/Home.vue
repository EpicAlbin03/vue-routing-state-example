<template>
  <div>
    <h1>Products</h1>
    <div class="product-grid">
      <ProductCard v-for="product in productsStore.products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/products'
import ProductCard from '../components/ProductCard.vue'

export default {
  components: { ProductCard },
  computed: {
    productsStore() { return useProductsStore() }
  }
}
</script>

<style scoped>
h1 { margin-bottom: 20px; color: #0f172a; }
.product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; }
</style>
