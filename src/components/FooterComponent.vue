<style scoped>
footer {
  background-color: var(--marron);
  color: wheat;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
}
footer img {
  width: 6rem;
  margin-top: 2rem;
}
footer h4 {
  text-align: unset;
}
footer p {
  font-size: 0.8rem;
}
footer > div {
  width: 50%;
}
footer .pie {
  width: 80%;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
footer > div > div {
  margin: 1rem 0;
  height: 50%;
}
</style>

<template>
  <footer>
    <div class="group">
      <h4>Hulmenaria Team</h4>
      <img src="" alt="Creator Photo" />
      <p>Alejandro Serrato - Varushet</p>
      <img src="/img/logo.png" alt="Logo" />
    </div>
    <div class="pie">
      <div class="social">facebook y asín</div>
      <div class="crp">el about y esas cosas</div>
    </div>
  </footer>
</template>

<script setup></script>
