document.querySelector('button').addEventListener('click', age);


function age()
{
    let day = document.getElementById('iday')
    let month = document.getElementById('imonth')
    let year = document.getElementById('iyear')
    let result = document.getElementById('result')

    result.innerHTML = "<p><strong>--</strong> <i>years</i></p> <p><strong>--</strong> <i>months</i></p> <p><strong>--</strong> <i>days</i></p>"

    if ((day.value.trim() == '') ||  (month.value.trim() == '') || (year.value.trim() == ''))
    {
       alert("Please fill in all fields!")
    } else
    {
      if (isValidDate(Number(day.value), Number(month.value), Number(year.value)) == true)
      {
        let resultDate = calculateFullAge(Number(day.value), Number(month.value), Number(year.value))

        result.innerHTML = `<p><strong>${resultDate.years} </strong><i>years</i></p> <p><strong>${resultDate.months} </strong><i>months</i></p> <p><strong>${resultDate.days} </strong><i>days</i></p>`
      } else
      {
        alert("Invalid date!");
      }
    } 

}

function isValidDate(day, month, year) {
  const date = new Date(year, month - 1, day)
  
  return (
    date.getFullYear() === parseInt(year) &&
    date.getMonth() === month - 1 &&
    date.getDate() === parseInt(day)
  )
}

function calculateFullAge(birthDay, birthMonth, birthYear) {
  const today = new Date();
  const birthDate = new Date(birthYear, birthMonth - 1, birthDay); // month is zero-based

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust if current day is less than birth day
  if (days < 0) {
    months--;
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate(); // get days of previous month
  }

  // Adjust if current month is less than birth month
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

