<template>
    <div>
      <h1>{{ review.title }}</h1>
      <p>{{ review.content }}</p>
    </div>
  </template>
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        review: {}
      };
    },
    async mounted() {
      this.fetchReview();
    },
    methods: {
      async fetchReview() {
        try {
          const response = await fetch(`https://your-pantheon-site.com/wp-json/wp/v2/review/${this.id}`);
          this.review = await response.json();
        } catch (error) {
          console.error('Error fetching review:', error);
        }
      }
    }
  };
  </script>
  