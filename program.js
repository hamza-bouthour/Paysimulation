// var form = document.getElementById("myForm");
// function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm());


// function asba() {
//     document.getElementById("result1").innerHTML = 'ye miboun';
// }
// document.getElementById("calculate1").addEventListener("click", asba());
function grossPay() {
    console.log('ekhdem nayek');
    var hp = document.getElementById("hourlyPay").value;
    var th = document.getElementById("totalHours").value;
    if (hp <= 40) { 
        document.getElementById("result1").innerHTML = hp * th;
        console.log(hp * th);
        
    }
    else 
    console.log((hp - 40) * (th * 1.5) + (40 * hp));
    return (hp - 40) * (th * 1.5) + (40 * hp);
    

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