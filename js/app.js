function alterarStatus(a) {
    const itemSituation = ["Devolver", "Alugar"];
    let itemSelected = document.getElementById("game-" + a);
    let itemSelectedImg = itemSelected.querySelector("div");
    let buttonName = itemSelected.querySelector("a");

     if (buttonName.innerHTML == itemSituation[0]) {
        buttonName.innerHTML = itemSituation[1];
        buttonName.className = "dashboard__item__button";
        itemSelectedImg.className = "dashboard__item__img";
     } else {
        itemSelectedImg.className = "dashboard__item__img dashboard__item__img--rented"; 
        buttonName.className = "dashboard__item__button dashboard__item__button--return";
        buttonName.innerHTML = itemSituation[0];
      }
}