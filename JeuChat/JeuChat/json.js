window.onload = function () {
  const p = [];
  for (let i = 0; i < chats.length; i++) {
    p[i] = Object.create(monJson);
    p[i].setAll(chats[i].n, chats[i].y, chats[i].l, chats[i].t);
    p[i].creerImage();
  }
  //déplacer les personnages vers la droite
  document
    .querySelector("button:nth-of-type(3)")
    .addEventListener("click", function () {
      for (let i = 0; i < p.length; i++) {
        p[i].deplacerH(10);
      }
    });
  //déplacer les personnages vers la gauche
  document
    .querySelector("button:nth-of-type(4)")
    .addEventListener("click", function () {
      for (let i = 0; i < p.length; i++) {
        p[i].deplacerH(-10);
      }
    });

  //déplacer les personnages vers le haut
  document
    .querySelector("button:nth-of-type(1)")
    .addEventListener("click", function () {
      for (let i = 0; i < p.length; i++) {
        p[i].deplacerV(-10);
      }
    });

  //déplacer les personnages vers le bas
  document
    .querySelector("button:nth-of-type(2)")
    .addEventListener("click", function () {
      for (let i = 0; i < p.length; i++) {
        p[i].deplacerV(10);
      }
    });
};
