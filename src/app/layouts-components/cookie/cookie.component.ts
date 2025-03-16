import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {
  showPopup: boolean = true; 

  ngOnInit(): void {
    const cookiesAccepted = sessionStorage.getItem('cookiesAccepted'); 
    console.log("Çerezler kabul edildi mi?", cookiesAccepted);

    if (cookiesAccepted === 'true') {
      this.showPopup = false; 
      //console.log("Popup açılmayacak çünkü çerezler kabul edilmiş.");
    } else {
      setTimeout(() => {
        this.showPopup = true;
        //console.log("Popup açıldı, showPopup:", this.showPopup);
      }, 1000);
    }
  }

  acceptCookies(): void {
    //console.log("Allow Cookies butonuna basıldı!");
    this.showPopup = false; 
    sessionStorage.setItem('cookiesAccepted', 'true'); 
  }
}
