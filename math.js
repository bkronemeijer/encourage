teller = {
  guess: function() {
    const millions = Math.random()
    const message = `You will earn ${millions} million Euros this year.`

    return message
  }
}

console.log(teller.guess())