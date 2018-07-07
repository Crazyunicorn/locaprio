

function displayNumber(nb) {
  var resultat = document.getElementById('resultat')
  resultat.innerHTML = nb
}
async function restaurants(number){

  var {value: number} = await swal({
    title: 'How many restaurants want you to try?',
    input: 'text',
    inputPlaceholder: '1, 2, 3 ...',
    showCancelButton: true,
    inputValidator: (value) => {
      return !value && 'Food is so good, try it!'
    }
  })

  if (number) {
    swal({type: 'success', title: 'You choose, ' + number + ' restaurants'})

  }
  console.log(number);
  displayNumber(number)
  return number;
  console.log(number);
}
