flatpickr("#dob", {
  dateFormat: "Y-m-d", 
  maxDate: "today" 
});

function calculateAge() {
  var dob = document.getElementById('dob').value;
  
  // Validation for empty input
  if (dob === "") {
    alert("Please enter your date of birth.");
    return;
  }
  
  var dobDate = new Date(dob);
  var todayDate = new Date();
  
  var ageYears = todayDate.getFullYear() - dobDate.getFullYear();
  var ageMonths = todayDate.getMonth() - dobDate.getMonth();
  var ageDays = todayDate.getDate() - dobDate.getDate();
  
  // Adjust age if birth month is later than current month,
  // or if birth month is the same but birth day is later than current day
  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
    if (ageDays < 0) {
      ageMonths--;
    
    }
  }
  
  document.getElementById('result').innerHTML = "Your age is: " + ageYears + " years, " + ageMonths + " months.";
}
