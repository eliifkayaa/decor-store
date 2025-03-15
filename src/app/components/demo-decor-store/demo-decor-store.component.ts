import { Component, OnInit  } from '@angular/core';

declare var jQuery: any; 
@Component({
  selector: 'app-demo-decor-store',
  templateUrl: './demo-decor-store.component.html',
  styleUrl: './demo-decor-store.component.css'
})
export class DemoDecorStoreComponent implements OnInit {
  ngOnInit(): void {
    jQuery(document).ready(function () {
      jQuery('#decor-store-slider').show().revolution({
        sliderType: "standard",
        delay: 9000,
        sliderLayout: 'fullscreen',
        autoHeight: 'off',
        stopLoop: "on",
        stopAfterLoops: 0,
        stopAtSlide: 1,
        navigation: {
          keyboardNavigation: "on",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          mouseScrollReverse: "default",
          onHoverStop: "off",
          touch: {
            touchenabled: "on",
            touchOnDesktop: "on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: true
          }
        },
        lazyType: "smart",
        spinner: "spinner0",
        fullScreenAlignForce: 'off',
        hideThumbsOnMobile: 'off',
        responsiveLevels: [1240, 1024, 778, 480],
        gridwidth: [1220, 1024, 778, 480],
        gridheight: [900, 1000, 960, 720],
        visibilityLevels: [1240, 1024, 1024, 480],
        fallbacks: {
          simplifyAll: 'on',
          nextSlideOnWindowFocus: 'off',
          disableFocusListener: false
        }
      });
    });
  }

}
