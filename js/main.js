$('#totop').click(function () {
  $('body,html').animate({ scrollTop: 0 }, 0)
  if ($('#sitenav').is(':hidden')) {
    $('#sitenav').show()
  } else {
    $('#sitenav').hide()
  }

  return false
})
$('#goplay').click(function () {
  var tit = $('#goplay').attr('name')
  window.location.href = 'https://www.banmnw.com/film/search.php?q=' + tit
})
