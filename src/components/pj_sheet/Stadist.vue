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
  <form @submit.prevent>
    <section class="identity" id="identity">
      <label class="row-1">
        Name<input
          type="text"
          name="name"
          v-model="store.sheetData.std.name"
          placeholder="Select a Name"
        />
      </label>
      <label class="row-1">
        Race<input type="text" name="race" v-model="store.sheetData.std.race" />
      </label>
      <label class="row-1"
        >Mutation<textarea name="mutation" v-model="store.sheetData.std.mutation"></textarea>
      </label>
      <div class="row-cuadrado">
        <p>Alignment</p>
        <label>
          <select name="temper" v-model="store.sheetData.std.temper">
            <option>Temper</option>
            <option>Altruist</option>
            <option>Lawful</option>
            <option>Moderate</option>
            <option>Vicious</option>
            <option>Chaotic</option>
          </select>
        </label>
        <label>
          <select name="attitude" v-model="store.sheetData.std.attitude">
            <option>Attitude</option>
            <option>Gentle</option>
            <option>Moderate</option>
            <option>Agressive</option>
          </select>
        </label>
        <label>
          <select name="faction" v-model="store.sheetData.std.faction">
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
          </select>
        </label>
        <label>
          <select name="function" v-model="store.sheetData.std.function">
            <option>Function</option>
            <option>Guardian</option>
            <option>Stalker</option>
            <option>Worker</option>
            <option>Trader</option>
            <option>Explorer</option>
            <option>Hoarder</option>
            <option>Researcher</option>
            <option>Emissary</option>
          </select>
        </label>
      </div>
      <div class="row-2">
        <label>
          Age
          <input type="number" min="1" name="age" v-model="store.sheetData.std.age" />
        </label>
        <label>Title<input type="text" name="title" v-model="store.sheetData.std.title" /></label>
      </div>
      <div class="row-2">
        <label class="row-1">
          Sign<select name="incarnation" v-model="store.sheetData.std.incarnation">
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
          </select>
        </label>
        <label class="row-1">
          <select name="constelation" v-model="store.sheetData.std.constelation">
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
          </select>
        </label>
      </div>
      <div class="row-2">
        <label>
          Class1
          <input type="number" name="class1Talent" v-model="store.sheetData.std.class1Talent" />
        </label>
        <label><input type="text" name="class1" v-model="store.sheetData.std.class1" /></label>
      </div>
      <div class="row-2">
        <label>
          Class2
          <input type="number" name="class2Talent" v-model="store.sheetData.std.class2Talent" />
        </label>
        <label><input type="text" name="class2" v-model="store.sheetData.std.class2" /></label>
      </div>
      <div class="row-2">
        <label>
          Class3
          <input type="number" name="class3Talent" v-model="store.sheetData.std.class3Talent" />
        </label>
        <label><input type="text" name="class3" v-model="store.sheetData.std.class3" /></label>
      </div>
      <label class="row-1"
        >Synergy
        <input type="text" name="synergy" v-model="store.sheetData.std.synergy" />
      </label>
    </section>
    <section class="power" id="power">
      <div class="row-3">
        <label>
          <select name="mistyc" v-model="store.sheetData.std.mistyc">
            <option>Mistyc</option>
            <option>Favilyan</option>
            <option>Cromag</option>
            <option>Novalt</option>
          </select>
        </label>
        <label>
          Ac
          <input type="number" min="5" name="acMistyc" v-model="store.sheetData.std.acMistyc" />
        </label>
        <label>
          Mx
          <input type="number" min="5" name="mxMistyc" v-model="store.sheetData.std.mxMistyc" />
        </label>
      </div>
      <div class="row-3">
        <label>
          <select name="insiders" v-model="store.sheetData.std.insiders">
            <option>Insiders</option>
            <option>Polarity</option>
            <option>Geruma</option>
            <option>Sentiment</option>
          </select>
        </label>
        <label>
          Ac<input
            type="number"
            min="5"
            name="acInsiders"
            v-model="store.sheetData.std.acInsiders"
          />
        </label>
        <label>
          Mx<input
            type="number"
            min="5"
            name="mxInsiders"
            v-model="store.sheetData.std.mxInsiders"
          />
        </label>
      </div>
      <div class="row-3">
        <label>
          <select name="naturals" v-model="store.sheetData.std.naturals">
            <option>Naturals</option>
            <option>Elements</option>
            <option>Exaner</option>
          </select>
        </label>
        <label>
          Ac<input
            type="number"
            min="5"
            name="acNaturals"
            v-model="store.sheetData.std.acNaturals"
          />
        </label>
        <label>
          Mx<input
            type="number"
            min="5"
            name="mxNaturals"
            v-model="store.sheetData.std.mxNaturals"
          />
        </label>
      </div>
      <div class="row-4">
        <p>H.P.</p>
        <label>
          Ac<input type="number" min="1" name="acHP" v-model="store.sheetData.std.acHP" />
        </label>
        <label>
          Mx<input type="number" min="1" name="mxHP" v-model="store.sheetData.std.mxHP" />
        </label>
        <p>C.P.</p>
        <label>
          Ac<input type="number" min="1" name="acCP" v-model="store.sheetData.std.acCP" />
        </label>
        <label>
          Mx<input type="number" min="1" name="mxCP" v-model="store.sheetData.std.mxCP" />
        </label>
      </div>
      <div class="row-4">
        <label>
          <p>N.A.</p>
          <input type="number" min="1" name="na" v-model="store.sheetData.std.na" />
        </label>
        <label>
          <p>Arm</p>
          <input type="number" min="1" name="arm" v-model="store.sheetData.std.arm" />
        </label>
        <p class="short">p</p>
        <label>
          Ac<input type="number" min="1" name="acp" v-model="store.sheetData.std.acP" />
        </label>
        <label>
          Mx<input type="number" min="1" name="mxp" v-model="store.sheetData.std.mxP" />
        </label>
      </div>
      <div class="row-4">
        <p>Res</p>
        <label>
          Ac<input type="number" min="5" name="acRes" v-model="store.sheetData.std.acRes" />
        </label>
        <label>
          Mx<input type="number" min="5" name="mxRes" v-model="store.sheetData.std.mxRes" />
        </label>
        <p>Ham</p>
        <label>
          Ac<input type="number" min="1" name="acHam" v-model="store.sheetData.std.acHam" />
        </label>
        <label>
          Mx<input type="number" min="1" name="mxHam" v-model="store.sheetData.std.mxHam" />
        </label>
      </div>
      <div class="row-4">
        <p>Cor</p>
        <label>
          <span>%</span>
          <input type="number" min="0" name="percentCor" v-model="store.sheetData.std.percentCor" />
        </label>
        <label>
          -/d<input type="number" name="minusCor" v-model="store.sheetData.std.minusCor" />
        </label>
        <p>Mad</p>
        <label>
          <span>%</span>
          <input type="number" min="0" name="percentLoc" v-model="store.sheetData.std.percentLoc" />
        </label>
        <label>
          -/d<input type="number" name="minusLoc" v-model="store.sheetData.std.minusLoc" />
        </label>
      </div>
    </section>
  </form>
</template>

<script setup>
import { useSheetDataStore } from '@/stores/sheetDataStore'

const store = useSheetDataStore()
</script>
