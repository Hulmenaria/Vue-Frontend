<style scoped>
nav {
  width: 100%;
  height: 25rem;
  display: flex;
  align-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem 6rem;
  overflow: hidden;
  position: relative;
}
nav div [class*='menu'] {
  background-image: url(/src/assets/img/parchment-old.png);
  background-size: 100% 100%;
  height: 6rem;
  width: 16rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.shadow {
  transition: 1s;
  translate: -40%;
}
.shadow::before {
  background-image: url(/src/assets/img/parchment-old.png);
  background-size: 100% 100%;
  content: '';
  transform: translate(0.2rem, 0.2rem);
  filter: brightness(0);
  opacity: 0.8;
  position: absolute;
  width: 100%;
  height: 100%;
}
nav .left:hover {
  transform: translateX(6rem) !important;
}
nav .right:hover {
  transform: translateX(-6rem) !important;
}
nav .shadow .menu-left h2 {
  margin-left: 2rem;
  opacity: 0;
  transition: 1s;
}
nav .shadow .menu-right h2 {
  word-break: break-word;
  margin-right: 2.5rem;
  opacity: 0;
  transition: 1s;
}
nav .shadow:hover h2 {
  opacity: 1;
}
nav .shadow img {
  width: 5rem;
}
nav .shadow .menu-right img {
  margin-left: 0.5rem;
}
nav .shadow .menu-left img {
  margin-right: 0.5rem;
}
@media screen and (min-width: 400px) {
  .shadow {
    translate: 0%;
  }
}
</style>

<template>
  <nav>
    <div class="shadow left" :style="menuleft">
      <RouterLink to="/Sheet" class="menu-left">
        <h2>PJ Sheet</h2>
        <img src="@/assets/img/sheet.png" alt="Character sheet" />
      </RouterLink>
    </div>
    <div class="shadow left" :style="menuleft">
      <RouterLink to="/Talents" class="menu-left">
        <h2>Talents</h2>
        <img src="@/assets/img/logo.png" alt="Talents icon" />
      </RouterLink>
    </div>
    <div class="shadow left" :style="menuleft">
      <RouterLink to="/Loot" class="menu-left">
        <h2>Loot Table</h2>
        <img src="@/assets/img/chest.png" alt="Loot icon" />
      </RouterLink>
    </div>
    <div class="shadow right" :style="menuright">
      <RouterLink to="/Map" class="menu-right">
        <img src="@/assets/img/map.png" alt="Map icon" />
        <h2>Map</h2>
      </RouterLink>
    </div>
    <div class="shadow right" :style="menuright">
      <RouterLink to="/Hour" class="menu-right">
        <img src="@/assets/img/hourglass.png" alt="Hourglass icon" />
        <h2>Hour glass</h2>
      </RouterLink>
    </div>
    <div class="shadow right" :style="menuright">
      <RouterLink to="/Pedia" class="menu-right">
        <img src="@/assets/img/encyclop.png" alt="Encyclopedia icon" />
        <h2>Encyclo pedia</h2>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  isRoadmapOpen: {
    type: Boolean,
    required: true,
  },
})
const menuleft = computed(() => ({
  transform: props.isRoadmapOpen ? 'translateX(-60%)' : '',
}))
const menuright = computed(() => ({
  transform: props.isRoadmapOpen ? 'translateX(60%)' : '',
}))
</script>
