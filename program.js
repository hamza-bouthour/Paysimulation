
function grossPay(hourlyPay, totalHours) {
    var hp = document.getElementById('hourlyPay').value;
    var th = document.getElementById('totalHours').value;
    var bn = document.getElementById('bonus').value;
    if (th <= 40 && bn > 1 ) {  
        var res = parseFloat(bn) + parseFloat(th) * parseFloat(hp); 
        var tot = parseFloat(res) * 90/100;
         document.getElementById("result1").innerHTML = ' $ ' + tot;   
    }
     else if    (th <= 40 && bn == 0 ) {  
        var res = parseFloat(th) * parseFloat(hp); 
        var tot = parseFloat(res) * 90/100;
        document.getElementById("result1").innerHTML = ' $ ' + tot;  
    }
    else if ( th > 40 && bn > 0) {
        var res = (parseFloat(th) - 40) * (parseFloat(hp) * 1.5) + (40 * parseFloat(hp)) + parseFloat(bn); 
        var tot = parseFloat(res) * 90/100;
        document.getElementById("result1").innerHTML = ' $ ' + tot;

    }
    else
    var res = (parseFloat(th) - 40) * (parseFloat(hp) * 1.5) + (40 * parseFloat(hp)); 
    var tot = parseFloat(res) * 90/100;
    document.getElementById("result1").innerHTML = ' $ ' + tot;
       
}
$(function(){
    $("#logo").hide();
});