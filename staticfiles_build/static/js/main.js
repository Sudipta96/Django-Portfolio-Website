

/* ----------- Toggling nav menu -----------------------*/

const navToggleBtn = document.querySelector('.navbar-toggler');

		navToggleBtn.addEventListener('click', ()=>{
			$(".navbar-toggler").toggleClass('change');
		})



		/* ----------- Switching active nav link -----------------------*/

		jQuery(function($) {
				var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
				$('ul a').each(function() {
					if (this.href === path) {
						$(this).addClass('active');
					}
				});
			});


/* ------------Scrolling screen---------------------------*/

$(window).scroll(function() {
    let position = $(this).scrollTop();

    if (position >= 149) {
      $(".header").addClass("fixed-top");
      $(".header").css({"margin-top": "10px","padding": "10px 50px"})

    } else {
        $(".header").css({"margin-top": "15px", "padding": "15px 50px"})
        $(".header").removeClass("fixed-top");
    }
  });


/* ----------- Isotope filtering on portfolio -----------------------*/


// init Isotope
let $grid = $('.grid').isotope({
    // options
  });

  // filter items on button click
  $('.portfolio-section .filter-button-group').on( 'click', 'button', function() {
    let filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });

    // changing active color
    $('button').removeClass("active-color");
    $(this).addClass("active-color");

  });
