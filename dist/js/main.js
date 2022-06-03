(function ($) {
    $(document).ready(function () {
        console.warn("kjsjsjks")
        $('#scratchandwin').wScratchPad({
            size: 70,
            bg: 'https://dev-ruleta.pantheonsite.io/modules/custom/ab_raspaygana/dist/img/logo.png',
            realtime: true,
            fg: 'dist/img/slide2.jpg',
            // 'cursor': 'url("http://jennamolby.com/scratch-and-win/images/coin1.png") 5 5, default',
            scratchMove: function (e, percent) {
                // $('#demo2-percent').html(percent);
                  console.info("aqui", percent)
                // if (percent > 70) {
                //   this.clear();
                // alert("Mostrar modal")
                // }
              }
        });
    });
})(jQuery);