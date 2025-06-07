<style scoped>
#roadmap {
  height: 19rem;
  width: 95%;
  margin: 1rem auto;
  border-radius: 0.5rem;
  overflow: hidden;
  box-sizing: border-box;
  transition: 1s;
}
h3 {
  color: wheat;
  text-shadow:
    0px 0px 10px black,
    0px 0px 10px black,
    0px 0px 10px black,
    0px 0px 10px black;
  width: 100%;
  cursor: pointer;
}
.road {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-height: 80rem;
}
.road .sts {
  background-image: url(/img/parchment-anunce.png);
  background-size: cover;
  padding: 2rem 0.6rem 0.5rem 0.6rem;
  height: 100%;
}
.road .sts p {
  font-size: 1.5rem;
}
/*barra de progreso de cada sts*/
.road input[type='range'] {
  initial-value: 0;
}
.road .bar {
  width: 100%;
  height: 0.5rem;
  border-radius: 1rem;
  background-color: rebeccapurple;
}
.road .bar::-moz-range-thumb {
  background: transparent;
  display: none;
  border: none;
}
.road .bar::-webkit-slider-thumb {
  background: transparent;
  display: none;
  border: none;
}
.road .bar::-moz-range-progress {
  background: rgb(113, 143, 69);
  height: 100%;
  border-radius: 1rem;
}
.road .bar::-webkit-slider-thumb {
  background: rgb(113, 143, 69);
  height: 100%;
  border-radius: 1rem;
}
</style>

