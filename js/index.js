// importamos nuestros callback Intersection Observer
// ./callback_IntersectionObserver.js

// --> variables
const $principal = document.querySelector("#principal");
const $animacion_on_1 = document.querySelector("#animacion-on-1");
const $animacion_on_2 = document.querySelector("#animacion-on-2");
const $animacion_on_3 = document.querySelector("#animacion-on-3");
const $animacion_on_4 = document.querySelector("#animacion-on-4");
const $animacion_on_5 = document.querySelector("#animacion-on-5");
const $animacion_on_6 = document.querySelector("#animacion-on-6");

// --> configuracion del IntersectionObserver
const options = {
  // root: document.querySelector('body'),
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.5, // 0.5
};
const options_big = {
  // root: document.querySelector('body'),
  rootMargin: "0px 0px 0px 0px",
  threshold: 1, // 0.5
};

// --> Establecer el IntersectionObserver

const observer_animation_00 = new IntersectionObserver(
  callback_animacion_00,
  options_big
);
const observer_animation_01 = new IntersectionObserver(
  callback_animacion_01,
  options
);

const observer_animation_02 = new IntersectionObserver(
  callback_animacion_02,
  options
);

const observer_animation_03 = new IntersectionObserver(
  callback_animacion_03,
  options
);

const observer_animation_04 = new IntersectionObserver(
  callback_animacion_04,
  options
);

const observer_animation_05 = new IntersectionObserver(
  callback_animacion_05,
  options
);

const observer_animation_06 = new IntersectionObserver(
  callback_animacion_05,
  options
);

// --> IntersectionObserver esta escuchando

observer_animation_00.observe($principal);
observer_animation_01.observe($animacion_on_1);
observer_animation_02.observe($animacion_on_2);
observer_animation_03.observe($animacion_on_3);
observer_animation_04.observe($animacion_on_4);
observer_animation_05.observe($animacion_on_5);
observer_animation_06.observe($animacion_on_6);
