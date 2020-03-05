
function grossPay(hourlyPay, totalHours) {
    if (totalHours <= 40) {     
        document.getElementById("result1").innerHTML =' $ ' + (totalHours * hourlyPay);    
    } else
    document.getElementById("result1").innerHTML = '  $ ' + (totalHours - 40) * (hourlyPay * 1.5) + (40 * hourlyPay);   
}
