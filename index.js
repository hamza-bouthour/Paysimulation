
function grossPayEmployee(hourlyPay, totalHours) {
  let hourlyPayEmployee = document.getElementById('hourly-pay-employee').value;
  let totalHoursEmployee = document.getElementById('total-hours-employee').value;
  let bonusEmployee = document.getElementById('bonus-employee').value;
  let totalAmount = 0
  if (hourlyPayEmployee == null || hourlyPayEmployee == "" || totalHoursEmployee == null || totalHoursEmployee == "") {
    return false;
  }
  if (totalHoursEmployee <= 40 && bonusEmployee > 1) {
    res = parseFloat(bonusEmployee) + parseFloat(totalHoursEmployee) * parseFloat(hourlyPayEmployee);
    totalAmount = parseFloat(res) * 90 / 100;
    document.getElementById("amount").innerHTML = 'Your estimated pay is:' + ' $' + totalAmount;
    return true;
  }
  else if (totalHoursEmployee <= 40 && bonusEmployee == 0) {
    res = parseFloat(totalHoursEmployee) * parseFloat(hourlyPayEmployee);
    totalAmount = parseFloat(res) * 90 / 100;
    document.getElementById("amount").innerHTML = 'Your estimated pay is:' + ' $' + totalAmount;
    return true;
  }
  else if (totalHoursEmployee > 40 && bonusEmployee > 0) {
    res = (parseFloat(totalHoursEmployee) - 40) * (parseFloat(hourlyPayEmployee) * 1.5) + (40 * parseFloat(hourlyPayEmployee)) + parseFloat(bonusEmployee);
    totalAmount = parseFloat(res) * 90 / 100;
    document.getElementById("amount").innerHTML = 'Your estimated pay is:' + ' $' + totalAmount;
    return true;
  }
  else 
    res = (parseFloat(totalHoursEmployee) - 40) * (parseFloat(hourlyPayEmployee) * 1.5) + (40 * parseFloat(hourlyPayEmployee));
    totalAmount = parseFloat(res) * 90 / 100;
    document.getElementById("amount").innerHTML = 'Your estimated pay is:' + ' $' + totalAmount; 
    return true;
}

function grossPayEmployer(hourlyPay, totalHours) {
  let hourlyPayEmployer = document.getElementById('hourly-pay-employer').value;
  let totalHoursEmployer = document.getElementById('total-hours-employer').value;
  let bonusEmployer = document.getElementById('bonus-employer').value;
  let employeesNumber = document.getElementById('employees-number').value;
  let totalAmount = 0
  if (hourlyPayEmployer == null || hourlyPayEmployer == "" || totalHoursEmployer == null || totalHoursEmployer == "" || employeesNumber == null || employeesNumber == "" ) {
    return false
  }
  if (totalHoursEmployer <= 40 && bonusEmployer > 1) {
    res = parseFloat(bonusEmployer) + parseFloat(totalHoursEmployer) * parseFloat(hourlyPayEmployer);
    totalAmount = parseFloat(res) * parseFloat(employeesNumber);
    document.getElementById("amount-employer").innerHTML = 'Your estimated pay is:' + ' $' + totalAmount;
    return true
  }
  else if (totalHoursEmployer <= 40 && bonusEmployer == 0) {
    res = parseFloat(totalHoursEmployer) * parseFloat(hourlyPayEmployer);
    totalAmount = parseFloat(res) * parseFloat(employeesNumber);
    document.getElementById("amount-employer").innerHTML = 'Your estimated pay is:' + ' $' + totalAmount;
    return true
  }
  else if (totalHoursEmployer > 40 && bonusEmployer > 0) {
    res = (parseFloat(totalHoursEmployer) - 40) * (parseFloat(hourlyPayEmployer) * 1.5) + (40 * parseFloat(hourlyPayEmployer)) + parseFloat(bonusEmployer);
    totalAmount = parseFloat(res) * parseFloat(employeesNumber);
    document.getElementById("amount-employer").innerHTML = 'Your estimated pay is:' + ' $' + totalAmount;
    return true
  }
  else 
    res = (parseFloat(totalHoursEmployer) - 40) * (parseFloat(hourlyPayEmployer) * 1.5) + (40 * parseFloat(hourlyPayEmployer));
    totalAmount = parseFloat(res) * parseFloat(employeesNumber);
    document.getElementById("amount-employer").innerHTML = 'Your estimated pay is:' + ' $' + totalAmount; 
    return true
}


$(document).ready(function(){
  
  $('div.result input[type="button"]').on('click', function(e){
    e.preventDefault();
    let validationEmployee = grossPayEmployee();
    if (validationEmployee == true) {
    $('div#result-window').removeClass('hidden').addClass('show-result-employee');
    } else {
      $(' div.employee-estimator div.input-box').addClass('error');  
    }
  });

  $('button.restart').on('click', function() {
  $('div#result-window').removeClass('show-result-employee').addClass('hidden');  
  $('div#show-result-employer').removeClass('show-result-employee').addClass('hidden'); 
  });
  
  $('div.result-employer input[type="button"]').on('click', function(event) {
    event.preventDefault();
    let validationEmployer = grossPayEmployer();
    if (validationEmployer == true) {
    $('div#show-result-employer').removeClass('hidden').addClass('show-result-employee'); 
    } else { 
      $('div.employer-estimator div.input-box').addClass('error');
    }
  });
 
});

