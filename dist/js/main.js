(function ($) {
    $(document).ready(function () {
        var showModal = false;
        $('#scratchandwin').wScratchPad({
            size: 70,
            bg: 'dist/img/slide1.jpg',
            realtime: true,
            fg: 'dist/img/slide2.jpg',
            // 'cursor': 'url("http://jennamolby.com/scratch-and-win/images/coin1.png") 5 5, default',
            scratchMove: function (e, percent) {
                // $('#demo2-percent').html(percent);
                 // console.info("aqui", percent)
                if (percent > 70 && !showModal) {
                  showModal = true;
                  this.clear();
                  // alert("Mostrar modal")
                  hiddeShowModal();
                }
              }
        });

        //show and hidde modal
        function hiddeShowModal() {
          $(".award.scratchAndWin").toggleClass("active");
          $("body").toggleClass("no-scrol");
        }

        $("#showModal").on("click", hiddeShowModal);
    });
})(jQuery);