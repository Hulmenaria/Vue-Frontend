<style scoped>
section > div {
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  text-align: center;
  flex-wrap: wrap;
  cursor: pointer;
  color: wheat;
}
div p {
  font-size: 1.5rem;
}
div img {
  height: 2rem;
}
div img,
div p,
select {
  text-shadow:
    0px 0px 10px black,
    0px 0px 10px black,
    0px 0px 10px black,
    0px 0px 10px black;
}
.name {
  width: 100%;
  font-size: 3rem;
}
.energy {
  display: flex;
  justify-content: space-evenly;
  color: wheat;
}
.energy p {
  padding: 0 1rem;
  border-radius: 25%;
}
.energy select {
  background: transparent;
  border: solid rgba(245, 222, 179, 0.4) 2px;
  border-radius: 25%;
  color: wheat;
  font-size: 1.5rem;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 12%;
  z-index: 1;
  cursor: pointer;
}

.dice img {
  background-image: url('/decor/frame.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 2.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
}
.dice > p {
  align-content: center;
  margin-left: -2rem;
}
.dice .ini {
  filter: brightness(0) invert(75%) sepia(100%) saturate(700%);
}
.dice .dmg {
  filter: brightness(0) invert(50%) sepia(50%) saturate(20000%);
}
.dice .arm {
  position: relative;
  height: 100%;
}
.dice .arm p {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 1.3rem;
}
.dots {
  width: 50vw;
  height: 0;
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  top: 1rem;
  left: 0rem;
  z-index: 10;
}
.dots img {
  height: 1.2rem;
  width: auto;
  margin: 0 0.3rem;
}
.hability {
  width: 100vw;
  height: 0;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: end;
  position: relative;
  top: 0.2rem;
  right: 0.6rem;
  z-index: 10;
}
.hability button {
  background: transparent;
  background-color: var(--bgCoffe);
  border-radius: 1rem;
  border: 2px inset var(--bgLatte);
  width: 5rem;
  padding: 0.2rem 0.1rem;
  margin: 0.2rem 0;
}

.store {
  background-color: var(--marron);
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
}
.store button {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid wheat;
  color: wheat;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  text-shadow: 0 0 5px black;
  transition: 0.3s ease;
}

.store button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.stadistSlide-enter-active,
.stadistSlide-leave-active {
  transition: 0.5s;
}
.stadistSlide-enter-from,
.stadistSlide-leave-to {
  transform: translateX(-25rem);
}

.atrSlide-enter-active,
.atrSlide-leave-active {
  transition: 0.5s;
}
.atrSlide-enter-from,
.atrSlide-leave-to {
  transform: translate(25rem);
}

.habSlide-enter-active,
.habSlide-leave-active {
  transition: 0.5s;
}
.habSlide-enter-from,
.habSlide-leave-to {
  transform: translate(25rem);
}
</style>

<template>
  <form @submit.prevent class="inv">
    <div class="overlay" v-if="isStadistOpen || isAtrOpen || isHabOpen" @click="handleClose"></div>
    <section>
      <div @click="openStad">
        <p class="name">{{ store.sheetData.std.name || 'Select a Name' }}</p>
        <p>{{ store.sheetData.std.race || 'Select a race' }}</p>
        <p>Lvl {{ store.sheetData.atr.level }}</p>
      </div>
      <div class="dice" @click="openAtr">
        <img src="/dice/white-D10-2.svg" alt="Damage" class="dmg" />
        <p>{{ dmgBon }} +3</p>
        <img src="/dice/white-D6-1.svg" alt="Initiative" class="ini" />
        <p>{{ iniBon }} +1</p>
        <div class="arm">
          <img src="/icon/item/shield-metal.png" alt="Armor" />
          <p>{{ armor }}</p>
        </div>
      </div>
      <div @click="openAtr">
        <p>{{ store.sheetData.atr.deityName }}</p>
        <img src="" alt="Deity" />
        <p>Destiny {{ store.sheetData.atr.dp }}</p>
      </div>
    </section>
    <div class="energy">
      <p class="res">Res: {{ store.sheetData.std.acRes }}</p>
      <select v-model="selectedEnergy">
        <option value="mistyc">Mistyc</option>
        <option value="inner">Inner</option>
        <option value="natural">Natural</option>
      </select>
      <p>{{ energy }}</p>
    </div>
    <div class="dots" v-if="uniqueWoundTypes.size > 0">
      <img v-for="type in uniqueWoundTypes" :key="type" :src="foundMark(type)" />
    </div>
    <div class="hability">
      <button @click="openHab">Ability</button>
      <button>Profession</button>
    </div>
    <Equip />
    <Inv />
    <transition name="stadistSlide">
      <Stadist v-if="isStadistOpen" />
    </transition>
    <transition name="atrSlide">
      <ATR v-if="isAtrOpen" />
    </transition>
    <transition name="habSlide">
      <Hab v-if="isHabOpen" />
    </transition>
    <div class="store">
      <button type="button" @click="saveSheet">Guardar</button>
      <button type="button" @click="loadSheet">Cargar</button>
    </div>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import Equip from '../components/pj_sheet/Equip.vue'
import Inv from '../components/pj_sheet/Inv.vue'
import Stadist from '@/components/pj_sheet/Stadist.vue'
import ATR from '../components/pj_sheet/ATR.vue'
import Hab from '@/components/pj_sheet/Hab.vue'
import { useSheetDataStore } from '@/stores/sheetDataStore'
const store = useSheetDataStore()
import { markMapStore } from '@/stores/markMapStore'
const markMap = markMapStore()

const uniqueWoundTypes = computed(() => {
  if (!store.sheetData.atr.wounds?.length) return new Set()
  const validWounds = store.sheetData.atr.wounds.filter((wound) => wound.name.trim() !== '')
  return new Set(validWounds.map((wound) => wound.type))
})

const foundMark = (type) => {
  return markMap.getMarkImage(type) || '/icon/mark/mark-exclam.png'
}

const isStadistOpen = ref(false)
const isAtrOpen = ref(false)
const isHabOpen = ref(false)

const openStad = () => {
  isStadistOpen.value = !isStadistOpen.value
}

const openAtr = () => {
  isAtrOpen.value = !isAtrOpen.value
}
const openHab = () => {
  isHabOpen.value = !isHabOpen.value
}

const handleClose = () => {
  isStadistOpen.value = false
  isAtrOpen.value = false
  isHabOpen.value = false
}

const saveSheet = async () => {
  if (!store.sheetData.std.name) {
    alert('Select a Name')
    return
  }
  try {
    await store.saveSheet(store.sheetData.std.name)
    alert(`"${store.sheetData.std.name}" sheet stored`)
  } catch (error) {
    alert('There was a problem saving data')
    console.error('Error saving sheet', error)
  }
}

const loadSheet = async () => {
  if (!store.sheetData.std.name) {
    alert('Please, select a Name')
    return
  }

  await store.loadSheet(store.sheetData.std.name)
  alert(`"${store.sheetData.std.name}" sheet loaded`)
}
</script>
