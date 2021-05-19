


/**************btn-up*************/
buttonUp = document.querySelector(".button-up");

window.onscroll = ()=>{

    let scroll = document.documentElement.scrollTop;
      console.log(scroll)
   if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
   }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}


// Scroll up



const scrollUp=()=>{
    document.querySelector(".button-up").addEventListener("click", scrollUp);
    let currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}


/*************btn-hamburguer******/

const $bottom = document.querySelector(".hamburger button");
      $bottom.addEventListener("click", (e) => {
      $bottom.classList.toggle("open");
      });



/* ********** Menu ********** */
((d) => {
  const $btnMenu = d.querySelector(".hamburger button"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
    $bottom.classList.toggle("open");
  });
})(document);
/* ********** ContactForm ********** */
((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/edgarunipacifico@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);
