<template>
    <div class="container">
      <h1>Reviews</h1>
      <div class="input-group mb-3">
        <input type="text" v-model="searchQuery" @input="filterReviews" class="form-control" placeholder="Search reviews...">
      </div>
      <ul class="list-group">
        <li v-for="review in filteredReviews" :key="review.id" class="list-group-item">
          <router-link :to="{ name: 'review', params: { id: review.id }}">{{ review.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  
  <script>
  import { API_BASE_URL } from '@/config';

const response = await fetch(`${API_BASE_URL}/review`);
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const reviews = ref([]);
  
      onMounted(() => {
        fetchReviews();
      });
  
      const fetchReviews = async () => {
        try {
          const response = await fetch('https://live-reviewmattcms.pantheonsite.io/wp-json/wp/v2');
          reviews.value = await response.json();
        } catch (error) {
          console.error('Error fetching reviews:', error);
        }
      };
  
      return {
        reviews,
        fetchReviews,
      };
    },
  };
  </script>
  
  