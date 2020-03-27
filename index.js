
function grossPay(hourlyPay, totalHours) {
  var hp = document.getElementById('hp1').value;
  var th = document.getElementById('th1').value;
  var bn = document.getElementById('b1').value;
  var tot = 0
  let res = 0
  if (th <= 40 && bn > 1) {
    res = parseFloat(bn) + parseFloat(th) * parseFloat(hp);
    tot = parseFloat(res) * 90 / 100;
    document.getElementById("amount").innerHTML = 'Your estimated pay is:' + ' $' + tot;
    console.log(tot);
  }
  else if (th <= 40 && bn == 0) {
    res = parseFloat(th) * parseFloat(hp);
    tot = parseFloat(res) * 90 / 100;
    document.getElementById("amount").innerHTML = 'Your estimated pay is:' + ' $' + tot;
    console.log(tot);
  }
  else if (th > 40 && bn > 0) {
    res = (parseFloat(th) - 40) * (parseFloat(hp) * 1.5) + (40 * parseFloat(hp)) + parseFloat(bn);
    tot = parseFloat(res) * 90 / 100;
    document.getElementById("amount").innerHTML = 'Your estimated pay is:' + ' $' + tot;
    console.log(tot);
  }
  else 
    res = (parseFloat(th) - 40) * (parseFloat(hp) * 1.5) + (40 * parseFloat(hp));
    tot = parseFloat(res) * 90 / 100;
    document.getElementById("amount").innerHTML = 'Your estimated pay is:' + ' $' + tot;
     console.log(tot);
  
}


$(document).ready(function(){
 
  $('input[type="button"]').on('click', function(e){

    e.preventDefault();
    // e.preventPropagation();
    // $('#asba').text('Your estimated pay is' + ' $ ' + tot);
    $('div#result-window').removeClass('hidden').addClass('show-result-employee');
    // $('div.input-box').addClass('hidden');
    // $('employee-estimator').addClass('hidden');
  });

  $('button.restart').on('click', function() {
    $('div#result-window').removeClass('show-result-employee').addClass('hidden');
    
  });
  

});

