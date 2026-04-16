<template>
  <div class="card">
    <h3>{{ product.name }}</h3>
    <p class="category">{{ product.category }}</p>
    <p class="price">&pound;{{ product.price }}</p>
    <div class="actions">
      <router-link :to="'/product/' + product.id" class="btn-details">View</router-link>
      <button @click="addToCart" class="btn-add">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cart'

export default {
  props: {
    product: { type: Object, required: true }
  },
  methods: {
    addToCart() {
      const cart = useCartStore()
      cart.addToCart(this.product)
    }
  }
}
</script>

<style scoped>
.card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
h3 { color: #0f172a; margin-bottom: 4px; }
.category { color: #6b7280; font-size: 13px; margin-bottom: 8px; }
.price { font-size: 20px; font-weight: 700; color: #3B2FC6; margin-bottom: 12px; }
.actions { display: flex; gap: 8px; }
.btn-details { background-color: #e2e8f0; color: #475569; padding: 6px 14px; border-radius: 6px; text-decoration: none; font-size: 13px; }
.btn-add { background-color: #3B2FC6; color: white; border: none; padding: 6px 14px; border-radius: 6px; cursor: pointer; font-size: 13px; }
.btn-add:hover { background-color: #2d23a0; }
.btn-details:hover { background-color: #cbd5e1; }
</style>