<template>
  <section @click="roadmapOpen" id="roadmap" v-bind:style="roadmapStyles">
    <h3>Roadmap</h3>
    <div class="road" id="road">
      <div class="sts">
        <p>Web Status</p>
        <label for="bar1">
          <input
            type="range"
            class="bar"
            :value="webStatus"
            id="bar1"
            min="0"
            max="100"
            step="1"
            disabled
          />
        </label>
        <ul class="list">
          <li>
            <label for="web1"><input type="checkbox" id="web1" disabled checked />Design</label>
          </li>
          <li>
            <label for="web2"><input type="checkbox" id="web2" disabled />Content</label>
          </li>
          <li>
            <label for="web3"><input type="checkbox" id="web3" disabled />Themes</label>
          </li>
          <li>
            <label for="web4"><input type="checkbox" id="web4" disabled />Functions</label>
          </li>
          <li>
            <label for="web5"><input type="checkbox" id="web5" disabled />Tools</label>
          </li>
          <li>
            <label for="web6"><input type="checkbox" id="web6" disabled />Compatibility</label>
          </li>
          <li>
            <label for="web7"><input type="checkbox" id="web7" disabled />Integrations</label>
          </li>
          <li>
            <label for="web8"><input type="checkbox" id="web8" disabled />Plug-in</label>
          </li>
        </ul>
      </div>
      <div class="sts">
        <p>App Status</p>
        <label for="bar2">
          <input type="range" class="bar" :value="appStatus" id="bar2" disabled />
        </label>
        <ul class="list">
          <li>
            <label for="app1"><input type="checkbox" id="app1" disabled checked />Design</label>
          </li>
          <li>
            <label for="app2"><input type="checkbox" id="app2" disabled />Content</label>
          </li>
          <li>
            <label for="app3"><input type="checkbox" id="app3" disabled />Themes</label>
          </li>
          <li>
            <label for="app4"><input type="checkbox" id="app4" disabled />Functions</label>
          </li>
          <li>
            <label for="app5"><input type="checkbox" id="app5" disabled />Tools</label>
          </li>
          <li>
            <label for="app6"><input type="checkbox" id="app6" disabled />Android</label>
          </li>
          <li>
            <label for="app7"><input type="checkbox" id="app7" disabled />IOS</label>
          </li>
          <li>
            <label for="app8"><input type="checkbox" id="app8" disabled />Desktop</label>
          </li>
        </ul>
      </div>
      <div class="sts">
        <p>Dice Roller</p>
        <label for="bar3">
          <input type="range" class="bar" :value="diceStatus" id="bar3" disabled />
        </label>
        <ul class="list">
          <li>
            <label for="dice1"><input type="checkbox" id="dice1" disabled />Mechanism</label>
          </li>
          <li>
            <label for="dice2"><input type="checkbox" id="dice2" disabled />Buff edit</label>
          </li>
          <li>
            <label for="dice3"><input type="checkbox" id="dice3" disabled />Roll story</label>
          </li>
          <li>
            <label for="dice4"><input type="checkbox" id="dice4" disabled />Share roll</label>
          </li>
          <li>
            <label for="dice5"><input type="checkbox" id="dice5" disabled />Theme</label>
          </li>
          <li>
            <label for="dice6"><input type="checkbox" id="dice6" disabled />Unity 3D</label>
          </li>
          <li>
            <label for="dice7"><input type="checkbox" id="dice7" disabled />In table</label>
          </li>
        </ul>
      </div>
      <div class="sts">
        <p>Pj Sheet</p>
        <label for="bar4">
          <input type="range" class="bar" :value="pjStatus" id="bar4" disabled />
        </label>
        <ul class="list">
          <li>
            <label for="pj1"><input type="checkbox" id="pj1" disabled checked />Design</label>
          </li>
          <li>
            <label for="pj2"><input type="checkbox" id="pj2" disabled checked />Interactive</label>
          </li>
          <li>
            <label for="pj3"><input type="checkbox" id="pj3" disabled checked />Editable</label>
          </li>
          <li>
            <label for="pj4"><input type="checkbox" id="pj4" disabled />Tool linked</label>
          </li>
          <li>
            <label for="pj5"><input type="checkbox" id="pj5" disabled />Miniature</label>
          </li>
          <li>
            <label for="pj6"><input type="checkbox" id="pj6" disabled />Profile</label>
          </li>
        </ul>
      </div>
      <div class="sts">
        <p>Community</p>
        <label for="bar5">
          <input type="range" class="bar" :value="communityStatus" id="bar5" disabled />
        </label>
        <ul class="list">
          <li>
            <label for="com1"><input type="checkbox" id="com1" disabled />Developers</label>
          </li>
          <li>
            <label for="com2"><input type="checkbox" id="com2" disabled />Patrons</label>
          </li>
          <li>
            <label for="com3"><input type="checkbox" id="com3" disabled />Moderators</label>
          </li>
          <li>
            <label for="com4"><input type="checkbox" id="com4" disabled />Followers</label>
          </li>
          <li>
            <label for="com5"><input type="checkbox" id="com5" disabled />Intranet</label>
          </li>
          <li>
            <label for="com6"><input type="checkbox" id="com6" disabled />Social Networks</label>
          </li>
        </ul>
      </div>
      <div class="sts">
        <p>Translation</p>
        <label for="bar6">
          <input type="range" class="bar" :value="translationStatus" id="bar6" disabled />
        </label>
        <ul class="list">
          <li>
            <label for="trans1"
              ><input type="checkbox" id="trans1" disabled checked />English</label
            >
          </li>
          <li>
            <label for="trans2"><input type="checkbox" id="trans2" disabled />Spanish</label>
          </li>
          <li>
            <label for="trans3"><input type="checkbox" id="trans3" disabled />French</label>
          </li>
          <li>
            <label for="trans4"><input type="checkbox" id="trans4" disabled />German</label>
          </li>
          <li>
            <label for="trans5"><input type="checkbox" id="trans5" disabled />Italian</label>
          </li>
          <li>
            <label for="trans6"><input type="checkbox" id="trans6" disabled />Chinese</label>
          </li>
        </ul>
      </div>
      <div class="sts">
        <p>Loot Table</p>
        <label for="bar7">
          <input type="range" class="bar" :value="lootStatus" id="bar7" disabled />
        </label>
        <ul class="list">
          <li>
            <label for="loot1"><input type="checkbox" id="loot1" disabled />Mechanism</label>
          </li>
          <li>
            <label for="loot2"><input type="checkbox" id="loot2" disabled />Value gradient</label>
          </li>
          <li>
            <label for="loot3"><input type="checkbox" id="loot3" disabled />Creation</label>
          </li>
          <li>
            <label for="loot4"><input type="checkbox" id="loot4" disabled />Libraries</label>
          </li>
          <li>
            <label for="loot5"><input type="checkbox" id="loot5" disabled />Animation</label>
          </li>
        </ul>
      </div>
      <div class="sts">
        <p>Encyclopedia</p>
        <label for="bar8">
          <input type="range" class="bar" :value="encyclopediaStatus" id="bar8" disabled />
        </label>
        <ul class="list">
          <li>
            <label for="enc1"><input type="checkbox" id="enc1" disabled />Templates</label>
          </li>
          <li>
            <label for="enc2"><input type="checkbox" id="enc2" disabled />Pictures</label>
          </li>
          <li>
            <label for="enc3"><input type="checkbox" id="enc3" disabled />Interactive</label>
          </li>
          <li>
            <label for="enc4"><input type="checkbox" id="enc4" disabled />Libraries</label>
          </li>
          <li>
            <label for="enc5"><input type="checkbox" id="enc5" disabled />Decoration</label>
          </li>
        </ul>
      </div>
      <div class="sts">
        <p>Map Status</p>
        <label for="bar9">
          <input type="range" class="bar" :value="mapStatus" id="bar9" disabled />
        </label>
        <ul class="list">
          <li>
            <label for="map1"><input type="checkbox" id="map1" disabled />Map plans</label>
          </li>
          <li>
            <label for="map2"><input type="checkbox" id="map2" disabled />Navigable</label>
          </li>
          <li>
            <label for="map3"><input type="checkbox" id="map3" disabled />Interactive</label>
          </li>
          <li>
            <label for="map4"><input type="checkbox" id="map4" disabled />Layers</label>
          </li>
          <li>
            <label for="map5"><input type="checkbox" id="map5" disabled />Jurney calc</label>
          </li>
        </ul>
      </div>
      <div class="sts">
        <p>Fundation</p>
        <label for="bar10">
          <input type="range" class="bar" :value="fundationStatus" id="bar10" disabled />
        </label>
        <ul class="list">
          <li>
            <label for="fund1"
              ><input type="checkbox" id="fund1" disabled /><a href="#">Patreon</a></label
            >
          </li>
          <li>
            <label for="fund2"
              ><input type="checkbox" id="fund2" disabled /><a href="#">Kickstarter</a></label
            >
          </li>
          <li>
            <label for="fund3"
              ><input type="checkbox" id="fund3" disabled /><a href="#">Donations</a></label
            >
          </li>
        </ul>
      </div>
      <div class="sts">
        <p>Game Table</p>
        <label for="bar11">
          <input type="range" class="bar" :value="gameStatus" id="bar11" disabled />
        </label>
        <ul class="list">
          <li>
            <label for="game1"><input type="checkbox" id="game1" disabled />aaaa</label>
          </li>
          <li>
            <label for="game2"><input type="checkbox" id="game2" disabled />aaaa</label>
          </li>
          <li>
            <label for="game3"><input type="checkbox" id="game3" disabled />aaaa</label>
          </li>
          <li>
            <label for="game4"><input type="checkbox" id="game4" disabled />aaaa</label>
          </li>
          <li>
            <label for="game5"><input type="checkbox" id="game5" disabled />aaaa</label>
          </li>
          <li>
            <label for="game6"><input type="checkbox" id="game6" disabled />aaaa</label>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const webStatus = ref(0)
