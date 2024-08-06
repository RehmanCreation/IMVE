import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  newPasswordType: string = 'password';
  confirmPasswordType: string = 'password';
  newPasswordEyeIcon: string = 'eye-off-outline';
  confirmPasswordEyeIcon: string = 'eye-off-outline';

  constructor() {}

  toggleNewPasswordVisibility() {
    if (this.newPasswordType === 'password') {
      this.newPasswordType = 'text';
      this.newPasswordEyeIcon = 'eye-outline';
    } else {
      this.newPasswordType = 'password';
      this.newPasswordEyeIcon = 'eye-off-outline';
    }
  }

  toggleConfirmPasswordVisibility() {
    if (this.confirmPasswordType === 'password') {
      this.confirmPasswordType = 'text';
      this.confirmPasswordEyeIcon = 'eye-outline';
    } else {
      this.confirmPasswordType = 'password';
      this.confirmPasswordEyeIcon = 'eye-off-outline';
    }
  }

  resetPassword() {
    console.log('Reset Password button clicked');
  }
}
