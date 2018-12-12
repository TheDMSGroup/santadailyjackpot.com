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
      'first_name': getSessionParams('firstname'),
      'last_name': getSessionParams('lastname'),
      'street1': getSessionParams('address1'),
      'postal': getSessionParams('zipcode'),
      'phone': getSessionParams('phone-cell'),
      'date_of_birth': getSessionParams('dob')
    }
    for (var i = 0; i < cards.length; i++) {
      card = cards[i]
      card.href += '&' + $.param(params)
    }
  }
  setCardUrls()
})()

/*


*/
