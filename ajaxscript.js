

  $(document).ready(function () {
    var index =0;
  $("button").click(function(){
       
     if(index == 0){
     $("#div1").show(); 
     index++;  
     }
     else if(index == 1 ){

        $("#div2").show();
        index++;
    }else if(index == 2){
        $("#div3").show();
        index++;
    }else if(index == 3){
       $("#div4").show(); 
       index++;
    }else if(index == 4){
        $("#div5").show(); 
       index++;
    }else if(index == 5){
        $("#div6").show();

    
    }
         
  });
   
  });
  