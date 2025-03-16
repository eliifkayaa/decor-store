import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AnimeLoaderService } from './services/anime-loader.service';

declare var jQuery: any;
declare var Swiper: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private animeLoaderService: AnimeLoaderService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.reInitializeIsotope();
          this.reInitializeSwiper();
        }, 500);
      }
    });
  }

  ngOnInit(): void {
    this.animeLoaderService.removeGridLoading();
    this.reInitializeSwiper();
  }

  // 🔄 Swiper'ı tekrar başlat
  reInitializeSwiper() {
    setTimeout(() => {
      if (typeof Swiper !== 'undefined') {
        document.querySelectorAll('.swiper').forEach((swiperElement) => {
          new Swiper(swiperElement, {
            slidesPerView: "auto",
            spaceBetween: 0,
            centeredSlides: true,
            speed: 8000,
            loop: true,
            allowTouchMove: false,
            autoplay: {
              delay: 1,
              disableOnInteraction: false
            },
            navigation: {
              nextEl: ".slider-four-slide-next-2",
              prevEl: ".slider-four-slide-prev-2"
            },
            effect: "slide"
          });
        });
      }
    }, 500);
  }

  // 🔄 Isotope'yi tekrar başlat (Önceden eklediğimiz)
  reInitializeIsotope() {
    setTimeout(() => {
      if (typeof jQuery !== 'undefined' && typeof jQuery.fn.isotope === 'function') {
        jQuery('.grid').isotope({
          layoutMode: 'masonry',
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: { columnWidth: '.grid-sizer' }
        });

        setTimeout(() => {
          jQuery('.grid').isotope('layout');
        }, 300);
      }
    }, 500);
  }
}
