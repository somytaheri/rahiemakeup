/**
 * Created by somi on 19/11/14.
 */

jQuery(document).ready(function ($) {
    var options = {
        $AutoPlay: true,
        $AutoPlayInterval: 3000,
        $SlideDuration: 1000,
        $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
            $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
            $ChanceToShow: 1,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
            $Steps: 1 ,                                     //[Optional] Steps to go for each navigation request, default value is 1

        }
    };
    var jssor_slider1 = new $JssorSlider$('slider1_container', options);
    var currentId;
    $('.imgModal').click(function() {
            currentId = $(this).attr('id');
            jssor_slider1.$GoTo(currentId);
            return currentId;
        }
    );

});

