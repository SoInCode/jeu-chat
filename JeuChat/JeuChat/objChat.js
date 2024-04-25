const monJson = {
  nom: "chat-lunette",
  type: "lunette",
  left: 0,
  top: 0,
  image: null,

  setAll: function (n, y, l, t) {
    this.nom = n;
    this.type = y;
    this.left = l;
    this.top = t;
  },

  creerImage: function () {
    this.image = document.createElement("IMG");
    this.image.setAttribute(
      "src",
      this.nom + ".png"
    ); /* src = va chercher l'image*/
    this.image.setAttribute("title", this.nom + " " + this.type);
    this.image.style.width = "60px";
    this.image.style.height = "60px";
    this.image.style.left = this.left + "px";
    this.image.style.top = this.top + "px";
    document.querySelector("body > div:nth-of-type(2)").appendChild(this.image);
  },

  deplacerH: function (v) {
    /*unité rajoutée pour déplacer à droite ou à gauche*/
    this.left = this.left + v;
    this.image.style.left = this.left + "px";
  },
};
