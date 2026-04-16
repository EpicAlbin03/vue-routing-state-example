import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      { id: 1, name: "Wireless Headphones", price: 59.99, category: "Electronics", description: "Noise-cancelling over-ear headphones with 30h battery life." },
      { id: 2, name: "Running Shoes", price: 89.99, category: "Sports", description: "Lightweight trainers with responsive cushioning." },
      { id: 3, name: "Coffee Maker", price: 34.99, category: "Kitchen", description: "Single-serve drip coffee maker with auto shut-off." },
      { id: 4, name: "Notebook Set", price: 12.99, category: "Stationery", description: "Pack of 3 lined notebooks, 80 pages each." },
      { id: 5, name: "Yoga Mat", price: 24.99, category: "Sports", description: "Non-slip exercise mat, 6mm thick." },
      { id: 6, name: "Desk Lamp", price: 29.99, category: "Electronics", description: "LED desk lamp with adjustable brightness." }
    ]
  }),

  getters: {
    getById: (state) => (id) => {
      return state.products.find(p => p.id === id)
    }
  }
})
