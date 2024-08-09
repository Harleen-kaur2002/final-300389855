// get the date from the input field
function getDate() {
    
    var datetime= now.toLocaleString();
  
    document.getElementById("demo").innerHTML = datetime;
}


function start() {
    var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();


    var x = setInterval(function() {
    
  
      var now = new Date().getTime();
        
     
      var distance = countDownDate - now;
        
      
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
       + seconds + "s ";
        
    
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
}
    
      
    

