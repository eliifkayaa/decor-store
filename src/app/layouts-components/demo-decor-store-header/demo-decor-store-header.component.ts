import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-decor-store-header',
  templateUrl: './demo-decor-store-header.component.html',
  styleUrl: './demo-decor-store-header.component.css'
})
export class DemoDecorStoreHeaderComponent {
  openDropdown(event: MouseEvent) {
    const target = (event.currentTarget as HTMLElement).querySelector('.dropdown-menu');
    if (target) {
      target.classList.add('show');
    }
  }

  closeDropdown(event: MouseEvent) {
    const target = (event.currentTarget as HTMLElement).querySelector('.dropdown-menu');
    if (target) {
      target.classList.remove('show');
    }
  }
    
  toggleDropdown(event: MouseEvent) {
    event.preventDefault();
    const target = (event.currentTarget as HTMLElement).nextElementSibling;
    if (target && target.classList.contains('dropdown-menu')) {
      target.classList.toggle('show');
    }
 
  }
}
