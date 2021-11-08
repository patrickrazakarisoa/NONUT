jQuery($ => {
  var arr = JSON.parse(localStorage.getItem('checked')) || [];
  arr.forEach((c, i) => $('.checkbox').eq(i).prop('checked', c));

  $(".checkbox").click(() => {  
    var arr = $('.checkbox').map((i, el) => el.checked).get();
    localStorage.setItem("checked", JSON.stringify(arr));
  });
});
