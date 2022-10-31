

let animating = false;
let prevent = 0;

$('.boat_button').hover( () => {

console.log(prevent);

prevent++;

if ( prevent < 2 ) {

    if (! animating ) {

        animating = true;

        $('.button h1').animate({

            left: '165'

        }, 1500, ()  => {

            $('.button h1').css({

                'left' : '-90%'
        
            });

        });

        $('.buttonBoat').animate({

            left: '23'

        }, 1500);

    }

}

    }, () => {

if ( prevent < 2 ) {

    if ( animating ) {

        $('.button h1').animate({

            left: '0'

        }, 1500);

        $('.buttonBoat').animate({

            left: '100%'

        }, 1500, ()  => {

            $('.buttonBoat').css({

                'left' : '-80%'
        
            });

            $('buttonBoat').stop();

            animating = false;

            prevent = 0;

        });

    }

}

});