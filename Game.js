AFRAME.registerComponent("gamePlay", {
    schema: {
      elementId: { type: "string", default: "#coinElem" },      
    },
    
    update: function() {
      this.isCollided(this.data.elementId);
    },
  
    isCollided: function(elementId) {
      const element = document.querySelector(elementId);
      element.addEventListener("collide", e => {
        if (elementId.includes("#coin")) {          
          console.log(elementId + "collision");
          
        }
        else if(elementId.includes("#fish")){
          console.log("collisionFish");
        }         
      });
    }
    
  });
  