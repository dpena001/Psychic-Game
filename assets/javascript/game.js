     // FUNCTIONS
     
     // The Computer thinks. 

      function whatsthinking(list) {
        var whatsthinking =  list[Math.floor(Math.random()*list.length)];
        return whatsthinking;
      }
      
      // Print text into HTML.

      function printintoscreen(div,value){
      var printDiv = document.getElementById(div);
      printDiv.innerHTML = value;
      }

      // Print images into HTML.
      function printimagestoscreen(div,value){
      var printDiv = document.getElementById(div);
      
      if (value === "win"){
         printDiv.innerHTML = "<img src='assets/images/winners.jpg' style='width:357px;height: 143px;'>";
      }
      if (value === "loser") {
            printDiv.innerHTML = "<img src='assets/images/loser.jpg' style='width:357px;height: 143px;'>";
      }
      if (value === "guess"){
           printDiv.innerHTML = "<img src='assets/images/psychic.jpg' style='width:357px;height: 143px;'>";
        }
      
      }