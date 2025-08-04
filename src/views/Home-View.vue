<script setup lang="ts">
import HeroSection from '@/components/Hero-Section.vue';
import HomeCards from '@/components/Home-Cards.vue';
import JobListings from '@/components/Job-Listings.vue';
</script>

<template>
  <HeroSection title="Test" />
  <HomeCards />
  <JobListings :limit="3" />
</template>
