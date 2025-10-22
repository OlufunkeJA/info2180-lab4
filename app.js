document.addEventListener("DOMContentLoaded",function(){
    btn = document.querySelector("button");

    btn.addEventListener("click", function(){
        //Fetch data from AJAZ using XMLHttpRequest object
        var request = new XMLHttpRequest();
        request.open("GET","superheroes.php",true);
        request.send();
        console.log(request.readyState);

        //Checks if the requested document is ready and sets alert
        request.onreadystatechange = function(){
            if (this.readyState === 4 && this.status === 200){
                alert(request.responseText);
            }
        }        
    });
});