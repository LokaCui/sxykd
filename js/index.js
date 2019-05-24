$(document).ready(function () {
  $('.select-area .select-value').each(function () {
    if ($(this).next('select').find('option:selected').length != 0) {
      $(this).text($(this).next('select').find('option:selected').text());
    }
  });
  $('.select-area select').change(function () {
    var value = $(this).find('option:selected').text();
    $(this).parent('.select-area').find('.select-value').text(value);
  });
  $('.donate-btn').click(function (e) {
    e.stopPropagation()
    $('.donate-wrapper').css({
      transform: 'scaleY(1)'
    })
  })
  $('.wrapper').click(function () {
    $('.donate-wrapper').css({
      transform: 'scaleY(0)'
    })
  })
})