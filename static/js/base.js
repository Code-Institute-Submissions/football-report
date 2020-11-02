    // Get the current year for the copyright
    $('#year').text(new Date().getFullYear());
    // Modify slider responsiveness
    $('.carousel').carousel({
      interval: 6000,
      pause: 'hover'
    });
    $('.slider').slick({
      infinite: true,
      slideToShow: 1,
      slideToScroll: 1
    });
    // console.log("test")
    // Lightbox Init
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    });
    // Video Play
    $(function () {
      // Auto play modal video from stackoverflow
      $(".video").click(function () {
        var theModal = $(this).data("target"),
          videoSRC = $(this).attr("data-video"),
          videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
          $(theModal + ' iframe').attr('src', videoSRC);
        });
      });
    });
