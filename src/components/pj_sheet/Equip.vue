<style scoped>
@import '../../assets/sheet.css';

/*Botonera*/
.equip > div {
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
  background: transparent;
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
.box-head button {
  background-image: url(../../assets/icon/equip/head.png);
}
.box-chest button {
  background-image: url(../../assets/icon/equip/body.png);
}
.box-shoulder-left button {
  background-image: url(../../assets/icon/equip/shoulder-l.png);
}
.box-shoulder-right button {
  background-image: url(../../assets/icon/equip/shoulder-r.png);
}
@media screen and (min-width: 400px) {
  .equip {
    padding: 1.5rem 48rem;
  }
}
</style>

<template>
  <form class="equip" id="equip">
    <div class="shadow">
      <section class="box-pircing-left">
        <button type="button" class="trinket" @click="showDialog('pircing-left')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="pircing-left">
          <p>Left earring</p>
          <div>
            <label class="box-name"><input type="text" name="leftPir_name" /></label>
            <label class="box-text">t<input type="text" name="leftPir_t" /></label>
            <label class="box-number">c<input type="number" name="leftPir_c" /></label>
            <label class="box-number">r<input type="number" name="leftPir_r" /></label>
            <label class="box-text">e<input type="text" name="leftPir_e" /></label>
            <label class="box-weight">u<input type="number" name="leftPir_u" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-pircing-right">
        <button type="button" class="trinket" @click="showDialog('pircing-right')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="pircing-right">
          <p>Right earring</p>
          <div>
            <label class="box-name"><input type="text" name="rightPir_name" /></label>
            <label class="box-text">t<input type="text" name="rightPir_t" /></label>
            <label class="box-number">c<input type="number" name="rightPir_c" /></label>
            <label class="box-number">r<input type="number" name="rightPir_r" /></label>
            <label class="box-text">e<input type="text" name="rightPir_e" /></label>
            <label class="box-weight">u<input type="number" name="rightPir_u" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-face">
        <button type="button" class="trinket" @click="showDialog('face')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="face">
          <p>Face</p>
          <div>
            <label class="box-name"><input type="text" name="face_name" /></label>
            <label class="box-text">t<input type="text" name="face_t" /></label>
            <label class="box-number">c<input type="number" name="face_c" /></label>
            <label class="box-number">r<input type="number" name="face_r" /></label>
            <label class="box-text">e<input type="text" name="face_e" /></label>
            <label class="box-weight">u<input type="number" name="face_u" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-collar">
        <button type="button" class="trinket" @click="showDialog('collar')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="collar">
          <p>Necklace</p>
          <div>
            <label class="box-name"><input type="text" name="collar_name" /></label>
            <label class="box-text">t<input type="text" name="collar_t" /></label>
            <label class="box-number">c<input type="number" name="collar_c" /></label>
            <label class="box-number">r<input type="number" name="collar_r" /></label>
            <label class="box-text">e<input type="text" name="collar_e" /></label>
            <label class="box-weight">u<input type="number" name="collar_u" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-tatoo">
        <button type="button" class="trinket" @click="showDialog('tatoo')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="tatoo">
          <p>Tatoo</p>
          <div>
            <label class="box-name"><input type="text" name="tatoo_name" /></label>
            <label class="box-text">t<input type="text" name="tatoo_t" /></label>
            <label class="box-number">c<input type="number" name="tatoo_c" /></label>
            <label class="box-number">r<input type="number" name="tatoo_r" /></label>
            <label class="box-text">e<input type="text" name="tatoo_e" /></label>
            <label class="box-weight">u<input type="number" name="tatoo_u" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-kenwa">
        <button type="button" class="trinket" @click="showDialog('kenwa')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="kenwa">
          <p>Kenwa</p>
          <div>
            <label class="box-name"><input type="text" name="kenwa_name" /></label>
            <label class="box-text">t<input type="text" name="kenwa_t" /></label>
            <label class="box-number">c<input type="number" name="kenwa_c" /></label>
            <label class="box-number">r<input type="number" name="kenwa_r" /></label>
            <label class="box-text">e<input type="text" name="kenwa_e" /></label>
            <label class="box-weight">u<input type="number" name="kenwa_u" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-bracelet-left">
        <button type="button" class="trinket" @click="showDialog('bracelet-left')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="bracelet-left">
          <p>Left bracelet</p>
          <div>
            <label class="box-name"><input type="text" name="leftbracelet_name" /></label>
            <label class="box-text">t<input type="text" name="leftbracelet_t" /></label>
            <label class="box-number">c<input type="number" name="leftbracelet_c" /></label>
            <label class="box-number">r<input type="number" name="leftbracelet_r" /></label>
            <label class="box-text">e<input type="text" name="leftbracelet_e" /></label>
            <label class="box-weight">u<input type="number" name="leftbracelet_u" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-bracelet-right">
        <button type="button" class="trinket" @click="showDialog('bracelet-right')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="bracelet-right">
          <p>Right bracelet</p>
          <div>
            <label class="box-name"><input type="text" name="rightbracelet_name" /></label>
            <label class="box-text">t<input type="text" name="rightbracelet_t" /></label>
            <label class="box-number">c<input type="number" name="rightbracelet_c" /></label>
            <label class="box-number">r<input type="number" name="rightbracelet_r" /></label>
            <label class="box-text">e<input type="text" name="rightbracelet_e" /></label>
            <label class="box-weight">u<input type="number" name="rightbracelet_u" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-ring-left">
        <button type="button" class="trinket" @click="showDialog('ring-left')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="ring-left">
          <p>Left ring</p>
          <div>
            <label class="box-name"><input type="text" name="leftring_name" /></label>
            <label class="box-text">t<input type="text" name="leftring_t" /></label>
            <label class="box-number">c<input type="number" name="leftring_c" /></label>
            <label class="box-number">r<input type="number" name="leftring_r" /></label>
            <label class="box-text">e<input type="text" name="leftring_e" /></label>
            <label class="box-weight">u<input type="number" name="leftring_u" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-ring-right">
        <button type="button" class="trinket" @click="showDialog('ring-right')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="ring-right">
          <p>Right ring</p>
          <div>
            <label class="box-name"><input type="text" name="rightring_name" /></label>
            <label class="box-text">t<input type="text" name="rightring_t" /></label>
            <label class="box-number">c<input type="number" name="rightring_c" /></label>
            <label class="box-number">r<input type="number" name="rightring_r" /></label>
            <label class="box-text">e<input type="text" name="rightring_e" /></label>
            <label class="box-weight">u<input type="number" name="rightring_u" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-head">
        <button type="button" @click="showDialog('head')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="head">
          <p>Head</p>
          <div>
            <label class="box-name"><input type="text" name="head_name" /></label>
            <label class="box-text">t<input type="text" name="head_t" /></label>
            <label class="box-number">a<input type="number" name="head_a" /></label>
            <label class="box-number">p<input type="number" name="head_p" /></label>
            <label class="box-text">m<input type="text" name="head_m" /></label>
            <label class="box-number">c<input type="number" name="head_c" /></label>
            <label class="box-number">r<input type="number" name="head_r" /></label>
            <label class="box-text">e<input type="text" name="head_e" /></label>
            <label class="box-weight">%d<input type="number" name="head_d" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-chest">
        <button type="button" @click="showDialog('chest')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="chest">
          <p>Chest</p>
          <div>
            <label class="box-name"><input type="text" name="chest_name" /></label>
            <label class="box-text">t<input type="text" name="chest_t" /></label>
            <label class="box-number">a<input type="number" name="chest_a" /></label>
            <label class="box-number">p<input type="number" name="chest_p" /></label>
            <label class="box-text">m<input type="text" name="chest_m" /></label>
            <label class="box-number">c<input type="number" name="chest_c" /></label>
            <label class="box-number">r<input type="number" name="chest_r" /></label>
            <label class="box-text">e<input type="text" name="chest_e" /></label>
            <label class="box-weight">%d<input type="number" name="chest_d" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-waist">
        <button type="button" @click="showDialog('waist')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="waist">
          <p>Waist</p>
          <div>
            <label class="box-name"><input type="text" name="waist_name" /></label>
            <label class="box-text">t<input type="text" name="waist_t" /></label>
            <label class="box-number">a<input type="number" name="waist_a" /></label>
            <label class="box-number">p<input type="number" name="waist_p" /></label>
            <label class="box-text">m<input type="text" name="waist_m" /></label>
            <label class="box-number">c<input type="number" name="waist_c" /></label>
            <label class="box-number">r<input type="number" name="waist_r" /></label>
            <label class="box-text">e<input type="text" name="waist_e" /></label>
            <label class="box-weight">%d<input type="number" name="waist_d" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-shoulder-left">
        <button type="button" @click="showDialog('shoulder-left')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="shoulder-left">
          <p>Left shoulder</p>
          <div>
            <label class="box-name"><input type="text" name="leftshoulder_name" /></label>
            <label class="box-text">t<input type="text" name="leftshoulder_t" /></label>
            <label class="box-number">a<input type="number" name="leftshoulder_a" /></label>
            <label class="box-number">p<input type="number" name="leftshoulder_p" /></label>
            <label class="box-text">m<input type="text" name="leftshoulder_m" /></label>
            <label class="box-number">c<input type="number" name="leftshoulder_c" /></label>
            <label class="box-number">r<input type="number" name="leftshoulder_r" /></label>
            <label class="box-text">e<input type="text" name="leftshoulder_e" /></label>
            <label class="box-weight">%d<input type="number" name="leftshoulder_d" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-arm-left">
        <button type="button" @click="showDialog('arm-left')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="arm-left">
          <p>Left arm</p>
          <div>
            <label class="box-name"><input type="text" name="leftarm_name" /></label>
            <label class="box-text">t<input type="text" name="leftarm_t" /></label>
            <label class="box-number">a<input type="number" name="leftarm_a" /></label>
            <label class="box-number">p<input type="number" name="leftarm_p" /></label>
            <label class="box-text">m<input type="text" name="leftarm_m" /></label>
            <label class="box-number">c<input type="number" name="leftarm_c" /></label>
            <label class="box-number">r<input type="number" name="leftarm_r" /></label>
            <label class="box-text">e<input type="text" name="leftarm_e" /></label>
            <label class="box-weight">%d<input type="number" name="leftarm_d" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-hand-left">
        <button type="button" @click="showDialog('hand-left')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="hand-left">
          <p>Left hand</p>
          <div>
            <label class="box-name"><input type="text" name="lefthand_name" /></label>
            <label class="box-text">t<input type="text" name="lefthand_t" /></label>
            <label class="box-number">a<input type="number" name="lefthand_a" /></label>
            <label class="box-number">p<input type="number" name="lefthand_p" /></label>
            <label class="box-text">m<input type="text" name="lefthand_m" /></label>
            <label class="box-number">c<input type="number" name="lefthand_c" /></label>
            <label class="box-number">r<input type="number" name="lefthand_r" /></label>
            <label class="box-text">e<input type="text" name="lefthand_e" /></label>
            <label class="box-weight">%d<input type="number" name="lefthand_d" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-leg-left">
        <button type="button" @click="showDialog('leg-left')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="leg-left">
          <p>Left leg</p>
          <div>
            <label class="box-name"><input type="text" name="leftleg_name" /></label>
            <label class="box-text">t<input type="text" name="leftleg_t" /></label>
            <label class="box-number">a<input type="number" name="leftleg_a" /></label>
            <label class="box-number">p<input type="number" name="leftleg_p" /></label>
            <label class="box-text">m<input type="text" name="leftleg_m" /></label>
            <label class="box-number">c<input type="number" name="leftleg_c" /></label>
            <label class="box-number">r<input type="number" name="leftleg_r" /></label>
            <label class="box-text">e<input type="text" name="leftleg_e" /></label>
            <label class="box-weight">%d<input type="number" name="leftleg_d" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-foot-left">
        <button type="button" @click="showDialog('foot-left')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="foot-left">
          <p>Left foot</p>
          <div>
            <label class="box-name"><input type="text" name="leftfoot_name" /></label>
            <label class="box-text">t<input type="text" name="leftfoot_t" /></label>
            <label class="box-number">a<input type="number" name="leftfoot_a" /></label>
            <label class="box-number">p<input type="number" name="leftfoot_p" /></label>
            <label class="box-text">m<input type="text" name="leftfoot_m" /></label>
            <label class="box-number">c<input type="number" name="leftfoot_c" /></label>
            <label class="box-number">r<input type="number" name="leftfoot_r" /></label>
            <label class="box-text">e<input type="text" name="leftfoot_e" /></label>
            <label class="box-weight">%d<input type="number" name="leftfoot_d" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-shoulder-right">
        <button type="button" @click="showDialog('shoulder-right')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="shoulder-right">
          <p>Right shoulder</p>
          <div>
            <label class="box-name"><input type="text" name="leftshoulder_name" /></label>
            <label class="box-text">t<input type="text" name="leftshoulder_t" /></label>
            <label class="box-number">a<input type="number" name="leftshoulder_a" /></label>
            <label class="box-number">p<input type="number" name="leftshoulder_p" /></label>
            <label class="box-text">m<input type="text" name="leftshoulder_m" /></label>
            <label class="box-number">c<input type="number" name="leftshoulder_c" /></label>
            <label class="box-number">r<input type="number" name="leftshoulder_r" /></label>
            <label class="box-text">e<input type="text" name="leftshoulder_e" /></label>
            <label class="box-weight">%d<input type="number" name="leftshoulder_d" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-arm-right">
        <button type="button" @click="showDialog('arm-right')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="arm-right">
          <p>Right arm</p>
          <div>
            <label class="box-name"><input type="text" name="rightarm_name" /></label>
            <label class="box-text">t<input type="text" name="rightarm_t" /></label>
            <label class="box-number">a<input type="number" name="rightarm_a" /></label>
            <label class="box-number">p<input type="number" name="rightarm_p" /></label>
            <label class="box-text">m<input type="text" name="rightarm_m" /></label>
            <label class="box-number">c<input type="number" name="rightarm_c" /></label>
            <label class="box-number">r<input type="number" name="rightarm_r" /></label>
            <label class="box-text">e<input type="text" name="rightarm_e" /></label>
            <label class="box-weight">%d<input type="number" name="rightarm_d" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-hand-right">
        <button type="button" @click="showDialog('hand-right')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="hand-right">
          <p>Right hand</p>
          <div>
            <label class="box-name"><input type="text" name="righthand_name" /></label>
            <label class="box-text">t<input type="text" name="righthand_t" /></label>
            <label class="box-number">a<input type="number" name="righthand_a" /></label>
            <label class="box-number">p<input type="number" name="righthand_p" /></label>
            <label class="box-text">m<input type="text" name="righthand_m" /></label>
            <label class="box-number">c<input type="number" name="righthand_c" /></label>
            <label class="box-number">r<input type="number" name="righthand_r" /></label>
            <label class="box-text">e<input type="text" name="righthand_e" /></label>
            <label class="box-weight">%d<input type="number" name="righthand_d" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-leg-right">
        <button type="button" @click="showDialog('leg-right')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="leg-right">
          <p>Right leg</p>
          <div>
            <label class="box-name"><input type="text" name="rightleg_name" /></label>
            <label class="box-text">t<input type="text" name="rightleg_t" /></label>
            <label class="box-number">a<input type="number" name="rightleg_a" /></label>
            <label class="box-number">p<input type="number" name="rightleg_p" /></label>
            <label class="box-text">m<input type="text" name="rightleg_m" /></label>
            <label class="box-number">c<input type="number" name="rightleg_c" /></label>
            <label class="box-number">r<input type="number" name="rightleg_r" /></label>
            <label class="box-text">e<input type="text" name="rightleg_e" /></label>
            <label class="box-weight">%d<input type="number" name="rightleg_d" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-foot-right">
        <button type="button" @click="showDialog('foot-right')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="foot-right">
          <p>Right foot</p>
          <div>
            <label class="box-name"><input type="text" name="rightfoot_name" /></label>
            <label class="box-text">t<input type="text" name="rightfoot_t" /></label>
            <label class="box-number">a<input type="number" name="rightfoot_a" /></label>
            <label class="box-number">p<input type="number" name="rightfoot_p" /></label>
            <label class="box-text">m<input type="text" name="rightfoot_m" /></label>
            <label class="box-number">c<input type="number" name="rightfoot_c" /></label>
            <label class="box-number">r<input type="number" name="rightfoot_r" /></label>
            <label class="box-text">e<input type="text" name="rightfoot_e" /></label>
            <label class="box-weight">%d<input type="number" name="rightfoot_d" /></label>
          </div>
        </dialog>
      </section>

      <section class="box-weapon">
        <button type="button" class="long" @click="showDialog('weapon')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="weapon">
          <p>Weapon of choice</p>
          <div>
            <label class="box-name"><input type="text" name="weapon_name" /></label>
            <label class="box-text">t<input type="text" name="weapon_t" /></label>
            <label class="box-number">a<input type="number" name="weapon_a" /></label>
            <label class="box-number">p<input type="number" name="weapon_p" /></label>
            <label class="box-text">m<input type="text" name="weapon_m" /></label>
            <label class="box-number">c<input type="number" name="weapon_c" /></label>
            <label class="box-number">r<input type="number" name="weapon_r" /></label>
            <label class="box-text">e<input type="text" name="weapon_e" /></label>
            <label class="box-weight"><input type="text" name="weapon_dmg" value="D" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-shield">
        <button type="button" class="long" @click="showDialog('shield')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="shield">
          <p>Shield</p>
          <div>
            <label class="box-name"><input type="text" name="shield_name" /></label>
            <label class="box-text">t<input type="text" name="shield_t" /></label>
            <label class="box-number">a<input type="number" name="shield_a" /></label>
            <label class="box-number">p<input type="number" name="shield_p" /></label>
            <label class="box-text">m<input type="text" name="shield_m" /></label>
            <label class="box-number">c<input type="number" name="shield_c" /></label>
            <label class="box-number">r<input type="number" name="shield_r" /></label>
            <label class="box-text">e<input type="text" name="shield_e" /></label>
            <label class="box-weight">%d<input type="text" name="shield_d" value="D" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-sheath">
        <button type="button" class="short" @click="showDialog('sheath')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="sheath">
          <p>Sheath</p>
          <div>
            <label class="box-name"><input type="text" name="sheath_name" /></label>
            <label class="box-text">t<input type="text" name="sheath_t" /></label>
            <label class="box-number">a<input type="number" name="sheath_a" /></label>
            <label class="box-number">p<input type="number" name="sheath_p" /></label>
            <label class="box-text">m<input type="text" name="sheath_m" /></label>
            <label class="box-number">c<input type="number" name="sheath_c" /></label>
            <label class="box-number">r<input type="number" name="sheath_r" /></label>
            <label class="box-text">e<input type="text" name="sheath_e" /></label>
            <label class="box-weight">%d<input type="number" name="sheath_d" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-magic">
        <button type="button" class="long" @click="showDialog('magic')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="magic">
          <p>Lorness</p>
          <div>
            <label class="box-name"><input type="text" name="magic_name" /></label>
            <label class="box-text">t<input type="text" name="magic_t" /></label>
            <label class="box-number">a<input type="number" name="magic_a" /></label>
            <label class="box-number">p<input type="number" name="magic_p" /></label>
            <label class="box-text">m<input type="text" name="magic_m" /></label>
            <label class="box-number">c<input type="number" name="magic_c" /></label>
            <label class="box-number">r<input type="number" name="magic_r" /></label>
            <label class="box-text">e<input type="text" name="magic_e" /></label>
            <label class="box-weight"><input type="text" name="magic_dmg" value="D" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-range">
        <button type="button" class="long" @click="showDialog('range')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="range">
          <p>Range weapon</p>
          <div>
            <label class="box-name"><input type="text" name="range_name" /></label>
            <label class="box-text">t<input type="text" name="range_t" /></label>
            <label class="box-number">a<input type="number" name="range_a" /></label>
            <label class="box-number">p<input type="number" name="range_p" /></label>
            <label class="box-text">m<input type="text" name="range_m" /></label>
            <label class="box-number">c<input type="number" name="range_c" /></label>
            <label class="box-number">r<input type="number" name="range_r" /></label>
            <label class="box-text">e<input type="text" name="range_e" /></label>
            <label class="box-weight"><input type="text" name="range_dmg" value="D" /></label>
          </div>
        </dialog>
      </section>
      <section class="box-quiver">
        <button type="button" class="short" @click="showDialog('quiver')">
          <img src="../assets/adornos/box.png" alt="" />
        </button>
        <dialog id="quiver">
          <p>Quiver</p>
          <div>
            <label class="box-text">e<input type="text" name="quiver_e" /></label>
            <label class="box-weight">Mx<input type="text" name="quiver_mx" /></label>
            <label class="box-text"><input type="text" name="quiver_text1" /></label>
            <label class="box-weight">ac<input type="number" name="quiver_ac1" /></label>
            <label class="box-text"><input type="text" name="quiver_text2" /></label>
            <label class="box-weight">ac<input type="number" name="quiver_ac2" /></label>
            <label class="box-text"><input type="text" name="quiver_text3" /></label>
            <label class="box-weight">ac<input type="number" name="quiver_ac3" /></label>
            <label class="box-text"><input type="text" name="quiver_text4" /></label>
            <label class="box-weight">ac<input type="number" name="quiver_ac4" /></label>
            <label class="box-text"><input type="text" name="quiver_text5" /></label>
            <label class="box-weight">ac<input type="number" name="quiver_ac5" /></label>
            <label class="box-text"><input type="text" name="quiver_text6" /></label>
            <label class="box-weight">ac<input type="number" name="quiver_ac6" /></label>
          </div>
        </dialog>
      </section>
    </div>
  </form>
</template>

<script setup>
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
