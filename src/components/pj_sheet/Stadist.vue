<style scoped>
@import '../../assets/sheet.css';

form {
  background-size: 360% 105%;
  background-position: right -1rem;
  position: absolute;
  top: 6rem;
  width: 100vw;
  height: 89%;
  flex-wrap: nowrap;
  overflow: scroll;
  z-index: 15;
}
section {
  padding: 1rem 1rem 0 0.3rem;
  box-sizing: border-box;
  width: 100%;
  display: block;
}
</style>
<template>
  <form>
    <section class="identity" id="identity">
      <label class="row-1">
        Name<input type="text" name="name" :value="name" @input="updateName" />
      </label>
      <label class="row-1">
        Race<input type="text" name="race" :value="race" @input="updateRace" />
      </label>
      <label class="row-1">Mutation<textarea name="mutation"></textarea></label>
      <div class="row-cuadrado">
        <p>Alignment</p>
        <label
          ><select name="temper">
            <option>Temper</option>
            <option>Altruist</option>
            <option>Lawful</option>
            <option>Moderate</option>
            <option>Vicious</option>
            <option>Chaotic</option>
          </select></label
        >
        <label
          ><select name="attitude">
            <option>Attitude</option>
            <option>Gentle</option>
            <option>Moderate</option>
            <option>Agressive</option>
          </select></label
        >
        <label
          ><select name="faction">
            <option>Faction</option>
            <option>Imperial</option>
            <option>Sylvan</option>
            <option>Hermit</option>
            <option>Sleeper</option>
            <option>Nomad</option>
            <option>Refugee</option>
            <option>Outlaw</option>
            <option>Noctil</option>
            <option>Cultist</option>
            <option>Ravager</option>
          </select></label
        >
        <label
          ><select name="function">
            <option>Function</option>
            <option>Guardian</option>
            <option>Stalker</option>
            <option>Worker</option>
            <option>Trader</option>
            <option>Explorer</option>
            <option>Hoarder</option>
            <option>Researcher</option>
            <option>Emissary</option>
          </select></label
        >
      </div>
      <div class="row-2">
        <label>Age<input type="number" min="1" name="age" /></label>
        <label>Title<input type="text" name="title" /></label>
      </div>
      <div class="row-2">
        <label class="row-1"
          >Sign<select name="incarnation">
            <option>Incarnation</option>
            <option>Dragon</option>
            <option>Phoe</option>
            <option>Basilisc</option>
            <option>Manticore</option>
            <option>Leviatan</option>
            <option>Unicorn</option>
            <option>Sphinx</option>
            <option>Hydra</option>
            <option>Lammasu</option>
            <option>Gryphon</option>
          </select></label
        >
        <label class="row-1"
          ><select name="constelation">
            <option>Constelation</option>
            <option>Labrator</option>
            <option>Artisan</option>
            <option>Alchemist</option>
            <option>Glutton</option>
            <option>Satyr</option>
            <option>Dilettante</option>
            <option>Foreign</option>
            <option>Warrior</option>
            <option>King</option>
            <option>Usurer</option>
            <option>Merchant</option>
            <option>Guardian</option>
            <option>Betrayer</option>
            <option>Fool</option>
            <option>Hypocrite</option>
            <option>Healer</option>
            <option>Soothsayer</option>
            <option>Priest</option>
          </select></label
        >
      </div>
      <div class="row-2">
        <label>Class1<input type="number" name="class1Talent" /></label>
        <label><input type="text" name="class1" /></label>
      </div>
      <div class="row-2">
        <label>Class2<input type="number" name="class2Talent" /></label>
        <label><input type="text" name="class2" /></label>
      </div>
      <div class="row-2">
        <label>Class3<input type="number" name="class3Talent" /></label>
        <label><input type="text" name="class3" /></label>
      </div>
      <label class="row-1">Synergy<input type="text" name="synergy" /></label>
    </section>
    <section class="power" id="power">
      <div class="row-3">
        <label
          ><select name="mistyc">
            <option>Mistyc</option>
            <option>Favilyan</option>
            <option>Cromag</option>
            <option>Novalt</option>
          </select></label
        >
        <label>Ac<input type="number" min="5" name="acMistyc" /></label>
        <label>Mx<input type="number" min="5" readonly name="mxMistyc" /></label>
      </div>
      <div class="row-3">
        <label
          ><select name="insiders">
            <option>Insiders</option>
            <option>Polarity</option>
            <option>Geruma</option>
            <option>Sentiment</option>
          </select></label
        >
        <label>Ac<input type="number" min="5" name="acInsiders" /></label>
        <label>Mx<input type="number" min="5" readonly name="mxInsiders" /></label>
      </div>
      <div class="row-3">
        <label
          ><select name="naturals">
            <option>Naturals</option>
            <option>Elements</option>
            <option>Exaner</option>
          </select></label
        >
        <label>Ac<input type="number" min="5" name="acNaturals" /></label>
        <label>Mx<input type="number" min="5" readonly name="mxNaturals" /></label>
      </div>
      <div class="row-4">
        <p>H.P.</p>
        <label>Ac<input type="number" min="1" name="acHP" /></label>
        <label>Mx<input type="number" min="1" readonly name="mxHP" /></label>
        <p>C.P.</p>
        <label>Ac<input type="number" min="1" name="acCP" /></label>
        <label>Mx<input type="number" min="1" readonly name="mxCP" /></label>
      </div>
      <div class="row-4">
        <label
          ><p>N.A.</p>
          <input type="number" min="1" readonly name="na"
        /></label>
        <label
          ><p>Arm</p>
          <input type="number" min="1" readonly name="arm"
        /></label>
        <p class="short">p</p>
        <label>Ac<input type="number" min="1" name="acp" /></label>
        <label>Mx<input type="number" min="1" readonly name="mxp" /></label>
      </div>
      <div class="row-4">
        <p>Res</p>
        <label>Ac<input type="number" min="5" name="acRes" /></label>
        <label>Mx<input type="number" min="5" readonly name="mxRes" /></label>
        <p>Ham</p>
        <label>Ac<input type="number" min="1" name="acHam" /></label>
        <label>Mx<input type="number" min="1" readonly name="mxHam" /></label>
      </div>
      <div class="row-4">
        <p>Cor</p>
        <label><span>%</span><input type="number" min="0" name="percentCor" /></label>
        <label>-/d<input type="number" readonly name="minusCor" /></label>
        <p>Mad</p>
        <label><span>%</span><input type="number" min="0" name="percentLoc" /></label>
        <label>-/d<input type="number" readonly name="minusLoc" /></label>
      </div>
    </section>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const race = ref('')

const emit = defineEmits(['update:name', 'update:race', 'update:level'])

//actualizar los valores a la plantilla
const updateName = (event) => {
  name.value = event.target.value
  emit('update:name', name.value)
}
const updateRace = (event) => {
  race.value = event.target.value
  emit('update:race', race.value)
}
</script>
