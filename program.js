


function grossPay() {
    var hp = document.getElementById("hourlyPay").value;
    var th = document.getElementById("totalHours").value;
    if (hp <= 40) { 
        document.getElementById("result1").innerHTML = hp * th
        
    }
    else 
    return (hp - 40) * (th * 1.5) + (40 * hp)

}
//document.getElementById("result1").innerHTML = grossPay();

// function grossPay() {
//     var hp = document.getElementById("hourlyPay").Value;
//     var th = document.getElementById("totalHours").Value;
//     if (th != null) { 
//         return true
        
//     }
// }
// document.getElementById("result1").innerHTML = grossPay();
