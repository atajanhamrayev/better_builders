const slickSlider1 = document.querySelector(".slickSlider1");
const slickSlider2 = document.querySelector(".slickSlider2");
const slickSlider3 = document.querySelector(".slickSlider3");
if (slickSlider1) {
  $(slickSlider1).slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    responsive: [
      {
        breakpoint: 1810,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1600,
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

  if (slickSlider3) {
    $(slickSlider3).slick({
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