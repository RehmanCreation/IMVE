import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{
    isChecked = false;
  isHomeActive = true;
  tasks = [
    { title: 'Client meeting & discussions', assignedTo: 'Muhammad Nabeel', time: '12:00 PM', date: 'July 11, 2024', isChecked: false },
    { title: 'Project planning', assignedTo: 'John Doe', time: '2:00 PM', date: 'July 12, 2024', isChecked: false },
    { title: 'Team review', assignedTo: 'Jane Smith', time: '4:00 PM', date: 'July 13, 2024', isChecked: false },
    { title: 'Client follow-up', assignedTo: 'Sarah Lee', time: '10:00 AM', date: 'July 14, 2024', isChecked: false }
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit(): void {
      this.getUser()
  }
  addClicked() {
    console.log('Add button clicked');
    this.navCtrl.navigateForward('/create-task'); 
  }

  viewAll() {
    this.navCtrl.navigateForward('/view-all');
  }

  navigateTo(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }

  onCheckboxChange(index: number, event: any) {

    this.tasks[index].isChecked = event.detail.checked;
    console.log('Task state:', this.tasks[index]);
  }

  goToHome() {
    this.navCtrl.navigateBack('/home');
  }

  user_data:any;
  getUser(){
    this.user_data = localStorage.getItem('userData');
    this.user_data = JSON.parse(this.user_data);
    this.user_data = this.user_data?.data?.info
    console.log(this.user_data);
    
  }
}
