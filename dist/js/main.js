(function ($) {
  $(document).ready(function () {
    var showModal = false, randomCreated = false,
    bgimg= jQuery('#urlimginferiorpremio').val(),
    fgimg= jQuery('#urlimgsuperiorpremio').val();

    $('#scratchandwin').wScratchPad({
      size: 70,
      bg: 'dist/img/slide1.jpg', //bgimg
      realtime: true,
      fg: 'dist/img/slide2.jpg', //fgimg
      // 'cursor': 'url("http://jennamolby.com/scratch-and-win/images/coin1.png") 5 5, default',
      scratchMove: function (e, percent) {
        if (percent > 70 && !showModal) {
          showModal = true;
          this.clear();
          hiddeShowModal();
        }
      },
      scratchDown: async function (e) {
        nid = jQuery('#idtwig').val();
        if (!randomCreated) {
          randomCreated = true;
          try {
            await $.ajax({
              url: Drupal.url("ab_raspaygana/premio"),
              data: { id: nid },
              type: "POST",
              success: function (data) {
                jQuery(".content-description").append(data.titulo)
                jQuery(".imgwinner").attr("src", data.imagen)
              }
            });
          } catch (err) {
            jQuery(".content-description").append("Error interno")
            jQuery(".award.scratchAndWin").addClass("error")
          }
        }
      },
    });

    //show and hidde modal
    function hiddeShowModal() {
      $(".award.scratchAndWin").toggleClass("active");
      $("body").toggleClass("no-scrol");
    }

    // $("#showModal").on("click", hiddeShowModal);
  });
})(jQuery);