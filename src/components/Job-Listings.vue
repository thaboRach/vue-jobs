<script setup lang="ts">
import { defineProps, onMounted, reactive } from 'vue';
import { RouterLink } from 'vue-router';
// @ts-expect-error package does not have types
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';

import JobListing from '@/components/Job-Listing.vue';
import type { Job } from '@/types/job';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const state = reactive<{ jobs: Job[]; isLoading: boolean }>({
  jobs: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get('/api/jobs');

    state.jobs = response.data;
  } catch (error) {
    console.error(error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="px-4 py-10 bg-blue-50">
    <div class="m-auto container-xl lg:container">
      <h2 class="text-3xl font-bold text-center text-green-500">Browse jobs</h2>
      <!-- Show loading spinner while loading -->
      <div v-if="state.isLoading" class="text-center text-gray-500">
        <PulseLoader />
      </div>
      <!-- Show job listing when done loading -->
      <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <JobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="max-w-lg px-6 m-auto my-10">
    <RouterLink
      to="/jobs"
      class="block px-6 py-4 text-center text-white bg-black rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
