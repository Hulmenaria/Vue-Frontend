<style scoped>
.roadmapClass {
  position: absolute;
  top: 55%;
  left: 50%;
  translate: -50%;
  transition: 1s;
}
.opened {
  top: 12%;
}
.footerClass {
  position: absolute;
  bottom: -12rem;
  width: 100vw;
}
</style>

<template>
  <div>
    <NavComponent :isRoadmapOpen="isRoadmapOpen"></NavComponent>
    <RoadmapComponent
      class="roadmapClass"
      :class="{ opened: isRoadmapOpen }"
      :roadmapClick="roadmapUp"
    ></RoadmapComponent>
    <FooterComponent class="footerClass"></FooterComponent>
  </div>
</template>

<script setup>
import NavComponent from '../components/NavComponent.vue'
import RoadmapComponent from '../components/RoadmapComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

import { ref } from 'vue'

const isRoadmapOpen = ref(false)

const roadmapUp = () => {
  isRoadmapOpen.value = !isRoadmapOpen.value
}
</script>
