import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  images: string[] = [
    'assets/images/banner 1.jpeg',
    'assets/images/banner 2.jpeg',
    'assets/images/banner 3.jpeg'
  ];
  currentIndex: number = 0;
  currentImage: string = this.images[this.currentIndex];
  interval: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.fadeToNextImage();
    }, 2000);
  }

  fadeToNextImage() {
    const currentImageElement = document.querySelector('.image-slider img');
    if (currentImageElement) {
      currentImageElement.classList.add('fade');
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.currentImage = this.images[this.currentIndex];
        currentImageElement.classList.remove('fade');
      }, 600);
    }
  }

  goToSlide(index: number) {
    clearInterval(this.interval);
    const currentImageElement = document.querySelector('.image-slider img');
    if (currentImageElement) {
      currentImageElement.classList.add('fade');
      setTimeout(() => {
        this.currentIndex = index;
        this.currentImage = this.images[this.currentIndex];
        currentImageElement.classList.remove('fade');
        this.startAutoSlide();
      }, 600);
    }
  }

  navigateToSignIn() {
    this.router.navigate(['/sign-in']);
  }
}
