module.exports = (cardNumber) => {
  if (cardNumber.match(/^3[47][0-9]{3}/)) {
    return 'Amex'
  }
  if (cardNumber.match(/^((?!504175))^((?!5067))(^50[0-9]{4})/)) {
    return 'Aura'
  }
  if (cardNumber.match(/^636117/)) {
    return 'Banese Card'
  }
  if (cardNumber.match(/(60420[1-9]|6042[1-9][0-9]|6043[0-9]{2}|604400)/)) {
    return 'Cabal'
  }
  if (cardNumber.match(/(36[0-8][0-9]{3}|369[0-8][0-9]{2}|3699[0-8][0-9]|36999[0-9])/)) {
    return 'Diners'
  }
  if (cardNumber.match(/^6(?:011|5[0-9]{2})[0-9]{2}/)) {
    return 'Discover'
  }
  if (cardNumber.match(/^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/)) {
    return 'Elo'
  }
  if (cardNumber.match(/^628167/)) {
    return 'Fort Brasil'
  }
  if (cardNumber.match(/^605032/)) {
    return 'Grand Card'
  }
  if (cardNumber.match(/^606282|^3841(?:[0|4|6]{1})0/)) {
    return 'Hipercard'
  }
  if (cardNumber.match(/^(?:2131|1800|35\d{3})/)) {
    return 'JCB'
  }
  if (cardNumber.match(/^((5(([1-2]|[4-5])[0-9]{4}|0((1|6)([0-9]{3}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{3})|(506387))/)) {
    return 'Mastercard'
  }
  if (cardNumber.match(/^636085/)) {
    return 'Personal Card'
  }
  if (cardNumber.match(/^627892|^636414/)) {
    return 'Sorocred'
  }
  if (cardNumber.match(/^606444|^606458|^606482/)) {
    return 'Valecard'
  }
  if (cardNumber.match(/^4[0-9]{5}/)) {
    return 'Visa'
  }
  return null
}
