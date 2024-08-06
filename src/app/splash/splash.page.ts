import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  initialImage: string = 'assets/images/e9f101d317f6d13239ef761ff311d36d.png';
  firstImage: string = 'assets/images/e9f101d317f6d13239ef761ff311d36d.png';
  secondImage: string = 'assets/images/i-mve-logo.png';
  showInitialImage: boolean = true;
  showFirstImage: boolean = false;
  showSecondImage: boolean = false;
  showText: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const animationDuration = 11000; 

    setTimeout(() => {
      this.showInitialImage = false;
      this.showFirstImage = true;
      setTimeout(() => {
        this.showSecondImage = true;
        this.showText = true;
        
        
        setTimeout(() => {
          this.router.navigateByUrl('/welcome');
        }, 2000); 
      }, 2000); 
    }, 2000);
  }
}
