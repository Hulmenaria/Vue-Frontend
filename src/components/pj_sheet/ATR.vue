<style scoped>
@import '../../assets/sheet.css';

form {
  background-size: 205% 102%;
  background-position: left 0.8rem;
  position: absolute;
  top: 4rem;
  width: 100vw;
  height: 93%;
  z-index: 15;
}
section {
  display: flex;
  flex-wrap: wrap;
  margin: 3rem 0;
  padding: 0 0.5rem;
  box-sizing: border-box;
  overflow: scroll;
}
.points {
  width: 50%;
  max-height: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.4rem;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0.5rem 0;
  cursor: pointer;
  transition: 2s;
}
.expanded .points {
  max-height: 50rem;
}
.expand-btn {
  background-color: transparent;
  height: 3rem;
  padding: 1rem;
  margin: 2rem auto;
  line-height: 0rem;
  border-width: 20px;
  border-style: solid;
  border-image: url(/decor/frame.png) 100 100 stretch;
  cursor: pointer;
}
.points label {
  width: 2.5rem;
}
.points label input {
  margin: 0rem;
}
.cap input {
  border: dashed;
}
.points .buf {
  width: 2.8rem;
}
.points .buf input {
  width: 2.8rem;
}
.points .dt {
  font-size: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.dt p {
  width: 2rem;
  text-align: center;
  align-content: center;
}
section .row-3 {
  flex-wrap: nowrap;
}
.atrPoints {
  position: sticky;
  top: 0rem;
  margin: 0 40%;
  border-width: 20px;
  border-style: solid;
  border-image: url(/decor/frame.png) 100 100 stretch;
  background-image: url(/img/parchment.png);
  background-size: 400% 400%;
  background-repeat: no-repeat;
  background-position: center;
}
.especial {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.4rem;
  box-sizing: border-box;
}
.luck,
.psi,
.esp {
  margin: 0;
  width: 100%;
}

section .especial .luck label {
  width: unset;
}
section .especial .luck select {
  width: 6rem;
  margin: 0;
}
.reg {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.reg .buf {
  width: 5rem;
}
.reg select {
  width: 8rem;
}
.ill {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.ill input[type='number'] {
  width: 2rem;
  border: none;
  font-size: 2rem;
  margin: 0;
}
.ill img {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: -0.8rem;
  padding: 0.1rem;
  border: none;
  overflow: hidden;
}
.ill .wound {
  width: 10rem;
}
.ill .btn-down,
.ill .btn-up {
  background: transparent;
  height: 2rem;
  width: 2rem;
  border: none;
  position: relative;
  cursor: pointer;
}
.ill .btn-down::before,
.ill .btn-up::before {
  content: '';
  background-image: url(/selector/arrow.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.ill .btn-up::before {
  transform: rotate(-90deg);
}
.ill .btn-down::before {
  transform: rotate(90deg);
}
.deity {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.deity p {
  width: 100%;
  text-align: center;
}
.deity select {
  width: 7rem;
}
.deity input[type='text'] {
  width: 14.5rem;
}
.deity input[type='number'] {
  width: 2.5rem;
}
.deity label .dev {
  width: 4rem;
}

.deity input[type='range'] {
  width: 22rem;
  border: none;
}
.deity input[type='range']::-moz-range-track {
  background: linear-gradient(to right, #4c95af, #f1fc15);
  height: 1.7rem;
  border-radius: 1rem;
  border: 2px inset var(--bgLatte);
}
.deity input[type='range']::-moz-range-thumb {
  width: 3rem;
  height: 3rem;
  background: transparent;
  background-image: url(/selector/selector.svg);
  background-size: cover;
  border: none;
  border-radius: 50%;
}
.karma {
  text-align: center;
}
.karma input[type='range'] {
  height: 4rem;
  width: 18rem;
  border: none;
}
.karma input[type='range']::-moz-range-track {
  background: linear-gradient(to right, #4caf50, #f44336);
  height: 1.7rem;
  border-radius: 1rem;
  border: 2px inset var(--bgLatte);
}
.karma input[type='range']::-moz-range-thumb {
  width: 3rem;
  height: 3rem;
  background: transparent;
  background-image: url(/selector/selector.svg);
  background-size: cover;
  border: none;
  border-radius: 50%;
}
</style>

<template>
  <form @submit.prevent>
    <section :class="{ expanded: isExpanded }">
      <div class="row-3">
        <label> Lvl <input type="number" min="1" v-model="store.sheetData.atr.level" /> </label>
        <label>
          E.P.
          <input
            type="number"
            min="1"
            v-model="store.sheetData.atr.xpInsert"
            @keyup.enter="xpUpdate"
          />
        </label>
        <label>
          X.P.<input type="number" min="1" :value="store.sheetData.atr.xpReach" readonly />
        </label>
      </div>
      <p class="atrPoints" v-if="store.sheetData.atr.atrPoints > 0">
        {{ store.sheetData.atr.atrPoints }}
      </p>
      <div class="con points">
        <p
          :class="{ disabled: store.sheetData.atr.capCon == store.sheetData.atr.attributes.con }"
          @click="addPoint('con')"
        >
          Con
        </p>
        <label>
          <input type="number" v-model="store.sheetData.atr.attributes.con" />
        </label>
        <label class="cap"> / <input type="number" v-model="store.sheetData.atr.capCon" /> </label>
        <label class="buf">
          <input type="number" v-model="store.sheetData.atr.plusCon" />
        </label>
        <div class="dt">
          <p @click="addDower('agil')">Agil</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.agil" />
          </label>
          <label class="cap">
            /<input type="number" v-model="store.sheetData.atr.capAgil" />
          </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusAgil" />
          </label>
          <p @click="addDower('end')">End</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.end" />
          </label>
          <label class="cap"> /<input type="number" v-model="store.sheetData.atr.capEnd" /> </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusEnd" />
          </label>
          <p @click="addDower('strg')">Strg</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.strg" />
          </label>
          <label class="cap">
            /<input type="number" v-model="store.sheetData.atr.capStrg" />
          </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusStrg" />
          </label>
          <p @click="addDower('rap')">Rap</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.rap" />
          </label>
          <label class="cap"> /<input type="number" v-model="store.sheetData.atr.capRap" /> </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusRap" />
          </label>
          <p @click="addDower('ref')">Ref</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.ref" />
          </label>
          <label class="cap"> /<input type="number" v-model="store.sheetData.atr.capRef" /> </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusRef" />
          </label>
          <p @click="addDower('spd')">Spd</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.spd" />
          </label>
          <label class="cap"> /<input type="number" v-model="store.sheetData.atr.capSpd" /> </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusSpd" />
          </label>
        </div>
      </div>
      <div class="int points">
        <p
          :class="{ disabled: store.sheetData.atr.capInt == store.sheetData.atr.attributes.int }"
          @click="addPoint('int')"
        >
          Int
        </p>
        <label>
          <input type="number" v-model="store.sheetData.atr.attributes.int" />
        </label>
        <label class="cap"> /<input type="number" v-model="store.sheetData.atr.capInt" /> </label>
        <label class="buf">
          <input type="number" v-model="store.sheetData.atr.plusInt" />
        </label>
        <div class="dt">
          <p @click="addDower('clev')">Clev</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.clev" />
          </label>
          <label class="cap">
            /<input type="number" v-model="store.sheetData.atr.capClev" />
          </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusClev" />
          </label>
          <p @click="addDower('conc')">Conc</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.conc" />
          </label>
          <label class="cap">
            /<input type="number" v-model="store.sheetData.atr.capConc" />
          </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusConc" />
          </label>
          <p @click="addDower('ing')">Ing</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.ing" />
          </label>
          <label class="cap"> /<input type="number" v-model="store.sheetData.atr.capIng" /> </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusIng" />
          </label>
          <p @click="addDower('wisd')">Wisd</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.wisd" />
          </label>
          <label class="cap">
            /<input type="number" v-model="store.sheetData.atr.capWisd" />
          </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusWisd" />
          </label>
          <p @click="addDower('tem')">Tem</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.tem" />
          </label>
          <label class="cap"> /<input type="number" v-model="store.sheetData.atr.capTem" /> </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusTem" />
          </label>
          <p @click="addDower('will')">Will</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.will" />
          </label>
          <label class="cap">
            /<input type="number" v-model="store.sheetData.atr.capWill" />
          </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusWill" />
          </label>
        </div>
      </div>
      <div class="per points">
        <p
          :class="{ disabled: store.sheetData.atr.capPer == store.sheetData.atr.attributes.per }"
          @click="addPoint('per')"
        >
          Per
        </p>
        <label>
          <input type="number" v-model="store.sheetData.atr.attributes.per" />
        </label>
        <label class="cap"> /<input type="number" v-model="store.sheetData.atr.capPer" /> </label>
        <label class="buf">
          <input type="number" v-model="store.sheetData.atr.plusPer" />
        </label>
        <div class="dt">
          <p @click="addDower('emp')">Emp</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.emp" />
          </label>
          <label class="cap"> /<input type="number" v-model="store.sheetData.atr.capEmp" /> </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusEmp" />
          </label>
          <p @click="addDower('seek')">Seek</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.seek" />
          </label>
          <label class="cap">
            /<input type="number" v-model="store.sheetData.atr.capSeek" />
          </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusSeek" />
          </label>
          <p @click="addDower('dizz')">Dizz</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.dizz" />
          </label>
          <label class="cap">
            /<input type="number" v-model="store.sheetData.atr.capDizz" />
          </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusDizz" />
          </label>
          <p @click="addDower('sigh')">Sigh</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.sigh" />
          </label>
          <label class="cap">
            /<input type="number" v-model="store.sheetData.atr.capSigh" />
          </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusSigh" />
          </label>
        </div>
      </div>
      <div class="car points">
        <p
          :class="{ disabled: store.sheetData.atr.capCar == store.sheetData.atr.attributes.car }"
          @click="addPoint('car')"
        >
          Car
        </p>
        <label>
          <input type="number" v-model="store.sheetData.atr.attributes.car" />
        </label>
        <label class="cap"> /<input type="number" v-model="store.sheetData.atr.capCar" /> </label>
        <label class="buf">
          <input type="number" v-model="store.sheetData.atr.plusCar" />
        </label>
        <div class="dt">
          <p @click="addDower('pret')">Pret</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.pret" />
          </label>
          <label class="cap">
            /<input type="number" v-model="store.sheetData.atr.capPret" />
          </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusPret" />
          </label>
          <p @click="addDower('man')">Man</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.man" />
          </label>
          <label class="cap"> /<input type="number" v-model="store.sheetData.atr.capMan" /> </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusMan" />
          </label>
          <p @click="addDower('sec')">Sec</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.sec" />
          </label>
          <label class="cap"> /<input type="number" v-model="store.sheetData.atr.capSec" /> </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusSec" />
          </label>
          <p @click="addDower('ac')">Ac</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.ac" />
          </label>
          <label class="cap"> /<input type="number" v-model="store.sheetData.atr.capAc" /> </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusAc" />
          </label>
        </div>
      </div>
      <div class="hab points">
        <p
          :class="{ disabled: store.sheetData.atr.capHab == store.sheetData.atr.attributes.hab }"
          @click="addPoint('hab')"
        >
          Hab
        </p>
        <label>
          <input type="number" v-model="store.sheetData.atr.attributes.hab" />
        </label>
        <label class="cap"> /<input type="number" v-model="store.sheetData.atr.capHab" /> </label>
        <label class="buf">
          <input type="number" v-model="store.sheetData.atr.plusHab" />
        </label>
        <div class="dt">
          <p @click="addDower('art')">Art</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.art" />
          </label>
          <label class="cap"> /<input type="number" v-model="store.sheetData.atr.capArt" /> </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusArt" />
          </label>
          <p @click="addDower('des')">Des</p>
          <label>
            <input type="number" v-model="store.sheetData.atr.dower.des" />
          </label>
          <label class="cap"> /<input type="number" v-model="store.sheetData.atr.capDes" /> </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusDes" />
          </label>
        </div>
      </div>
      <div class="especial">
        <div class="luck points">
          <p>Lk</p>
          <label class="luck">
            <select v-model="store.sheetData.atr.luckSelect">
              <option>Choose</option>
              <option>Lucky</option>
              <option>Fortunate</option>
              <option>Hoodoo</option>
              <option>Unlucky</option>
            </select>
          </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.luck" />
          </label>
        </div>
        <div class="psi points">
          <p
            :class="{ disabled: store.sheetData.atr.capPsi == store.sheetData.atr.attributes.psi }"
            @click="addPoint('psi')"
          >
            Psi
          </p>
          <label>
            <input type="number" v-model="store.sheetData.atr.attributes.psi" />
          </label>
          <label class="cap"> /<input type="number" v-model="store.sheetData.atr.capPsi" /> </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusPsi" />
          </label>
        </div>
        <div class="esp points">
          <p
            :class="{ disabled: store.sheetData.atr.capEsp == store.sheetData.atr.attributes.esp }"
            @click="addPoint('esp')"
          >
            Esp
          </p>
          <label>
            <input type="number" v-model="store.sheetData.atr.attributes.esp" />
          </label>
          <label class="cap"> /<input type="number" v-model="store.sheetData.atr.capEsp" /> </label>
          <label class="buf">
            <input type="number" v-model="store.sheetData.atr.plusEsp" />
          </label>
        </div>
      </div>
      <div class="reg">
        <p>Reg</p>
        <label class="buf">
          <input type="number" v-model="store.sheetData.atr.plusReg" />
        </label>
        <label>
          <select v-model="store.sheetData.atr.regSelect">
            <option>None</option>
            <option>Superficial</option>
            <option>Scarred</option>
            <option>Visceral</option>
            <option>Structural</option>
            <option>Integral</option>
            <option>Hydra</option>
          </select>
        </label>
      </div>
      <div class="ill" v-for="(wound, index) in store.sheetData.atr.wounds" :key="wound.id">
        <img :src="foundImage(wound.name)" :alt="wound.name" />
        <label class="wound">
          <input type="text" v-model="wound.name" @blur="newWound(index)" />
        </label>
        <button type="button" class="btn-down" @click="downGrade(wound)"></button>
        <label>
          <input type="number" v-model="wound.stadium" readonly />
        </label>
        <button type="button" class="btn-up" @click="upGrade(wound)"></button>
        <p>G</p>
        <label class="grade">
          <input type="number" v-model="wound.grade" min="0" readonly />
        </label>
      </div>
      <div class="deity">
        <p>Deity</p>
        <label>
          <select v-model="store.sheetData.atr.deityType">
            <option>Heritage</option>
            <option>Idolic</option>
            <option>Elemental</option>
            <option>Primordial</option>
            <option>Elder</option>
            <option>Eldrich</option>
          </select>
        </label>
        <label>
          <input
            type="text"
            v-model="store.sheetData.atr.deityName"
            @input="store.updateDeityName"
          />
        </label>
        <label>
          D.P.<input type="number" v-model="store.sheetData.atr.dp" @input="store.updateDP" />
        </label>
        <label>
          Devotion<input
            type="number"
            class="dev"
            v-model="store.sheetData.atr.devInsert"
            @keyup.enter="devUpdate"
          />
        </label>
        <label>
          <input type="range" :value="store.sheetData.atr.devotion" max="100" disabled />
        </label>
      </div>
      <div class="karma">
        <p>Karma</p>
        <label class="karma">
          <span>Good</span>
          <input type="range" step="10" v-model="store.sheetData.atr.karmaGood" />
        </label>
        <label class="karma">
          <span>Evil</span>
          <input type="range" step="10" v-model="store.sheetData.atr.karmaEvil" />
        </label>
      </div>
      <button type="button" @click="openStats" class="expand-btn">
        View {{ isExpanded ? 'shorten' : 'expanded' }} stats
      </button>
    </section>
  </form>
</template>

<script setup>
import { watch, onMounted, ref } from 'vue'
import { useSheetDataStore, dowerMapping } from '@/stores/sheetDataStore'
const store = useSheetDataStore()
import { markMapStore } from '@/stores/markMapStore'
const markMap = markMapStore()

const isExpanded = ref(false)
const openStats = () => {
  isExpanded.value = !isExpanded.value
}

// Convierte los EP en Nv
const xpUpdate = (event) => {
  const inputValue = Number(event.target.value)
  const maxLvl = Number(store.sheetData.atr.level) * 10

  store.sheetData.atr.xpInsert = inputValue
  store.sheetData.atr.xpReach = store.sheetData.atr.xpInsert + Number(store.sheetData.atr.xpReach)
  store.sheetData.atr.xpInsert = 0

  if (store.sheetData.atr.xpReach >= maxLvl) {
    store.sheetData.atr.level++
    store.sheetData.atr.xpReach -= maxLvl
  }
}

//Agrega 0.3 ATRp por nivel
watch(
  () => store.sheetData.atr.level,
  (newLevel, oldLevel) => {
    if (oldLevel) {
      const levelDifference = newLevel - oldLevel
      store.sheetData.atr.atrPoints = Number(
        (store.sheetData.atr.atrPoints + levelDifference * 0.3).toFixed(1),
      )
    } else {
      store.sheetData.atr.atrPoints = Number((newLevel * 0.3).toFixed(1))
    }
  },
)

// Distribuye los ATRp entre los ATR
const addPoint = (attributeName) => {
  if (store.sheetData.atr.atrPoints >= 0.1) {
    store.sheetData.atr.attributes[attributeName] = Number(
      (store.sheetData.atr.attributes[attributeName] + 0.1).toFixed(1),
    )
    store.sheetData.atr.atrPoints = Number((store.sheetData.atr.atrPoints - 0.1).toFixed(1))
  }
}

// Agrega DTp cada nv de ATR
const addDower = (dowerName) => {
  // convierte el mapa en un array claves,valor y busca la coincidencia del segundo elemento, por eso _,
  const attribute = Object.entries(dowerMapping).find(
    ([_, dowers]) => dowers.includes(dowerName),
    //obtiene la clave de la dt dada
  )?.[0]

  if (attribute && store.sheetData.dtPoints[attribute] > 0) {
    const currentSum = getDowerSum(attribute)
    const attributeValue = store.sheetData.atr.attributes[attribute]
    if (currentSum < attributeValue * 3) {
      store.sheetData.atr.dower[dowerName]++
      store.sheetData.dtPoints[attribute]--
    }
  }
}
// Calcula la suma de las DT en un ATR
const getDowerSum = (attribute) => {
  const dowers = dowerMapping[attribute] || []
  return dowers.reduce((sum, dowerName) => sum + store.sheetData.atr.dower[dowerName], 0)
}

// Observa que las DTp no superen el máximo de cada ATR
const watchAttributes = () => {
  Object.keys(store.sheetData.atr.attributes).forEach((atr) => {
    watch(
      () => store.sheetData.atr.attributes[atr],
      (newValue, oldValue) => {
        const newLvl = Math.floor(newValue)
        const oldLvl = Math.floor(oldValue || 0)

        if (newLvl > oldLvl && getDowerSum(atr) < newLvl * 3) {
          store.sheetData.dtPoints[atr] += (newLvl - oldLvl) * 3
        }
      },
    )
  })
}

//maneja la devoción
const devUpdate = (event) => {
  const inputValue = Number(event.target.value) || 0
  store.sheetData.atr.devInsert = inputValue
  store.sheetData.atr.devotion += inputValue
  store.sheetData.atr.devInsert = ''

  if (store.sheetData.atr.devotion >= 100) {
    store.sheetData.atr.dp++
    store.sheetData.atr.devotion = store.sheetData.atr.devotion - 100
  }
}

// Agrega y borra las heridas
const newWound = async (index) => {
  if (
    store.sheetData.atr.wounds[index].name === '' &&
    store.sheetData.atr.wounds.length > 1 &&
    index !== store.sheetData.atr.wounds.length - 1
  ) {
    store.sheetData.atr.wounds.splice(index, 1)
  } else if (
    index === store.sheetData.atr.wounds.length - 1 &&
    store.sheetData.atr.wounds[index].name !== ''
  ) {
    const newId = store.sheetData.atr.wounds.length + 1
    store.sheetData.atr.wounds.push({ id: newId, name: '', stadium: 0, grade: 0 })
  }
}

//sube y baja el valor de las heridas
const upGrade = (wound) => {
  wound.stadium++
  if (wound.stadium > 3) {
    wound.grade++
    wound.stadium = 1
  }
}

const downGrade = (wound) => {
  if (wound.stadium > 0) {
    wound.stadium--
  }
  if (wound.stadium < 1 && wound.grade > 0) {
    wound.grade--
    wound.stadium = 3
  }
}

const marks = ref([])

const foundImage = (name) => {
  const normalized = name.trim().toLowerCase()

  const match = Object.entries(markMap.markMap).find(([_, markData]) => {
    const allKeywords = [...markData.keywords.en, ...markData.keywords.es]
    return allKeywords.some((keyword) => normalized.includes(keyword))
  })

  if (match) {
    const [markId] = match
    const markImage = marks.value.find((mark) => mark.id === markId)
    if (markImage) {
      return markImage.image || '/icon/mark/mark-exclam.png'
    }
  }
  return normalized ? '/icon/mark/mark-exclam.png' : ''
}

//fetch para las marks de wound
const fetchImages = async () => {
  try {
    const response = await fetch('/collections/mark.json')
    if (!response.ok) {
      throw new Error('JSON not found')
    }
    const data = await response.json()
    marks.value = data.marks
    console.log('Marks loaded:', marks.value)
  } catch (err) {
    console.error('Error al cargar imágenes:', err)
    marks.value = []
  }
}

onMounted(() => {
  watchAttributes()
  fetchImages()
})
</script>
