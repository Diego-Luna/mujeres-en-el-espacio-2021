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
var description_animation_02 = document.getElementById(
  "animation-description-02"
);
var description_animation_03 = document.getElementById(
  "animation-description-03"
);
var description_animation_04 = document.getElementById(
  "animation-description-04"
);
var description_animation_05 = document.getElementById(
  "animation-description-05"
);

var img_animation_01 = document.getElementById("animation-img-01");
var img_animation_02 = document.getElementById("animation-img-02");
var img_animation_03 = document.getElementById("animation-img-03");
var img_animation_04 = document.getElementById("animation-img-04");
var img_animation_05 = document.getElementById("animation-img-05");

// --> funciones a ejecutar del IntersectionObserver

function callback_animacion_01(entries, observer) {
  if (entries[0].isIntersecting) {
    // ->  Si la animacion_1_activation es false es que todavia no se a echo la animacion, y si es true hay que hacer la hacia atras
    if (animacion_1_activation === false) {
      console.log("---> on animacion 1");

      animacion_1_activation = true;
    } else {
      // animacion_1_activation = false;

      console.log("---> off animacion 1");

      title_animation_01.classList.remove("animacion-opacidad-no-visible");
      title_animation_01.classList.add("animacion-opacidad-visible");

      title_animation_02.classList.remove("animacion-opacidad-visible");
      title_animation_02.classList.add("animacion-opacidad-no-visible");

      description_animation_01.classList.remove("animacion-salida-izquierda");
      description_animation_01.classList.add("animacion-entrada-izquierda");

      description_animation_02.classList.remove("animacion-entrada-derecha");
      description_animation_02.classList.add("animacion-salida-derecha");

      img_animation_01.classList.remove("animacion-opacidad-no-visible");
      img_animation_01.classList.add("animacion-opacidad-visible");

      img_animation_02.classList.remove("animacion-opacidad-visible");
      img_animation_02.classList.add("animacion-opacidad-no-visible");
    }
  } else {
    // console.log("no Animar 1");
  }
}

function callback_animacion_02(entries, observer) {
  if (entries[0].isIntersecting) {
    if (animacion_2_activation === false) {
      console.log("---> on animacion 2");

      title_animation_01.classList.remove("animacion-opacidad-visible");
      title_animation_01.classList.add("animacion-opacidad-no-visible");

      title_animation_02.classList.remove("animacion-opacidad-no-visible");
      title_animation_02.classList.add("animacion-opacidad-visible");

      title_animation_03.classList.remove("animacion-opacidad-visible");
      title_animation_03.classList.add("animacion-opacidad-no-visible");

      description_animation_01.classList.remove("animacion-entrada-izquierda");
      description_animation_01.classList.add("animacion-salida-izquierda");

      description_animation_02.classList.remove("animacion-salida-derecha");
      description_animation_02.classList.add("animacion-entrada-derecha");

      img_animation_01.classList.remove("animacion-opacidad-visible");
      img_animation_01.classList.add("animacion-opacidad-no-visible");

      img_animation_02.classList.remove("animacion-opacidad-no-visible");
      img_animation_02.classList.add("animacion-opacidad-visible");

      img_animation_03.classList.remove("animacion-opacidad-visible");
      img_animation_03.classList.add("animacion-opacidad-no-visible");

      animacion_2_activation = true;
    } else {
      console.log("---> off animacion 2");
      title_animation_01.classList.remove("animacion-opacidad-visible");
      title_animation_01.classList.add("animacion-opacidad-no-visible");

      title_animation_03.classList.remove("animacion-opacidad-visible");
      title_animation_03.classList.add("animacion-opacidad-no-visible");

      title_animation_02.classList.remove("animacion-opacidad-no-visible");
      title_animation_02.classList.add("animacion-opacidad-visible");

      description_animation_01.classList.remove("animacion-entrada-izquierda");
      description_animation_01.classList.add("animacion-salida-izquierda");

      description_animation_02.classList.remove("animacion-salida-derecha");
      description_animation_02.classList.add("animacion-entrada-derecha");

      description_animation_03.classList.remove("animacion-entrada-derecha");
      description_animation_03.classList.add("animacion-salida-derecha");

      img_animation_01.classList.remove("animacion-opacidad-visible");
      img_animation_01.classList.add("animacion-opacidad-no-visible");

      img_animation_03.classList.remove("animacion-opacidad-visible");
      img_animation_03.classList.add("animacion-opacidad-no-visible");

      img_animation_02.classList.remove("animacion-opacidad-no-visible");
      img_animation_02.classList.add("animacion-opacidad-visible");

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

      title_animation_02.classList.remove("animacion-opacidad-visible");
      title_animation_02.classList.add("animacion-opacidad-no-visible");

      title_animation_03.classList.remove("animacion-opacidad-no-visible");
      title_animation_03.classList.add("animacion-opacidad-visible");

      title_animation_04.classList.remove("animacion-opacidad-visible");
      title_animation_04.classList.add("animacion-opacidad-no-visible");

      description_animation_02.classList.remove("animacion-entrada-derecha");
      description_animation_02.classList.add("animacion-salida-derecha");

      description_animation_03.classList.remove("animacion-salida-derecha");
      description_animation_03.classList.add("animacion-entrada-derecha");

      description_animation_04.classList.remove("animacion-entrada-derecha");
      description_animation_04.classList.add("animacion-salida-derecha");

      img_animation_02.classList.remove("animacion-opacidad-visible");
      img_animation_02.classList.add("animacion-opacidad-no-visible");

      img_animation_03.classList.remove("animacion-opacidad-no-visible");
      img_animation_03.classList.add("animacion-opacidad-visible");

      img_animation_04.classList.remove("animacion-opacidad-visible");
      img_animation_04.classList.add("animacion-opacidad-no-visible");

      // animacion_3_activation = true;
    } else {
      console.log("---> off animacion 3");

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

      title_animation_03.classList.remove("animacion-opacidad-visible");
      title_animation_03.classList.add("animacion-opacidad-no-visible");

      title_animation_04.classList.remove("animacion-opacidad-no-visible");
      title_animation_04.classList.add("animacion-opacidad-visible");

      title_animation_05.classList.remove("animacion-opacidad-visible");
      title_animation_05.classList.add("animacion-opacidad-no-visible");

      description_animation_03.classList.remove("animacion-entrada-derecha");
      description_animation_03.classList.add("animacion-salida-derecha");

      description_animation_04.classList.remove("animacion-salida-derecha");
      description_animation_04.classList.add("animacion-entrada-derecha");

      img_animation_03.classList.remove("animacion-opacidad-visible");
      img_animation_03.classList.add("animacion-opacidad-no-visible");

      img_animation_04.classList.remove("animacion-opacidad-no-visible");
      img_animation_04.classList.add("animacion-opacidad-visible");

      img_animation_05.classList.remove("animacion-opacidad-visible");

      // animacion_4_activation = true;
    } else {
      console.log("---> off animacion 4");

      animacion_4_activation = false;
    }
  } else {
    // console.log("no Animar 4");
  }
}
