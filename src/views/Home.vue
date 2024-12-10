<template>
    <div class="container">
      <h1>Reviews</h1>
      <div class="input-group mb-3">
        <input 
          type="text" 
          v-model="searchQuery" 
          class="form-control" 
          placeholder="Search reviews..."
        />
      </div>
      <ul class="list-group">
        <li 
          v-for="review in filteredReviews" 
          :key="review.id" 
          class="list-group-item"
        >
          <router-link :to="{ name: 'review', params: { id: review.id }}">
            {{ review.title.rendered }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, computed } from 'vue';
  
  export default {
    setup() {
      const reviews = ref([]);
      const searchQuery = ref('');
  
      const filteredReviews = computed(() => {
        return reviews.value.filter((review) =>
          review.title.rendered.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      });
  
      const fetchReviews = async () => {
        try {
          const response = await fetch('https://live-reviewmattcms.pantheonsite.io/wp-json/wp/v2/review');
          reviews.value = await response.json();
        } catch (error) {
          console.error('Error fetching reviews:', error);
        }
      };
  
      onMounted(() => {
        fetchReviews();
      });
  
      return {
        reviews,
        searchQuery,
        filteredReviews,
      };
    },
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  
  
  