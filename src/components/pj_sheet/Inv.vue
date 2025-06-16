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
  <form @submit.prevent>
    <div class="pouch">
      <h4>Pouch:</h4>
      <label>Cb<input type="number" v-model="store.sheetData.inv.cb" name="cb" /></label>
      <label>Pt<input type="number" v-model="store.sheetData.inv.pt" name="pt" /></label>
      <label>Or<input type="number" v-model="store.sheetData.inv.or" name="or" /></label>
      <label>Pl<input type="number" v-model="store.sheetData.inv.pl" name="pl" /></label>
      <label><input type="text" v-model="store.sheetData.inv.coin1" name="coin1" /></label>
      <label
        ><input type="number" v-model="store.sheetData.inv.coin1Cant" name="coin1Cant"
      /></label>
      <label><input type="text" v-model="store.sheetData.inv.coin2" name="coin2" /></label>
      <label
        ><input type="number" v-model="store.sheetData.inv.coin2Cant" name="coin2Cant"
      /></label>
      <label><input type="text" v-model="store.sheetData.inv.coin3" name="coin3" /></label>
      <label
        ><input type="number" v-model="store.sheetData.inv.coin3Cant" name="coin3Cant"
      /></label>
    </div>
    <section class="inv" id="inv" :style="bag1Style">
      <div>
        <p @click="openBag('bag1')">
          {{ store.sheetData.inv.bag1.name }} {{ store.sheetData.inv.bag1.type }}
        </p>
        <button type="button" @click="showDialog('bag1')">
          <img src="/icon/item/pouch.png" alt="Bag img" />
        </button>
      </div>
      <dialog id="bag1">
        <p>{{ store.sheetData.inv.bag1.name }} {{ store.sheetData.inv.bag1.type }}</p>
        <div>
          <label class="box-name">
            <input type="text" v-model="store.sheetData.inv.bag1.name" name="bag-name" />
          </label>
          <label class="box-text">
            t<input type="text" v-model="store.sheetData.inv.bag1.type" name="bag-t" />
          </label>
          <label class="box-weight">
            Mx<input type="number" v-model="store.sheetData.inv.bag1.maxCapacity" name="bag-mx" />
          </label>
          <label class="box-text">
            m<input type="text" v-model="store.sheetData.inv.bag1.material" name="bag-m" />
          </label>
          <label class="box-number">
            c<input type="number" v-model="store.sheetData.inv.bag1.quality" name="bag-c" />
          </label>
          <label class="box-number">
            r<input type="number" v-model="store.sheetData.inv.bag1.rarity" name="bag-r" />
          </label>
          <label class="box-text">
            e<input type="text" v-model="store.sheetData.inv.bag1.effect" name="bag-e" />
          </label>
          <label class="box-weight">
            %d<input type="number" v-model="store.sheetData.inv.bag1.durability" name="bag-d" />
          </label>
        </div>
      </dialog>
      <div v-for="(item, index) in store.sheetData.inv.bag1.items" :key="index" class="row-bag">
        <label>
          <input
            type="text"
            :name="'obj' + index + 'Name'"
            v-model="item.name"
            @input="(e) => newInput('bag1', index)"
          />
        </label>
        <label>u<input type="number" v-model="item.units" :name="'obj' + index + 'u'" /></label>
        <label
          >%d
          <input type="number" v-model="item.durability" :name="'obj' + index + 'd'" />
        </label>
        <div class="info">
          <p>{{ nombre }}</p>
          <p>e</p>
          <p class="label-x">{{ item.effect }}</p>
          <p>c</p>
          <p class="label-s">{{ item.quality }}</p>
          <p>r</p>
          <p class="label-s">{{ item.rarity }}</p>
          <p>t</p>
          <p class="label-x">{{ item.type }}</p>
          <p>p</p>
          <p class="label-s">{{ item.price }}</p>
          <p>a</p>
          <p class="label-s">{{ item.armor }}</p>
          <p>m</p>
          <p class="label-x">{{ item.material }}</p>
          <p class="label-l">{{ item.damage }}</p>
        </div>
      </div>
    </section>
    <section class="inv2" id="inv2" :style="bag2Style">
      <div>
        <p @click="openBag('bag2')">
          {{ store.sheetData.inv.bag2.name }} {{ store.sheetData.inv.bag2.type }}
        </p>
        <button type="button" @click="showDialog('bag2')">
          <img src="/icon/item/pouch.png" alt="Bag img" />
        </button>
      </div>
      <dialog id="bag2">
        <p>{{ store.sheetData.inv.bag2.name }} {{ store.sheetData.inv.bag2.type }}</p>
        <div>
          <label class="box-name">
            <input type="text" v-model="store.sheetData.inv.bag2.name" name="bag2-name" />
          </label>
          <label class="box-text">
            t<input type="text" v-model="store.sheetData.inv.bag2.type" name="bag2-t" />
          </label>
          <label class="box-weight">
            Mx<input type="number" v-model="store.sheetData.inv.bag2.maxCapacity" name="bag2-mx" />
          </label>
          <label class="box-text">
            m<input type="text" v-model="store.sheetData.inv.bag2.material" name="bag2-m" />
          </label>
          <label class="box-number">
            c<input type="number" v-model="store.sheetData.inv.bag2.quality" name="bag2-c" />
          </label>
          <label class="box-number">
            r<input type="number" v-model="store.sheetData.inv.bag2.rarity" name="bag2-r" />
          </label>
          <label class="box-text">
            e<input type="text" v-model="store.sheetData.inv.bag2.effect" name="bag2-e" />
          </label>
          <label class="box-weight">
            %d<input type="number" v-model="store.sheetData.inv.bag2.durability" name="bag2-d" />
          </label>
        </div>
      </dialog>
      <div v-for="(item, index) in store.sheetData.inv.bag2.items" :key="index" class="row-bag">
        <label>
          <input
            type="text"
            :name="'obj' + index + 'Name2'"
            v-model="item.name"
            @input="(e) => newInput('bag2', index)"
          />
        </label>
        <label>u<input type="number" v-model="item.units" :name="'obj' + index + 'u2'" /></label>
        <label
          >%d
          <input type="number" v-model="item.durability" :name="'obj' + index + 'd2'" />
        </label>
        <div class="info">
          <p>{{ nombre }}</p>
          <p>e</p>
          <p class="label-x">{{ item.effect }}</p>
          <p>c</p>
          <p class="label-s">{{ item.quality }}</p>
          <p>r</p>
          <p class="label-s">{{ item.rarity }}</p>
          <p>t</p>
          <p class="label-x">{{ item.type }}</p>
          <p>p</p>
          <p class="label-s">{{ item.price }}</p>
          <p>a</p>
          <p class="label-s">{{ item.armor }}</p>
          <p>m</p>
          <p class="label-x">{{ item.material }}</p>
          <p class="label-l">{{ item.damage }}</p>
        </div>
      </div>
    </section>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useSheetDataStore } from '../../stores/sheetDataStore'

const store = useSheetDataStore()

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
  overflow: bag2Open.value ? 'scroll' : 'hidden',
}))

//Agregar nuevos espacios en la bolsa
const newInput = (bagId, index) => {
  const items = store.sheetData.inv[bagId].items
  const maxCapacity = store.sheetData.inv[bagId].maxCapacity

  if (index === items.length - 1 && items[index].name !== '' && items.length < maxCapacity) {
    items.push({
      name: '',
      units: 0,
      durability: 0,
      effect: '',
      quality: 0,
      rarity: 0,
      type: '',
      price: 0,
      armor: 0,
      material: '',
      damage: '',
    })
  }
}
</script>
