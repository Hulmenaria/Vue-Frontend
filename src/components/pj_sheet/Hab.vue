<style scoped>
@import '../../assets/sheet.css';
form {
  height: 90vh;
  width: 100vw;
  margin: 0rem 0;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  position: absolute;
  top: 5rem;
}
form > div {
  overflow-y: scroll;
  margin: 3rem 0;
}
.row-3 {
  justify-content: space-between;
}
.row-3 label {
  font-size: 1rem;
  width: unset;
}
.row-3 input[type='text'] {
  width: 14rem;
}
.row-3 input[type='number'] {
  width: 3rem;
}
</style>

<template>
  <form @submit.prevent>
    <div>
      <section>
        <legend>Racial Pasive</legend>
        <div class="row-3" v-for="(slot, index) in raciPasArray" :key="slot.id">
          <label>
            <input
              type="text"
              :value="slot.name"
              @input="updateRaciPasField(index, 'name', $event.target.value)"
              @blur="handleRaciPasInput(index)"
            />
          </label>
          <label>Lvl<input type="number" v-model="slot.lvl" /></label>
          <label><input type="number" v-model="slot.next" /></label>
        </div>
      </section>
      <section>
        <legend>Racial Active</legend>
        <div class="row-3" v-for="(slot, index) in raciActArray" :key="slot.id">
          <label>
            <input
              type="text"
              :value="slot.name"
              @input="updateRaciActField(index, 'name', $event.target.value)"
              @blur="handleRaciActInput(index)"
            />
          </label>
          <label>Lvl<input type="number" v-model="slot.lvl" /></label>
          <label><input type="number" v-model="slot.next" /></label>
        </div>
      </section>
      <section>
        <legend>Class Pasive</legend>
        <div class="row-3" v-for="(slot, index) in clasPasArray" :key="slot.id">
          <label>
            <input
              type="text"
              :value="slot.name"
              @input="updateClasPasField(index, 'name', $event.target.value)"
              @blur="handleClasPasInput(index)"
            />
          </label>
          <label>Lvl<input type="number" v-model="slot.lvl" /></label>
          <label><input type="number" v-model="slot.next" /></label>
        </div>
      </section>
      <section>
        <legend>Class Active</legend>
        <div class="row-3" v-for="(slot, index) in clasActArray" :key="slot.id">
          <label>
            <input
              type="text"
              :value="slot.name"
              @input="updateClasActField(index, 'name', $event.target.value)"
              @blur="handleClasActInput(index)"
            />
          </label>
          <label>Lvl<input type="number" v-model="slot.lvl" /></label>
          <label><input type="number" v-model="slot.next" /></label>
        </div>
      </section>
      <section>
        <legend>Competences</legend>
        <div class="row-3" v-for="(slot, index) in competencesArray" :key="slot.id">
          <label>
            <input
              type="text"
              :value="slot.name"
              @input="updateCompetencesField(index, 'name', $event.target.value)"
              @blur="handleCompetencesInput(index)"
            />
          </label>
          <label>Lvl<input type="number" v-model="slot.lvl" /></label>
          <label><input type="number" v-model="slot.next" /></label>
        </div>
      </section>
    </div>
  </form>
</template>

<script setup>
import { computed } from 'vue'
import { useSheetDataStore } from '@/stores/sheetDataStore'
const store = useSheetDataStore()
import { dynamicSlots } from '@/composables/dynamicSlots'

const raciPasArray = computed(() => store.sheetData.hab.raciPas)
const raciActArray = computed(() => store.sheetData.hab.raciAct)
const clasPasArray = computed(() => store.sheetData.hab.clasPas)
const clasActArray = computed(() => store.sheetData.hab.clasAct)
const competencesArray = computed(() => store.sheetData.hab.competences)

const { handleNewSlot: handleRaciPasInput, updateField: updateRaciPasField } = dynamicSlots({
  arrayRef: raciPasArray,
})
const { handleNewSlot: handleRaciActInput, updateField: updateRaciActField } = dynamicSlots({
  arrayRef: raciActArray,
})
const { handleNewSlot: handleClasPasInput, updateField: updateClasPasField } = dynamicSlots({
  arrayRef: clasPasArray,
})
const { handleNewSlot: handleClasActInput, updateField: updateClasActField } = dynamicSlots({
  arrayRef: clasActArray,
})
const { handleNewSlot: handleCompetencesInput, updateField: updateCompetencesField } = dynamicSlots(
  {
    arrayRef: competencesArray,
  },
)

// import { useSheetDataStore } from '@/stores/sheetDataStore'
// const store = useSheetDataStore()

// const handleNewSlot = async (arrayName, index) => {
//   const array = store.sheetData.hab[arrayName]

//   if (array[index].name === '' && array.length > 1 && index !== array.length - 1) {
//     array.splice(index, 1)
//   } else if (index === array.length - 1 && array[index].name !== '') {
//     const newId = array.length + 1
//     array.push({ id: newId, name: '', lvl: 0, next: 0 })
//   }
// }
</script>
