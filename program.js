// var form = document.getElementById("myForm");
// function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm());


// function asba() {
//     document.getElementById("result1").innerHTML = 'ye miboun';
// }
 //document.getElementById("calculate1").addEventListener("click", grossPay);
function grossPay(hourlyPay, totalHours) {
    //var hp = document.getElementById("hourlyPay").contentEditable;
    //var th = document.getElementById("totalHours").contentEditable;
    if (totalHours <= 40) { 
        //return hourlyPay * totalHours;
       // console.log(hourlyPay * totalHours);
        var res = (totalHours * hourlyPay);
        document.getElementById("result1").innerHTML = res;    
    } 
       var res = (totalHours - 40) * (hourlyPay * 1.5) + (40 * hourlyPay);
       document.getElementById("result1").innerHTML = res;   
}
//console.log('asba lik');
//document.getElementById("calculate1").addEventListener("click", grossPay());

//console.log(grossPay());
//console.log('hello jappa')
//document.getElementById("result1").innerHTML = grossPay();

// function grossPay() {
//     var hp = document.getElementById("hourlyPay").Value;
//     var th = document.getElementById("totalHours").Value;
//     if (th != null) { 
//         return true
        
//     }
// }
// document.getElementById("result1").innerHTML = grossPay();
// window.onload= function (){
//     function asba() {
//              document.getElementById("result1").innerHTML = 'ye miboun';
//          }
//         }        
//         ` `