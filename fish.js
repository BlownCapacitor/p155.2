AFRAME.registerComponent("fish1", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        const id = `fish${i}`;
  
        const posX = Math.random() * 100 + -50;
        const posY = Math.random() * 10 + 5;
        const posZ = Math.random() * 50 + -40;
        const position = { x: posX, y: posY, z: posZ };
        this.Fish(id, position);
      }
    },
    Fish: function (id, position) {
      const fishEntity = document.querySelector("#fishQ");
      var fishEl = document.createElement("a-entity");
  
      fishEl.setAttribute("id", id);
      fishEl.setAttribute("position", position);
      fishEl.setAttribute("rotation", { x: 0, y: 180, z: 0 });
  
      fishEl.setAttribute("scale", { x: 1, y: 1, z: 1 });
  
      fishEl.setAttribute("gltf-model", "fish/scene.gltf");
  
      
      fishEl.setAttribute("animation", {
        property: "position",
        to: "85 10 -25",
        loop: "true",
        dur: 5000
      });

      fishEl.setAttribute("animation-mixer", {});


      fishEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 2
      });
  
       fishEl.setAttribute("gamePlay", {
        elementId: `#${id}`,
      });

        fishEntity.appendChild(fishEl);
    }
  })
  