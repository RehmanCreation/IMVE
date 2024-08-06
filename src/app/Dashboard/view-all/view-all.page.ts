import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.page.html',
  styleUrls: ['./view-all.page.scss'],
})
export class ViewAllPage {
  tasks = [
    { title: 'Client meeting & discussions', assignee: 'By: Muhammad Nabeel', time: '12:00 PM', date: 'July 11, 2024', isChecked: false },
    { title: 'Rehman meeting & discussions', assignee: 'By: Muhammad Daniyal', time: '12:00 PM', date: 'July 11, 2024', isChecked: false },
  ];

  constructor(private navCtrl: NavController) {}

  addClicked() {
    this.navCtrl.navigateForward('/create-task');
  }

  onCheckboxChange(task: any) {
    console.log('Checkbox state:', task.isChecked);
  }

  goHome() {
    this.navCtrl.navigateBack('/home');
  }

  goClient() {
    this.navCtrl.navigateBack('/client');
  }
}
