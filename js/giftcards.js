(function () {
  function getSessionParams(paramKey) {
    var params = window.sessionStorage.getItem('crm.session_completed_fields')
    params = JSON.parse(params)
    for (var key in params.data) {
      if (params.data[key].key === paramKey) {
          return params.data[key].value
      }
    }
    return null
  }
  function setCardUrls() {
    var cards = document.getElementsByClassName('card');
    var params = {
      'email': getSessionParams('email'),
      'first_name': getSessionParams('first-name'),
      'last_name': getSessionParams('last-name'),
      'street1': getSessionParams('address1'),
      'postal': getSessionParams('zip'),
      'phone': getSessionParams('phone-cell'),
      'date_of_birth': getSessionParams('dob')
    }
    url = 'https://www.fmstracker.com/rd/r.php?sid=1703&pub=440465&'
    url += $.param(params)
    for (var i = 0; i < cards.length; i++) {
      card = cards[i]
      card.href = url
    }
  }
  setCardUrls()
})()
