import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  passwordType: string = 'password';
  eyeIcon: string = 'eye-off-outline';
  email: string = '';   
  password: string = ''; 
  isLoading: boolean = false;

  private loginUrl = 'https://pilotapi.app.i-mve.com/login';

  constructor(
    private router: Router,
    private http: HttpClient,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.eyeIcon = this.eyeIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }

  navigateToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  async login() {
    const body = {
      email: this.email,
      password: this.password,
    };

    this.isLoading = true;

    const loading = await this.loadingController.create({
      message: 'Signing in...',
      spinner: 'crescent',
      duration: 10000 
    });
    await loading.present();

    try {
    
      const token = localStorage.getItem('authToken'); 

      const headers = {
        Authorization: `Bearer ${token}`
      };

      const response: any = await this.http.post(this.loginUrl, body, { headers }).toPromise();
      console.log('API Response:', response);

      localStorage.setItem('userData', JSON.stringify(response));

      this.router.navigate(['/home']);  
    } catch (error) {
      console.error('Login failed', error);
      await this.presentAlert('Login Failed', 'Invalid email or password. Please try again.');
    } finally {
      this.isLoading = false;
      await loading.dismiss(); 
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
