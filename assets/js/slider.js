const slickSlider1 = document.querySelector(".slickSlider1");
const slickSlider2 = document.querySelector(".slickSlider2");
if (slickSlider1) {
  $(slickSlider1).slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  });
}

if (slickSlider2) {
    $(slickSlider2).slick({
      dots: false,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 2,
      infinite: true,
      responsive: [
        {
          breakpoint: 1360,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 3,
            arrows: false,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            arrows: false,
          },
        },
      ],
    });
  }