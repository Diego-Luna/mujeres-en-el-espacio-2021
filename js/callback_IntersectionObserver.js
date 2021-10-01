var animacion_1_activation = false;
var animacion_2_activation = false;
var animacion_3_activation = false;
var animacion_4_activation = false;

var title_animation_01 = document.getElementById("animation-title-01");
var title_animation_02 = document.getElementById("animation-title-02");
var title_animation_03 = document.getElementById("animation-title-03");
var title_animation_04 = document.getElementById("animation-title-04");
var title_animation_05 = document.getElementById("animation-title-05");

var description_animation_01 = document.getElementById(
  "animation-description-01"
);

// --> funciones a ejecutar del IntersectionObserver

function callback_animacion_01(entries, observer) {
  if (entries[0].isIntersecting) {
    // ->  Si la animacion_1_activation es false es que todavia no se a echo la animacion, y si es true hay que hacer la hacia atras
    if (animacion_1_activation === false) {
      console.log("---> on animacion 1");

      description_animation_01.className += " animacion-salida-izquierda";

      animacion_1_activation = true;
    } else {
      animacion_1_activation = false;
    }
  } else {
    // console.log("no Animar 1");
  }
}
function callback_animacion_02(entries, observer) {
  if (entries[0].isIntersecting) {
    if (animacion_2_activation === false) {
      console.log("---> on animacion 2");
      animacion_2_activation = true;
    } else {
      animacion_2_activation = false;
    }
  } else {
    // console.log("no Animar 2");
  }
}
function callback_animacion_03(entries, observer) {
  if (entries[0].isIntersecting) {
    if (animacion_3_activation === false) {
      console.log("---> on animacion 3");
      animacion_3_activation = true;
    } else {
      animacion_3_activation = false;
    }
  } else {
    // console.log("no Animar 3");
  }
}
function callback_animacion_04(entries, observer) {
  if (entries[0].isIntersecting) {
    if (animacion_4_activation === false) {
      console.log("---> on animacion 4");
      animacion_4_activation = true;
    } else {
      animacion_4_activation = false;
    }
  } else {
    // console.log("no Animar 4");
  }
}
