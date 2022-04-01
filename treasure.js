AFRAME.registerComponent("treasure", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        const id = `coin${i}`;
  
        const posX = Math.random() * 100 + -50;
        const posY = Math.random() * 5 + 5;
        const posZ = Math.random() * 60 + -40;

        const position = { x: posX, y: posY, z: posZ };
        this.createCoins(id, position);
      }
    },
    createCoins: function (id, position) {
      const treasure1 = document.querySelector("#treasureQ");
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id", id);
      coinEl.setAttribute("position", position);
      coinEl.setAttribute("material", "color", "#FFDF00");
     
      coinEl.setAttribute("geometry",{ primitive: "circle",radius: 1 });
      treasure1.appendChild(coinEl);
    }
  });
  