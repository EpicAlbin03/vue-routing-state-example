<template>
  <div v-if="product" class="detail">
    <button @click="$router.back()" class="btn-back">&larr; Back</button>
    <div class="detail-card">
      <h1>{{ product.name }}</h1>
      <p class="category">{{ product.category }}</p>
      <p class="description">{{ product.description }}</p>
      <p class="price">&pound;{{ product.price }}</p>
      <button @click="addToCart" class="btn-add">Add to Cart</button>
    </div>
  </div>
  <div v-else><p>Product not found.</p></div>
</template>

<script>
import { useProductsStore } from '../stores/products'
import { useCartStore } from '../stores/cart'

export default {
  computed: {
    product() {
      const store = useProductsStore()
      const id = parseInt(this.$route.params.id)
      return store.getById(id)
    }
  },
  methods: {
    addToCart() {
      const cart = useCartStore()
      cart.addToCart(this.product)
      this.$router.push('/cart')
    }
  }
}
</script>

<style scoped>
.btn-back { background: none; border: none; color: #3B2FC6; cursor: pointer; font-size: 14px; margin-bottom: 15px; padding: 0; }
.detail-card { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
h1 { color: #0f172a; margin-bottom: 5px; }
.category { color: #6b7280; font-size: 14px; margin-bottom: 12px; }
.description { margin-bottom: 15px; color: #475569; }
.price { font-size: 28px; font-weight: 700; color: #3B2FC6; margin-bottom: 15px; }
.btn-add { background-color: #3B2FC6; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-size: 14px; }
.btn-add:hover { background-color: #2d23a0; }
</style>
