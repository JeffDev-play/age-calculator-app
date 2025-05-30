document.querySelector('button').addEventListener('click', age);
let form = document.getElementById('container')
 form.addEventListener('submit', function(e) {
   e.preventDefault();  });

function age()
{
    let day = document.getElementById('iday')
    day.setCustomValidity('O campo de e-mail é obrigatório.')
    day.reportValidity();
    let month = document.getElementById('imonth')
    let year = document.getElementById('iyear')
    // day = Number(day.value)
    // month = Number(month.value)
    // year = Number(year.value)
    let date = new Date()
    document.body.innerHTML += day.value


}