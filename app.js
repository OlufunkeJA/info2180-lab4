document.addEventListener("DOMContentLoaded",function(){
    btn = document.querySelector("button");

    btn.addEventListener("click", function(){
        //Read input from text field
        var input = document.querySelector("input").value;

        //Fetch data from AJAX using XMLHttpRequest object
        var request = new XMLHttpRequest();
        request.open("GET","superheroes.php?query=" + input,true);
        request.send();

        //Checks if the requested document is ready and sets alert
        request.onreadystatechange = function(){
            if (this.readyState === 4 && this.status === 200){
                //Filters 
                                
                //alert(request.responseText);
                div = document.querySelector("div#result");
                var text = request.responseText;
                div.innerHTML = text;
            }
        }        
    });
});