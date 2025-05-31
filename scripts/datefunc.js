document.querySelector('button').addEventListener('click', age);


function age()
{
    let day = document.getElementById('iday')
    let month = document.getElementById('imonth')
    let year = document.getElementById('iyear')
    let result = document.getElementById('result')

    let erroDay = document.getElementById('errod')
    let erroMonth = document.getElementById('errom')
    let erroYear = document.getElementById('erroy')

    day.style.borderColor = 'hsl(0, 0%, 86%)'
    document.querySelector('div#day label').style.color = 'hsl(0, 1%, 44%)'
    month.style.borderColor = 'hsl(0, 0%, 86%)'
    document.querySelector('div#month label').style.color = 'hsl(0, 1%, 44%)'
    year.style.borderColor = 'hsl(0, 0%, 86%)'
    document.querySelector('div#year label').style.color = 'hsl(0, 1%, 44%)'

    result.innerHTML = "<p><strong>--</strong> <i>years</i></p> <p><strong>--</strong> <i>months</i></p> <p><strong>--</strong> <i>days</i></p>"

    erroDay.innerHTML = ''
    erroMonth.innerHTML = ''
    erroYear.innerHTML = ''

    if (day.value.trim() == '')
    {
      erroDay.innerHTML = 'This field is required'
      day.style.borderColor = '#ff9999'
      document.querySelector('div#day label').style.color = '#ff9999'
    } 
    if (month.value.trim() == '')
    {
      erroMonth.innerHTML = 'This field is required'
      month.style.borderColor = '#ff9999'
      document.querySelector('div#month label').style.color = '#ff9999'
    } 
    if (year.value.trim() == '')
    {
      erroYear.innerHTML = 'This field is required'
      year.style.borderColor = '#ff9999'
      document.querySelector('div#year label').style.color = '#ff9999'
    }

     if (day.value.trim() !== '' && month.value.trim() !== '' && year.value.trim() !== '')
    {
       let temErro = false
       let currentDate = new Date()

       if (Number(day.value) < 1 || Number(day.value) > 31)
       {
          temErro = true
          erroDay.innerHTML = 'Invalid day'
          day.style.borderColor = '#ff9999'
          document.querySelector('div#day label').style.color = '#ff9999'
       }

       if (Number(month.value) < 1 || Number(month.value) > 12)
       {
          temErro = true
          erroMonth.innerHTML = 'Invalid month'
          month.style.borderColor = '#ff9999'
          document.querySelector('div#month label').style.color = '#ff9999'
       }

       if (Number(year.value) < 1900 || Number(year.value) > currentDate.getFullYear() || (Number(month.value) > currentDate.getMonth() + 1 && Number(day.value) > currentDate.getDay()))
       {
          temErro = true
          erroYear.innerHTML = 'Invalid year'
          year.style.borderColor = '#ff9999'
          document.querySelector('div#year label').style.color = '#ff9999'
       }

       if (!temErro)
        {
          if (isValidDate(Number(day.value), Number(month.value), Number(year.value)) == false)
          {
            erroDay.innerHTML = 'Invalid day for this month'
            day.style.borderColor = '#ff9999'
            document.querySelector('div#day label').style.color = '#ff9999'
          } else 
          {
             let resultDate = calculateFullAge(Number(day.value), Number(month.value), Number(year.value))

              result.innerHTML = `<p><strong>${resultDate.years} </strong><i>years</i></p> <p><strong>${resultDate.months} </strong><i>months</i></p> <p><strong>${resultDate.days} </strong><i>days</i></p>`
          }
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

