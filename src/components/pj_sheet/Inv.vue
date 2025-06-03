<style scoped>
@import '../../assets/sheet.css';

form {
  background-size: 103% 109%;
}
section {
  background-image: url(/img/parchment.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.8);
}
form .pouch {
  background-image: url(/img/parchment-old.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  padding: 0.5rem;
}
.pouch p {
  width: 100%;
  font-size: 1.5rem;
}
.pouch label {
  height: 2.5rem;
  font-size: 1rem;
}
.pouch input {
  width: 3.5rem;
  border: 2px inset var(--bgLatte);
}
.pouch input[type='text'] {
  width: 2rem;
  border: 3px dotted;
  font-size: 1rem;
}
form section {
  height: 2.8rem;
  overflow: hidden;
  transition: 1s;
}
form section[class*='inv'] div:first-child {
  font-size: 2rem;
  height: 2.5rem;
  display: flex;
  justify-content: space-around;
}
.inv button {
  background: transparent;
  border-radius: 25%;
  cursor: pointer;
  border: 2px inset var(--bgLatte);
}
.inv p {
  cursor: pointer;
}
.inv button img {
  height: 2.5rem;
}
@media screen and (min-width: 400px) {
  .pouch {
    display: flex;
    justify-content: center;
  }
}
</style>

<template>
  <form>
    <div class="pouch">
      <p>Pouch:</p>
      <label>Cb<input type="number" name="cb" /></label>
      <label>Pt<input type="number" name="pt" /></label>
      <label>Or<input type="number" name="or" /></label>
      <label>Pl<input type="number" name="pl" /></label>
      <label><input type="text" name="coin1" /></label>
      <label><input type="number" name="coin1Cant" /></label>
      <label><input type="text" name="coin2" /></label>
      <label><input type="number" name="coin2Cant" /></label>
      <label><input type="text" name="coin3" /></label>
      <label><input type="number" name="coin3Cant" /></label>
    </div>
    <section class="inv" id="inv" :style="bag1Style">
      <div>
        <p @click="openBag('bag1')">{{ bags.bag1.name.value }} {{ bags.bag1.type.value }}</p>
        <button type="button" @click="showDialog('bag1')">
          <img src="/icon/item/pouch.png" alt="Bag img" />
        </button>
      </div>
      <dialog id="bag1">
        <p>{{ bags.bag1.name.value }} {{ bags.bag1.type.value }}</p>
        <div>
          <label class="box-name"
            ><input
              type="text"
              name="bag-name"
              :value="bags.bag1.name.value"
              @input="(e) => updateBag('bag1', 'name', e)"
          /></label>
          <label class="box-text"
            >t<input
              type="text"
              name="bag-t"
              :value="bags.bag1.type.value"
              @input="(e) => updateBag('bag1', 'type', e)"
          /></label>
          <label class="box-weight"
            >Mx<input
              type="number"
              name="bag-mx"
              :value="bags.bag1.maxCapacity.value"
              @input="(e) => updateMaxCapacity('bag1', e)"
          /></label>
          <label class="box-text">m<input type="text" name="bag-m" /></label>
          <label class="box-number">c<input type="number" name="bag-c" /></label>
          <label class="box-number">r<input type="number" name="bag-r" /></label>
          <label class="box-text">e<input type="text" name="bag-e" /></label>
          <label class="box-weight">%d<input type="number" name="bag-d" /></label>
        </div>
      </dialog>
      <div v-for="(input, index) in bags.bag1.inputs.value" :key="index" class="row-bag">
        <label>
          <input
            type="text"
            :name="'obj' + index + 'Name'"
            v-model="bags.bag1.inputs.value[index]"
            @input="(e) => newInput('bag1', index)"
          />
        </label>
        <label>u<input type="number" :name="'obj' + index + 'u'" /></label>
        <label>%d<input type="number" :name="'obj' + index + 'd'" /></label>
        <div class="info">
          <p>{{ nombre }}</p>
          <p>e</p>
          <p class="label-x">{{ e }}</p>
          <p>c</p>
          <p class="label-s">{{ c }}</p>
          <p>r</p>
          <p class="label-s">{{ r }}</p>
          <p>t</p>
          <p class="label-x">{{ t }}</p>
          <p>p</p>
          <p class="label-s">{{ p }}</p>
          <p>a</p>
          <p class="label-s">{{ a }}</p>
          <p>m</p>
          <p class="label-x">{{ m }}</p>
          <p class="label-l">{{ dmg }}</p>
        </div>
      </div>
    </section>
    <section class="inv2" id="inv2" :style="bag2Style">
      <div>
        <p @click="openBag('bag2')">{{ bags.bag2.name.value }} {{ bags.bag2.type.value }}</p>
        <button type="button" @click="showDialog('bag2')">
          <img src="/icon/item/pouch.png" alt="Bag img" />
        </button>
      </div>
      <dialog id="bag2">
        <p>{{ bags.bag2.name.value }} {{ bags.bag2.type.value }}</p>
        <div>
          <label class="box-name">
            <input
              type="text"
              name="bag2-name"
              :value="bags.bag2.name.value"
              @input="(e) => updateBag('bag2', 'name', e)"
            />
          </label>
          <label class="box-text">
            t<input
              type="text"
              name="bag2-t"
              :value="bags.bag2.type.value"
              @input="(e) => updateBag('bag2', 'type', e)"
            />
          </label>
          <label class="box-weight">
            Mx<input
              type="number"
              name="bag2-mx"
              :value="bags.bag2.maxCapacity.value"
              @input="(e) => updateMaxCapacity('bag2', e)"
            />
          </label>
          <label class="box-text">m<input type="text" name="bag2-m" /></label>
          <label class="box-number">c<input type="number" name="bag2-c" /></label>
          <label class="box-number">r<input type="number" name="bag2-r" /></label>
          <label class="box-text">e<input type="text" name="bag2-e" /></label>
          <label class="box-weight">%d<input type="number" name="bag2-d" /></label>
        </div>
      </dialog>
      <div v-for="(input, index) in bags.bag2.inputs.value" :key="index" class="row-bag">
        <label>
          <input
            type="text"
            :name="'obj' + index + 'Name2'"
            v-model="bags.bag2.inputs.value[index]"
            @input="(e) => newInput('bag2', index)"
          />
        </label>
        <label>u<input type="number" :name="'obj' + index + 'u2'" /></label>
        <label>%d<input type="number" :name="'obj' + index + 'd2'" /></label>
        <div class="info">
          <p>{{ nombre }}</p>
          <p>e</p>
          <p class="label-x">{{ e }}</p>
          <p>c</p>
          <p class="label-s">{{ c }}</p>
          <p>r</p>
          <p class="label-s">{{ r }}</p>
          <p>t</p>
          <p class="label-x">{{ t }}</p>
          <p>p</p>
          <p class="label-s">{{ p }}</p>
          <p>a</p>
          <p class="label-s">{{ a }}</p>
          <p>m</p>
          <p class="label-x">{{ m }}</p>
          <p class="label-l">{{ dmg }}</p>
        </div>
      </div>
    </section>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'

const showDialog = (dialogId) => {
  const dialog = document.querySelector(`#${dialogId}`)
  dialog.showModal()

  dialog.addEventListener('click', (x) => {
    if (x.target === dialog) {
      dialog.close()
    }
  })
}
//script para abrir y cerra la bolsa
const bag1Open = ref(false)
const bag2Open = ref(false)

const openBag = (bagId) => {
  if (bagId === 'bag1') {
    bag1Open.value = !bag1Open.value
  } else if (bagId === 'bag2') {
    bag2Open.value = !bag2Open.value
  }
}
const bag1Style = computed(() => ({
  height: bag1Open.value ? '30rem' : '2.8rem',
  overflow: bag1Open.value ? 'scroll' : 'hidden',
}))
const bag2Style = computed(() => ({
  height: bag2Open.value ? '20rem' : '2.8rem',
  overflow: bag1Open.value ? 'scroll' : 'hidden',
}))

//script para hacer el nombre y los datos de la bolsa reactivos
const bags = {
  bag1: {
    name: ref('Main'),
    type: ref('Bag'),
    inputs: ref(['']),
    maxCapacity: ref(5),
  },
  bag2: {
    name: ref('new'),
    type: ref('bag'),
    inputs: ref(['']),
    maxCapacity: ref(0),
  },
}
//reactividad de las bolsas
const updateBag = (bagId, property, event) => {
  bags[bagId][property].value = event.target.value
}
//Agregar nuevos espacios en la bolsa
const newInput = (bagId, index) => {
  const bag = bags[bagId]
  if (
    // si es el último índice
    index === bag.inputs.value.length - 1 &&
    // si el input actual no está vacío
    bag.inputs.value[index] !== '' &&
    // si no se ha alcanzado la capacidad máxima
    bag.inputs.value.length < bag.maxCapacity.value
  ) {
    bag.inputs.value.push('')
  }
}
const updateMaxCapacity = (bagId, event) => {
  const value = event.target.value
  bags[bagId].maxCapacity.value = value
}
</script>
