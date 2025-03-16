import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types'; 

declare var jQuery: any;

@Injectable({
  providedIn: 'root'
})
export class AnimeLoaderService {
  private swiperInstances: Swiper[] = [];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.removeGridLoading();
          this.reInitializeIsotope();
          this.reInitializeSwiper();
        }, 500);
      }
    });
  }

  removeGridLoading() {
    setTimeout(() => {
      const grids = document.querySelectorAll('.grid-loading');
      grids.forEach((grid) => {
        grid.classList.remove('grid-loading');
      });

      if (typeof jQuery !== 'undefined' && typeof jQuery.fn.isotope === 'function') {
        jQuery('.grid').isotope('layout');
      }
    }, 500);
  }

  reInitializeIsotope() {
    setTimeout(() => {
      if (typeof jQuery !== 'undefined' && typeof jQuery.fn.isotope === 'function') {
        jQuery('.grid').isotope('destroy');
        jQuery('.grid').isotope({
          layoutMode: 'masonry',
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: { columnWidth: '.grid-sizer' }
        });

        setTimeout(() => {
          jQuery('.grid').isotope('layout');
        }, 300);
      } else {
       // console.error("Isotope başlatılamadı. jQuery veya Isotope eksik olabilir!");
      }
    }, 500);
  }

  reInitializeSwiper() {
    setTimeout(() => {
      if (typeof Swiper !== 'undefined') {
       
        this.swiperInstances.forEach(swiper => swiper.destroy(true, true));
        this.swiperInstances = [];

        document.querySelectorAll('.swiper').forEach((swiperElement) => {
          const swiperInstance = new Swiper(swiperElement as HTMLElement, {
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
          } as SwiperOptions); 

          this.swiperInstances.push(swiperInstance);
        });
      } else {
       // console.error("Swiper başlatılamadı. Swiper kütüphanesi eksik olabilir!");
      }
    }, 500);
  }
}
