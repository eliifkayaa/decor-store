import { Component, OnInit, Renderer2 } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-demo26-shop',
  templateUrl: './demo26-shop.component.html',
  styleUrl: './demo26-shop.component.css'
})
export class Demo26ShopComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    console.log("ShopComponent yüklendi!");

    // CSS Dosyaları
    this.loadStyle('/assets/cssfordemo26-shop/assets/css/bootstrap.min.css');
    this.loadStyle('/assets/cssfordemo26-shop/assets/css/demo26.min.css');
    this.loadStyle('/assets/cssfordemo26-shop/assets/vendor/fontawesome-free/css/all.min.css');
    this.loadStyle('/assets/cssfordemo26-shop/assets/vendor/simple-line-icons/css/simple-line-icons.min.css');

    // JavaScript Dosyaları
    this.loadScript('/assets/cssfordemo26-shop/assets/js/jquery.min.js', () => {
      this.loadScript('/assets/cssfordemo26-shop/assets/js/bootstrap.bundle.min.js', () => {
        this.loadScript('/assets/cssfordemo26-shop/assets/js/plugins.min.js', () => {
          this.loadScript('/assets/cssfordemo26-shop/assets/js/optional/isotope.pkgd.min.js', () => {
            this.loadScript('/assets/cssfordemo26-shop/assets/js/nouislider.min.js', () => {
              this.loadScript('/assets/cssfordemo26-shop/assets/js/main.min.js', () => {
                this.initializeIsotope();
              });
            });
          });
        });
      });
    });
  }

  private loadStyle(href: string) {
    const link = this.renderer.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.type = 'text/css';
    document.head.appendChild(link);
    console.log(`${href} CSS dosyası yüklendi.`);
  }

  private loadScript(src: string, callback?: () => void) {
    const script = this.renderer.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => {
      console.log(`${src} yüklendi.`);
      if (callback) callback();
    };
    document.body.appendChild(script);
  }

  private initializeIsotope() {
    setTimeout(() => {
      if ($ && $.fn.isotope) {
        $('.grid').isotope({
          itemSelector: '.grid-item',
          layoutMode: 'masonry'
        });
        console.log('Isotope başarıyla başlatıldı!');
      } else {
        console.error('Isotope yüklenemedi!');
      }
    }, 1000);
  }
}
