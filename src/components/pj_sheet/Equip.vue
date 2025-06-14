<style scoped>
@import '../../assets/sheet.css';

/*Botonera*/
.equip {
  height: 28rem;
  padding: 1.5rem 0.5rem;
  display: grid;
  grid-template: repeat(14, 1fr) / repeat(7, 1fr);
  box-sizing: border-box;
}
.equip section {
  display: flex;
  align-items: center;
  justify-content: center;
}
.equip button {
  background-color: var(--bgCoffe);
  border-radius: 1rem;
  border: 2px inset var(--bgLatte);
}
.equip button img {
  width: 3rem;
  height: 3rem;
  opacity: 0;
  transition: 0.5s;
}
.equip button:hover img {
  opacity: 1;
}
.long,
section .long img {
  height: 5rem;
}
.short,
section .short img {
  height: 1.5rem;
}
.trinket,
section .trinket img {
  height: 2rem;
  width: 2rem;
}

.box-head {
  grid-area: 1/1/4/8;
}
.box-pircing-right {
  grid-area: 1/3;
}
.box-pircing-left {
  grid-area: 1/5;
}
.box-face {
  grid-area: 3/5;
}
.box-collar {
  grid-area: 3/3;
}
.box-shoulder-right {
  grid-area: 4/1/5/5;
}
.box-shoulder-left {
  grid-area: 4/4/5/8;
}
.box-chest {
  grid-area: 4/1/4/8;
}
.box-arm-right {
  grid-area: 5/1/9/4;
}
.box-arm-left {
  grid-area: 5/5/9/8;
}
.box-tatoo {
  grid-area: 5/3;
}
.box-kenwa {
  grid-area: 5/5;
}
.box-bracelet-right {
  grid-area: 8/3;
}
.box-bracelet-left {
  grid-area: 8/5;
}
.box-waist {
  grid-area: 9/1/9/8;
}
.box-hand-right {
  grid-area: 9/1/9/4;
}
.box-hand-left {
  grid-area: 9/5/9/8;
}
.box-ring-right {
  grid-area: 9/5/12/5;
}
.box-ring-left {
  grid-area: 9/3/12/3;
}
.box-leg-right {
  grid-area: 10/1/14/7;
}
.box-leg-left {
  grid-area: 10/2/14/8;
}
.box-foot-right {
  grid-area: 14/1/14/7;
}
.box-foot-left {
  grid-area: 14/2/14/8;
}
.box-sheath {
  grid-area: 11/1;
}
.box-weapon {
  grid-area: 13/1/15/1;
}
.box-shield {
  grid-area: 13/2/15/4;
}
.box-magic {
  grid-area: 13/5/15/7;
}
.box-range {
  grid-area: 13/7/15/7;
}
.box-quiver {
  grid-area: 11/7;
}
[class*='box'] button {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.7;
}
/* .box-head button {
  background-image: url(..//icon/equip/head.png);
}
.box-chest button {
  background-image: url(..//icon/equip/body.png);
}
.box-shoulder-left button {
  background-image: url(..//icon/equip/shoulder-l.png);
}
.box-shoulder-right button {
  background-image: url(..//icon/equip/shoulder-r.png);
} */
@media screen and (min-width: 400px) {
  .equip {
    padding: 1.5rem 48rem;
  }
}
</style>
<template>
  <form class="equip" id="equip">
    <section class="box-pircing-left">
      <button type="button" class="trinket" @click="showDialog('pircing-left')">
        <img src="" alt="" />
      </button>
      <dialog id="pircing-left">
        <p>Left earring</p>
        <div>
          <label class="box-name">
            <input type="text" name="leftPir_name" v-model="store.sheetData.equip.leftPir_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="leftPir_t" v-model="store.sheetData.equip.leftPir_t" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="leftPir_c" v-model="store.sheetData.equip.leftPir_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="leftPir_r" v-model="store.sheetData.equip.leftPir_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="leftPir_e" v-model="store.sheetData.equip.leftPir_e" />
          </label>
          <label class="box-weight">
            u
            <input type="number" name="leftPir_u" v-model="store.sheetData.equip.leftPir_u" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-pircing-right">
      <button type="button" class="trinket" @click="showDialog('pircing-right')">
        <img src="" alt="" />
      </button>
      <dialog id="pircing-right">
        <p>Right earring</p>
        <div>
          <label class="box-name">
            <input type="text" name="rightPir_name" v-model="store.sheetData.equip.rightPir_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="rightPir_t" v-model="store.sheetData.equip.rightPir_t" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="rightPir_c" v-model="store.sheetData.equip.rightPir_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="rightPir_r" v-model="store.sheetData.equip.rightPir_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="rightPir_e" v-model="store.sheetData.equip.rightPir_e" />
          </label>
          <label class="box-weight">
            u
            <input type="number" name="rightPir_u" v-model="store.sheetData.equip.rightPir_u" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-face">
      <button type="button" class="trinket" @click="showDialog('face')">
        <img src="" alt="" />
      </button>
      <dialog id="face">
        <p>Face</p>
        <div>
          <label class="box-name">
            <input type="text" name="face_name" v-model="store.sheetData.equip.face_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="face_t" v-model="store.sheetData.equip.face_t" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="face_c" v-model="store.sheetData.equip.face_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="face_r" v-model="store.sheetData.equip.face_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="face_e" v-model="store.sheetData.equip.face_e" />
          </label>
          <label class="box-weight">
            u
            <input type="number" name="face_u" v-model="store.sheetData.equip.face_u" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-collar">
      <button type="button" class="trinket" @click="showDialog('collar')">
        <img src="" alt="" />
      </button>
      <dialog id="collar">
        <p>Necklace</p>
        <div>
          <label class="box-name">
            <input type="text" name="collar_name" v-model="store.sheetData.equip.collar_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="collar_t" v-model="store.sheetData.equip.collar_t" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="collar_c" v-model="store.sheetData.equip.collar_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="collar_r" v-model="store.sheetData.equip.collar_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="collar_e" v-model="store.sheetData.equip.collar_e" />
          </label>
          <label class="box-weight">
            u
            <input type="number" name="collar_u" v-model="store.sheetData.equip.collar_u" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-tatoo">
      <button type="button" class="trinket" @click="showDialog('tatoo')">
        <img src="" alt="" />
      </button>
      <dialog id="tatoo">
        <p>Tatoo</p>
        <div>
          <label class="box-name">
            <input type="text" name="tatoo_name" v-model="store.sheetData.equip.tatoo_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="tatoo_t" v-model="store.sheetData.equip.tatoo_t" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="tatoo_c" v-model="store.sheetData.equip.tatoo_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="tatoo_r" v-model="store.sheetData.equip.tatoo_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="tatoo_e" v-model="store.sheetData.equip.tatoo_e" />
          </label>
          <label class="box-weight">
            u
            <input type="number" name="tatoo_u" v-model="store.sheetData.equip.tatoo_u" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-kenwa">
      <button type="button" class="trinket" @click="showDialog('kenwa')">
        <img src="" alt="" />
      </button>
      <dialog id="kenwa">
        <p>Kenwa</p>
        <div>
          <label class="box-name">
            <input type="text" name="kenwa_name" v-model="store.sheetData.equip.kenwa_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="kenwa_t" v-model="store.sheetData.equip.kenwa_t" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="kenwa_c" v-model="store.sheetData.equip.kenwa_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="kenwa_r" v-model="store.sheetData.equip.kenwa_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="kenwa_e" v-model="store.sheetData.equip.kenwa_e" />
          </label>
          <label class="box-weight">
            u
            <input type="number" name="kenwa_u" v-model="store.sheetData.equip.kenwa_u" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-bracelet-left">
      <button type="button" class="trinket" @click="showDialog('bracelet-left')">
        <img src="" alt="" />
      </button>
      <dialog id="bracelet-left">
        <p>Left bracelet</p>
        <div>
          <label class="box-name">
            <input
              type="text"
              name="leftbracelet_name"
              v-model="store.sheetData.equip.leftbracelet_name"
            />
          </label>
          <label class="box-text">
            t
            <input
              type="text"
              name="leftbracelet_t"
              v-model="store.sheetData.equip.leftbracelet_t"
            />
          </label>
          <label class="box-number">
            c
            <input
              type="number"
              name="leftbracelet_c"
              v-model="store.sheetData.equip.leftbracelet_c"
            />
          </label>
          <label class="box-number">
            r
            <input
              type="number"
              name="leftbracelet_r"
              v-model="store.sheetData.equip.leftbracelet_r"
            />
          </label>
          <label class="box-text">
            e
            <input
              type="text"
              name="leftbracelet_e"
              v-model="store.sheetData.equip.leftbracelet_e"
            />
          </label>
          <label class="box-weight">
            u
            <input
              type="number"
              name="leftbracelet_u"
              v-model="store.sheetData.equip.leftbracelet_u"
            />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-bracelet-right">
      <button type="button" class="trinket" @click="showDialog('bracelet-right')">
        <img src="" alt="" />
      </button>
      <dialog id="bracelet-right">
        <p>Right bracelet</p>
        <div>
          <label class="box-name">
            <input
              type="text"
              name="rightBracelet_name"
              v-model="store.sheetData.equip.rightBracelet_name"
            />
          </label>
          <label class="box-text">
            t
            <input
              type="text"
              name="rightBracelet_t"
              v-model="store.sheetData.equip.rightBracelet_t"
            />
          </label>
          <label class="box-number">
            c
            <input
              type="number"
              name="rightBracelet_c"
              v-model="store.sheetData.equip.rightBracelet_c"
            />
          </label>
          <label class="box-number">
            r
            <input
              type="number"
              name="rightBracelet_r"
              v-model="store.sheetData.equip.rightBracelet_r"
            />
          </label>
          <label class="box-text">
            e
            <input
              type="text"
              name="rightBracelet_e"
              v-model="store.sheetData.equip.rightBracelet_e"
            />
          </label>
          <label class="box-weight">
            u
            <input
              type="number"
              name="rightBracelet_u"
              v-model="store.sheetData.equip.rightBracelet_u"
            />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-ring-left">
      <button type="button" class="trinket" @click="showDialog('ring-left')">
        <img src="" alt="" />
      </button>
      <dialog id="ring-left">
        <p>Left ring</p>
        <div>
          <label class="box-name">
            <input type="text" name="leftRing_name" v-model="store.sheetData.equip.leftRing_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="leftRing_t" v-model="store.sheetData.equip.leftRing_t" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="leftRing_c" v-model="store.sheetData.equip.leftRing_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="leftRing_r" v-model="store.sheetData.equip.leftRing_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="leftRing_e" v-model="store.sheetData.equip.leftRing_e" />
          </label>
          <label class="box-weight">
            u
            <input type="number" name="leftRing_u" v-model="store.sheetData.equip.leftRing_u" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-ring-right">
      <button type="button" class="trinket" @click="showDialog('ring-right')">
        <img src="" alt="" />
      </button>
      <dialog id="ring-right">
        <p>Right ring</p>
        <div>
          <label class="box-name">
            <input
              type="text"
              name="rightRing_name"
              v-model="store.sheetData.equip.rightRing_name"
            />
          </label>
          <label class="box-text">
            t
            <input type="text" name="rightRing_t" v-model="store.sheetData.equip.rightRing_t" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="rightRing_c" v-model="store.sheetData.equip.rightRing_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="rightRing_r" v-model="store.sheetData.equip.rightRing_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="rightRing_e" v-model="store.sheetData.equip.rightRing_e" />
          </label>
          <label class="box-weight">
            u
            <input type="number" name="rightRing_u" v-model="store.sheetData.equip.rightRing_u" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-head">
      <button type="button" @click="showDialog('head')">
        <img src="" alt="" />
      </button>
      <dialog id="head">
        <p>Head</p>
        <div>
          <label class="box-name">
            <input type="text" name="head_name" v-model="store.sheetData.equip.head_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="head_t" v-model="store.sheetData.equip.head_t" />
          </label>
          <label class="box-number">
            a
            <input type="number" name="head_a" v-model="store.sheetData.equip.head_a" />
          </label>
          <label class="box-number">
            p
            <input type="number" name="head_p" v-model="store.sheetData.equip.head_p" />
          </label>
          <label class="box-text">
            m
            <input type="text" name="head_m" v-model="store.sheetData.equip.head_m" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="head_c" v-model="store.sheetData.equip.head_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="head_r" v-model="store.sheetData.equip.head_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="head_e" v-model="store.sheetData.equip.head_e" />
          </label>
          <label class="box-weight">
            %d
            <input type="number" name="head_d" v-model="store.sheetData.equip.head_d" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-chest">
      <button type="button" @click="showDialog('chest')">
        <img src="" alt="" />
      </button>
      <dialog id="chest">
        <p>Chest</p>
        <div>
          <label class="box-name">
            <input type="text" name="chest_name" v-model="store.sheetData.equip.chest_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="chest_t" v-model="store.sheetData.equip.chest_t" />
          </label>
          <label class="box-number">
            a
            <input type="number" name="chest_a" v-model="store.sheetData.equip.chest_a" />
          </label>
          <label class="box-number">
            p
            <input type="number" name="chest_p" v-model="store.sheetData.equip.chest_p" />
          </label>
          <label class="box-text">
            m
            <input type="text" name="chest_m" v-model="store.sheetData.equip.chest_m" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="chest_c" v-model="store.sheetData.equip.chest_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="chest_r" v-model="store.sheetData.equip.chest_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="chest_e" v-model="store.sheetData.equip.chest_e" />
          </label>
          <label class="box-weight">
            %d
            <input type="number" name="chest_d" v-model="store.sheetData.equip.chest_d" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-waist">
      <button type="button" @click="showDialog('waist')">
        <img src="" alt="" />
      </button>
      <dialog id="waist">
        <p>Waist</p>
        <div>
          <label class="box-name">
            <input type="text" name="waist_name" v-model="store.sheetData.equip.waist_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="waist_t" v-model="store.sheetData.equip.waist_t" />
          </label>
          <label class="box-number">
            a
            <input type="number" name="waist_a" v-model="store.sheetData.equip.waist_a" />
          </label>
          <label class="box-number">
            p
            <input type="number" name="waist_p" v-model="store.sheetData.equip.waist_p" />
          </label>
          <label class="box-text">
            m
            <input type="text" name="waist_m" v-model="store.sheetData.equip.waist_m" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="waist_c" v-model="store.sheetData.equip.waist_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="waist_r" v-model="store.sheetData.equip.waist_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="waist_e" v-model="store.sheetData.equip.waist_e" />
          </label>
          <label class="box-weight">
            %d
            <input type="number" name="waist_d" v-model="store.sheetData.equip.waist_d" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-shoulder-left">
      <button type="button" @click="showDialog('shoulder-left')">
        <img src="" alt="" />
      </button>
      <dialog id="shoulder-left">
        <p>Left shoulder</p>
        <div>
          <label class="box-name">
            <input
              type="text"
              name="leftShoulder_name"
              v-model="store.sheetData.equip.leftShoulder_name"
            />
          </label>
          <label class="box-text">
            t
            <input
              type="text"
              name="leftShoulder_t"
              v-model="store.sheetData.equip.leftShoulder_t"
            />
          </label>
          <label class="box-number">
            a
            <input
              type="number"
              name="leftShoulder_a"
              v-model="store.sheetData.equip.leftShoulder_a"
            />
          </label>
          <label class="box-number">
            p
            <input
              type="number"
              name="leftShoulder_p"
              v-model="store.sheetData.equip.leftShoulder_p"
            />
          </label>
          <label class="box-text">
            m
            <input
              type="text"
              name="leftShoulder_m"
              v-model="store.sheetData.equip.leftShoulder_m"
            />
          </label>
          <label class="box-number">
            c
            <input
              type="number"
              name="leftShoulder_c"
              v-model="store.sheetData.equip.leftShoulder_c"
            />
          </label>
          <label class="box-number">
            r
            <input
              type="number"
              name="leftShoulder_r"
              v-model="store.sheetData.equip.leftShoulder_r"
            />
          </label>
          <label class="box-text">
            e
            <input
              type="text"
              name="leftShoulder_e"
              v-model="store.sheetData.equip.leftShoulder_e"
            />
          </label>
          <label class="box-weight">
            %d
            <input
              type="number"
              name="leftShoulder_d"
              v-model="store.sheetData.equip.leftShoulder_d"
            />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-arm-left">
      <button type="button" @click="showDialog('arm-left')">
        <img src="" alt="" />
      </button>
      <dialog id="arm-left">
        <p>Left arm</p>
        <div>
          <label class="box-name">
            <input type="text" name="leftArm_name" v-model="store.sheetData.equip.leftArm_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="leftArm_t" v-model="store.sheetData.equip.leftArm_t" />
          </label>
          <label class="box-number">
            a
            <input type="number" name="leftArm_a" v-model="store.sheetData.equip.leftArm_a" />
          </label>
          <label class="box-number">
            p
            <input type="number" name="leftArm_p" v-model="store.sheetData.equip.leftArm_p" />
          </label>
          <label class="box-text">
            m
            <input type="text" name="leftArm_m" v-model="store.sheetData.equip.leftArm_m" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="leftArm_c" v-model="store.sheetData.equip.leftArm_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="leftArm_r" v-model="store.sheetData.equip.leftArm_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="leftArm_e" v-model="store.sheetData.equip.leftArm_e" />
          </label>
          <label class="box-weight">
            %d
            <input type="number" name="leftArm_d" v-model="store.sheetData.equip.leftArm_d" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-hand-left">
      <button type="button" @click="showDialog('hand-left')">
        <img src="" alt="" />
      </button>
      <dialog id="hand-left">
        <p>Left hand</p>
        <div>
          <label class="box-name">
            <input type="text" name="leftHand_name" v-model="store.sheetData.equip.leftHand_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="leftHand_t" v-model="store.sheetData.equip.leftHand_t" />
          </label>
          <label class="box-number">
            a
            <input type="number" name="leftHand_a" v-model="store.sheetData.equip.leftHand_a" />
          </label>
          <label class="box-number">
            p
            <input type="number" name="leftHand_p" v-model="store.sheetData.equip.leftHand_p" />
          </label>
          <label class="box-text">
            m
            <input type="text" name="leftHand_m" v-model="store.sheetData.equip.leftHand_m" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="leftHand_c" v-model="store.sheetData.equip.leftHand_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="leftHand_r" v-model="store.sheetData.equip.leftHand_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="leftHand_e" v-model="store.sheetData.equip.leftHand_e" />
          </label>
          <label class="box-weight">
            %d
            <input type="number" name="leftHand_d" v-model="store.sheetData.equip.leftHand_d" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-leg-left">
      <button type="button" @click="showDialog('leg-left')">
        <img src="" alt="" />
      </button>
      <dialog id="leg-left">
        <p>Left leg</p>
        <div>
          <label class="box-name">
            <input type="text" name="leftLeg_name" v-model="store.sheetData.equip.leftLeg_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="leftLeg_t" v-model="store.sheetData.equip.leftLeg_t" />
          </label>
          <label class="box-number">
            a
            <input type="number" name="leftLeg_a" v-model="store.sheetData.equip.leftLeg_a" />
          </label>
          <label class="box-number">
            p
            <input type="number" name="leftLeg_p" v-model="store.sheetData.equip.leftLeg_p" />
          </label>
          <label class="box-text">
            m
            <input type="text" name="leftLeg_m" v-model="store.sheetData.equip.leftLeg_m" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="leftLeg_c" v-model="store.sheetData.equip.leftLeg_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="leftLeg_r" v-model="store.sheetData.equip.leftLeg_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="leftLeg_e" v-model="store.sheetData.equip.leftLeg_e" />
          </label>
          <label class="box-weight">
            %d
            <input type="number" name="leftLeg_d" v-model="store.sheetData.equip.leftLeg_d" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-foot-left">
      <button type="button" @click="showDialog('foot-left')">
        <img src="" alt="" />
      </button>
      <dialog id="foot-left">
        <p>Left foot</p>
        <div>
          <label class="box-name">
            <input type="text" name="leftFoot_name" v-model="store.sheetData.equip.leftFoot_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="leftFoot_t" v-model="store.sheetData.equip.leftFoot_t" />
          </label>
          <label class="box-number">
            a
            <input type="number" name="leftFoot_a" v-model="store.sheetData.equip.leftFoot_a" />
          </label>
          <label class="box-number">
            p
            <input type="number" name="leftFoot_p" v-model="store.sheetData.equip.leftFoot_p" />
          </label>
          <label class="box-text">
            m
            <input type="text" name="leftFoot_m" v-model="store.sheetData.equip.leftFoot_m" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="leftFoot_c" v-model="store.sheetData.equip.leftFoot_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="leftFoot_r" v-model="store.sheetData.equip.leftFoot_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="leftFoot_e" v-model="store.sheetData.equip.leftFoot_e" />
          </label>
          <label class="box-weight">
            %d
            <input type="number" name="leftFoot_d" v-model="store.sheetData.equip.leftFoot_d" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-shoulder-right">
      <button type="button" @click="showDialog('shoulder-right')">
        <img src="" alt="" />
      </button>
      <dialog id="shoulder-right">
        <p>Right shoulder</p>
        <div>
          <label class="box-name">
            <input
              type="text"
              name="rightShoulder_name"
              v-model="store.sheetData.equip.rightShoulder_name"
            />
          </label>
          <label class="box-text">
            t
            <input
              type="text"
              name="rightShoulder_t"
              v-model="store.sheetData.equip.rightShoulder_t"
            />
          </label>
          <label class="box-number">
            a
            <input
              type="number"
              name="rightShoulder_a"
              v-model="store.sheetData.equip.rightShoulder_a"
            />
          </label>
          <label class="box-number">
            p
            <input
              type="number"
              name="rightShoulder_p"
              v-model="store.sheetData.equip.rightShoulder_p"
            />
          </label>
          <label class="box-text">
            m
            <input
              type="text"
              name="rightShoulder_m"
              v-model="store.sheetData.equip.rightShoulder_m"
            />
          </label>
          <label class="box-number">
            c
            <input
              type="number"
              name="rightShoulder_c"
              v-model="store.sheetData.equip.rightShoulder_c"
            />
          </label>
          <label class="box-number">
            r
            <input
              type="number"
              name="rightShoulder_r"
              v-model="store.sheetData.equip.rightShoulder_r"
            />
          </label>
          <label class="box-text">
            e
            <input
              type="text"
              name="rightShoulder_e"
              v-model="store.sheetData.equip.rightShoulder_e"
            />
          </label>
          <label class="box-weight">
            %d
            <input
              type="number"
              name="rightShoulder_d"
              v-model="store.sheetData.equip.rightShoulder_d"
            />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-arm-right">
      <button type="button" @click="showDialog('arm-right')">
        <img src="" alt="" />
      </button>
      <dialog id="arm-right">
        <p>Right arm</p>
        <div>
          <label class="box-name">
            <input type="text" name="rightArm_name" v-model="store.sheetData.equip.rightArm_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="rightArm_t" v-model="store.sheetData.equip.rightArm_t" />
          </label>
          <label class="box-number">
            a
            <input type="number" name="rightArm_a" v-model="store.sheetData.equip.rightArm_a" />
          </label>
          <label class="box-number">
            p
            <input type="number" name="rightArm_p" v-model="store.sheetData.equip.rightArm_p" />
          </label>
          <label class="box-text">
            m
            <input type="text" name="rightArm_m" v-model="store.sheetData.equip.rightArm_m" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="rightArm_c" v-model="store.sheetData.equip.rightArm_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="rightArm_r" v-model="store.sheetData.equip.rightArm_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="rightArm_e" v-model="store.sheetData.equip.rightArm_e" />
          </label>
          <label class="box-weight">
            %d
            <input type="number" name="rightArm_d" v-model="store.sheetData.equip.rightArm_d" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-hand-right">
      <button type="button" @click="showDialog('hand-right')">
        <img src="" alt="" />
      </button>
      <dialog id="hand-right">
        <p>Right hand</p>
        <div>
          <label class="box-name">
            <input
              type="text"
              name="rightHand_name"
              v-model="store.sheetData.equip.rightHand_name"
            />
          </label>
          <label class="box-text">
            t
            <input type="text" name="rightHand_t" v-model="store.sheetData.equip.rightHand_t" />
          </label>
          <label class="box-number">
            a
            <input type="number" name="rightHand_a" v-model="store.sheetData.equip.rightHand_a" />
          </label>
          <label class="box-number">
            p
            <input type="number" name="rightHand_p" v-model="store.sheetData.equip.rightHand_p" />
          </label>
          <label class="box-text">
            m
            <input type="text" name="rightHand_m" v-model="store.sheetData.equip.rightHand_m" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="rightHand_c" v-model="store.sheetData.equip.rightHand_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="rightHand_r" v-model="store.sheetData.equip.rightHand_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="rightHand_e" v-model="store.sheetData.equip.rightHand_e" />
          </label>
          <label class="box-weight">
            %d
            <input type="number" name="rightHand_d" v-model="store.sheetData.equip.rightHand_d" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-leg-right">
      <button type="button" @click="showDialog('leg-right')">
        <img src="" alt="" />
      </button>
      <dialog id="leg-right">
        <p>Right leg</p>
        <div>
          <label class="box-name">
            <input type="text" name="rightLeg_name" v-model="store.sheetData.equip.rightLeg_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="rightLeg_t" v-model="store.sheetData.equip.rightLeg_t" />
          </label>
          <label class="box-number">
            a
            <input type="number" name="rightLeg_a" v-model="store.sheetData.equip.rightLeg_a" />
          </label>
          <label class="box-number">
            p
            <input type="number" name="rightLeg_p" v-model="store.sheetData.equip.rightLeg_p" />
          </label>
          <label class="box-text">
            m
            <input type="text" name="rightLeg_m" v-model="store.sheetData.equip.rightLeg_m" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="rightLeg_c" v-model="store.sheetData.equip.rightLeg_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="rightLeg_r" v-model="store.sheetData.equip.rightLeg_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="rightLeg_e" v-model="store.sheetData.equip.rightLeg_e" />
          </label>
          <label class="box-weight">
            %d
            <input type="number" name="rightLeg_d" v-model="store.sheetData.equip.rightLeg_d" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-foot-right">
      <button type="button" @click="showDialog('foot-right')">
        <img src="" alt="" />
      </button>
      <dialog id="foot-right">
        <p>Right foot</p>
        <div>
          <label class="box-name">
            <input
              type="text"
              name="rightFoot_name"
              v-model="store.sheetData.equip.rightFoot_name"
            />
          </label>
          <label class="box-text">
            t
            <input type="text" name="rightFoot_t" v-model="store.sheetData.equip.rightFoot_t" />
          </label>
          <label class="box-number">
            a
            <input type="number" name="rightFoot_a" v-model="store.sheetData.equip.rightFoot_a" />
          </label>
          <label class="box-number">
            p
            <input type="number" name="rightFoot_p" v-model="store.sheetData.equip.rightFoot_p" />
          </label>
          <label class="box-text">
            m
            <input type="text" name="rightFoot_m" v-model="store.sheetData.equip.rightFoot_m" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="rightFoot_c" v-model="store.sheetData.equip.rightFoot_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="rightFoot_r" v-model="store.sheetData.equip.rightFoot_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="rightFoot_e" v-model="store.sheetData.equip.rightFoot_e" />
          </label>
          <label class="box-weight">
            %d
            <input type="number" name="rightFoot_d" v-model="store.sheetData.equip.rightFoot_d" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-weapon">
      <button type="button" class="long" @click="showDialog('weapon')">
        <img src="" alt="" />
      </button>
      <dialog id="weapon">
        <p>Weapon of choice</p>
        <div>
          <label class="box-name">
            <input type="text" name="weapon_name" v-model="store.sheetData.equip.weapon_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="weapon_t" v-model="store.sheetData.equip.weapon_t" />
          </label>
          <label class="box-number">
            a
            <input type="number" name="weapon_a" v-model="store.sheetData.equip.weapon_a" />
          </label>
          <label class="box-number">
            p
            <input type="number" name="weapon_p" v-model="store.sheetData.equip.weapon_p" />
          </label>
          <label class="box-text">
            m
            <input type="text" name="weapon_m" v-model="store.sheetData.equip.weapon_m" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="weapon_c" v-model="store.sheetData.equip.weapon_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="weapon_r" v-model="store.sheetData.equip.weapon_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="weapon_e" v-model="store.sheetData.equip.weapon_e" />
          </label>
          <label class="box-weight">
            <input type="text" name="weapon_dmg" v-model="store.sheetData.equip.weapon_dmg" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-shield">
      <button type="button" class="long" @click="showDialog('shield')">
        <img src="" alt="" />
      </button>
      <dialog id="shield">
        <p>Shield</p>
        <div>
          <label class="box-name">
            <input type="text" name="shield_name" v-model="store.sheetData.equip.shield_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="shield_t" v-model="store.sheetData.equip.shield_t" />
          </label>
          <label class="box-number">
            a
            <input type="number" name="shield_a" v-model="store.sheetData.equip.shield_a" />
          </label>
          <label class="box-number">
            p
            <input type="number" name="shield_p" v-model="store.sheetData.equip.shield_p" />
          </label>
          <label class="box-text">
            m
            <input type="text" name="shield_m" v-model="store.sheetData.equip.shield_m" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="shield_c" v-model="store.sheetData.equip.shield_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="shield_r" v-model="store.sheetData.equip.shield_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="shield_e" v-model="store.sheetData.equip.shield_e" />
          </label>
          <label class="box-weight">
            %d
            <input type="text" name="shield_d" v-model="store.sheetData.equip.shield_d" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-sheath">
      <button type="button" class="short" @click="showDialog('sheath')">
        <img src="" alt="" />
      </button>
      <dialog id="sheath">
        <p>Sheath</p>
        <div>
          <label class="box-name">
            <input type="text" name="sheath_name" v-model="store.sheetData.equip.sheath_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="sheath_t" v-model="store.sheetData.equip.sheath_t" />
          </label>
          <label class="box-number">
            a
            <input type="number" name="sheath_a" v-model="store.sheetData.equip.sheath_a" />
          </label>
          <label class="box-number">
            p
            <input type="number" name="sheath_p" v-model="store.sheetData.equip.sheath_p" />
          </label>
          <label class="box-text">
            m
            <input type="text" name="sheath_m" v-model="store.sheetData.equip.sheath_m" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="sheath_c" v-model="store.sheetData.equip.sheath_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="sheath_r" v-model="store.sheetData.equip.sheath_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="sheath_e" v-model="store.sheetData.equip.sheath_e" />
          </label>
          <label class="box-weight">
            %d
            <input type="number" name="sheath_d" v-model="store.sheetData.equip.sheath_d" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-magic">
      <button type="button" class="long" @click="showDialog('magic')">
        <img src="" alt="" />
      </button>
      <dialog id="magic">
        <p>Lorness</p>
        <div>
          <label class="box-name">
            <input type="text" name="magic_name" v-model="store.sheetData.equip.magic_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="magic_t" v-model="store.sheetData.equip.magic_t" />
          </label>
          <label class="box-number">
            a
            <input type="number" name="magic_a" v-model="store.sheetData.equip.magic_a" />
          </label>
          <label class="box-number">
            p
            <input type="number" name="magic_p" v-model="store.sheetData.equip.magic_p" />
          </label>
          <label class="box-text">
            m
            <input type="text" name="magic_m" v-model="store.sheetData.equip.magic_m" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="magic_c" v-model="store.sheetData.equip.magic_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="magic_r" v-model="store.sheetData.equip.magic_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="magic_e" v-model="store.sheetData.equip.magic_e" />
          </label>
          <label class="box-weight">
            <input type="text" name="magic_dmg" v-model="store.sheetData.equip.magic_dmg" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-range">
      <button type="button" class="long" @click="showDialog('range')">
        <img src="" alt="" />
      </button>
      <dialog id="range">
        <p>Range weapon</p>
        <div>
          <label class="box-name">
            <input type="text" name="range_name" v-model="store.sheetData.equip.range_name" />
          </label>
          <label class="box-text">
            t
            <input type="text" name="range_t" v-model="store.sheetData.equip.range_t" />
          </label>
          <label class="box-number">
            a
            <input type="number" name="range_a" v-model="store.sheetData.equip.range_a" />
          </label>
          <label class="box-number">
            p
            <input type="number" name="range_p" v-model="store.sheetData.equip.range_p" />
          </label>
          <label class="box-text">
            m
            <input type="text" name="range_m" v-model="store.sheetData.equip.range_m" />
          </label>
          <label class="box-number">
            c
            <input type="number" name="range_c" v-model="store.sheetData.equip.range_c" />
          </label>
          <label class="box-number">
            r
            <input type="number" name="range_r" v-model="store.sheetData.equip.range_r" />
          </label>
          <label class="box-text">
            e
            <input type="text" name="range_e" v-model="store.sheetData.equip.range_e" />
          </label>
          <label class="box-weight">
            <input type="text" name="range_dmg" v-model="store.sheetData.equip.range_dmg" />
          </label>
        </div>
      </dialog>
    </section>
    <section class="box-quiver">
      <button type="button" class="short" @click="showDialog('quiver')">
        <img src="" alt="" />
      </button>
      <dialog id="quiver">
        <p>Quiver</p>
        <div>
          <label class="box-text">
            e
            <input type="text" name="quiver_e" v-model="store.sheetData.equip.quiver_e" />
          </label>
          <label class="box-weight">
            Mx
            <input type="text" name="quiver_mx" v-model="store.sheetData.equip.quiver_mx" />
          </label>
          <label class="box-text">
            <input type="text" name="quiver_text1" v-model="store.sheetData.equip.quiver_text1" />
          </label>
          <label class="box-weight">
            ac
            <input type="number" name="quiver_ac1" v-model="store.sheetData.equip.quiver_ac1" />
          </label>
          <label class="box-text">
            <input type="text" name="quiver_text2" v-model="store.sheetData.equip.quiver_text2" />
          </label>
          <label class="box-weight">
            ac
            <input type="number" name="quiver_ac2" v-model="store.sheetData.equip.quiver_ac2" />
          </label>
          <label class="box-text">
            <input type="text" name="quiver_text3" v-model="store.sheetData.equip.quiver_text3" />
          </label>
          <label class="box-weight">
            ac
            <input type="number" name="quiver_ac3" v-model="store.sheetData.equip.quiver_ac3" />
          </label>
          <label class="box-text">
            <input type="text" name="quiver_text4" v-model="store.sheetData.equip.quiver_text4" />
          </label>
          <label class="box-weight">
            ac
            <input type="number" name="quiver_ac4" v-model="store.sheetData.equip.quiver_ac4" />
          </label>
          <label class="box-text">
            <input type="text" name="quiver_text5" v-model="store.sheetData.equip.quiver_text5" />
          </label>
          <label class="box-weight">
            ac
            <input type="number" name="quiver_ac5" v-model="store.sheetData.equip.quiver_ac5" />
          </label>
          <label class="box-text">
            <input type="text" name="quiver_text6" v-model="store.sheetData.equip.quiver_text6" />
          </label>
          <label class="box-weight">
            ac
            <input type="number" name="quiver_ac6" v-model="store.sheetData.equip.quiver_ac6" />
          </label>
        </div>
      </dialog>
    </section>
  </form>
</template>
<script setup>
import { useSheetDataStore } from '@/stores/sheetDataStore'
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
</script>