const appStatus = ref(0)
const diceStatus = ref(0)
const pjStatus = ref(0)
const communityStatus = ref(0)
const translationStatus = ref(0)
const lootStatus = ref(0)
const encyclopediaStatus = ref(0)
const mapStatus = ref(0)
const fundationStatus = ref(0)
const gameStatus = ref(0)

// Función para calcular el porcentaje
const progression = (checkedCount, totalItems) => {
  return (checkedCount / totalItems) * 100
}

// Reemplazar la función countChecked actual con:
const countChecked = (category) => {
  const checkboxes = document.querySelectorAll(`input[id^="${category}"]`)
  return Array.from(checkboxes).filter((checkbox) => checkbox.checked).length
}

onMounted(() => {
  // Contar checkboxes marcados al cargar el componente
  webStatus.value = progression(countChecked('web'), 8)
  appStatus.value = progression(countChecked('app'), 8)
  diceStatus.value = progression(countChecked('dice'), 7)
  pjStatus.value = progression(countChecked('pj'), 6)
  communityStatus.value = progression(countChecked('com'), 6)
  translationStatus.value = progression(countChecked('trans'), 6)
  lootStatus.value = progression(countChecked('loot'), 5)
  encyclopediaStatus.value = progression(countChecked('enc'), 5)
  mapStatus.value = progression(countChecked('map'), 5)
  fundationStatus.value = progression(countChecked('fund'), 3)
  gameStatus.value = progression(countChecked('game'), 6)
})

const props = defineProps({
  roadmapClick: {
    type: Function,
    required: true,
  },
})

const isOpen = ref(false)
const roadmapOpen = () => {
  isOpen.value = !isOpen.value
  props.roadmapClick()
}

const roadmapStyles = computed(() => ({
  height: isOpen.value ? '44rem' : '19rem',
  overflow: isOpen.value ? 'scroll' : 'hidden',
}))
</script>
