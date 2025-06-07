<style scoped>
nav {
  width: 100%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem 0.5rem;
  overflow: hidden;
}
nav div .menu {
  background-image: url(/img/parchment-old.png);
  background-size: 100% 100%;
  width: 16rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.5s;
}
.left {
  transform: translate(-50%);
}
.left:hover {
  transform: translateX(0rem) !important;
}
.right:hover {
  transform: translateX(-8rem) !important;
}
.menu img {
  width: 5rem;
}
.right img {
  margin-left: 0.5rem;
}
.left img {
  margin-right: 0.5rem;
}
.menu h2 {
  text-align: center;
  opacity: 0;
  transition: 1s;
}
.right h2 {
  margin-right: 1.5rem;
}
.left h2 {
  margin-left: 1.5rem;
}
.menu:hover h2 {
  opacity: 1;
}

@media screen and (min-width: 400px) {
  .left {
    transform: translateX(0);
  }
}
</style>

<template>
  <nav>
    <div class="shadow-old left" :style="menuleft">
      <RouterLink to="/Sheet" class="menu">
        <h2>PJ Sheet</h2>
        <img src="/img/sheet.png" alt="Character sheet" />
      </RouterLink>
    </div>
    <div class="shadow-old left" :style="menuleft">
      <RouterLink to="/Talents" class="menu">
        <h2>Talents</h2>
        <img src="/img/logo.png" alt="Talents icon" />
      </RouterLink>
    </div>
    <div class="shadow-old left" :style="menuleft">
      <RouterLink to="/Loot" class="menu">
        <h2>Loot Table</h2>
        <img src="/img/chest.png" alt="Loot icon" />
      </RouterLink>
    </div>
    <div class="shadow-old right" :style="menuright">
      <RouterLink to="/Map" class="menu">
        <img src="/img/map.png" alt="Map icon" />
        <h2>Map</h2>
      </RouterLink>
    </div>
    <div class="shadow-old right" :style="menuright">
      <RouterLink to="/Hour" class="menu">
        <img src="/img/hourglass.png" alt="Hourglass icon" />
        <h2>Hourglass</h2>
      </RouterLink>
    </div>
    <div class="shadow-old right" :style="menuright">
      <RouterLink to="/Pedia" class="menu">
        <img src="/img/encyclop.png" alt="Encyclopedia icon" />
        <h2>Encyclopedia</h2>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  isRoadmapOpen: {
    type: Boolean,
    required: true,
  },
})
const menuleft = computed(() => ({
  transform: props.isRoadmapOpen ? 'translateX(-100%)' : '',
}))
const menuright = computed(() => ({
  transform: props.isRoadmapOpen ? 'translateX(50%)' : '',
}))
</script>
