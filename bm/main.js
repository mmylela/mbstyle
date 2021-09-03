$('#totop').click(function () {
  $('body,html').animate({ scrollTop: 0 }, 0)
  if ($('#sitenav').is(':hidden')) {
    $('#sitenav').show()
  } else {
    $('#sitenav').hide()
  }
  return false
})
$(document).ready(function () {
  var vid = $('#player').attr('v')
  if (typeof vid == 'undefined') {
    return false
  } else
    $.ajax({
      type: 'get',
      url: './api.php?type=detail&id=' + vid + '',
      async: 'true',
      success: function (res) {
        var key = JSON.parse(res)
        $('#player').append(
          '<iframe width="100%" height="100%" frameborder="0" scrolling="no" class="card-img-top" src="./jsplay.html?url=' +
            key.article.vurl +
            '"></iframe>'
        )
      },
    })
})
