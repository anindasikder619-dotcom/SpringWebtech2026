function press(val){
    document.getElementById("display").value += val;
    }
    
    function calculate(){
    try{
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
    }
    catch{
    document.getElementById("display").value = "Error";
    }
    }
    
    function clearDisplay(){
    document.getElementById("display").value = "";
    }