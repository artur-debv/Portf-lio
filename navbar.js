var nav = document.getElementById('nav');
window.addEventListener("scroll", function(event) {
            if(window.pageYOffset>100){

                nav.style.background = "white";
                document.getElementById('li_1').style.color = "black";
                document.getElementById('li_3').style.color = "black";
                document.getElementById('li_4').style.color = "black";
                document.getElementById('li_5').style.color = "black";
                document.getElementById('li_6').style.color = "black";
                
                

            }
            else{
                nav.style.background = "black";
                document.getElementById('li_1').style.color = "white";
                document.getElementById('li_3').style.color = "white";
                document.getElementById('li_4').style.color = "white";
                document.getElementById('li_5').style.color = "white";
                document.getElementById('li_6').style.color = "white";
                
                
            }
        });


        