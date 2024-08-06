import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
})
export class CreateTaskPage implements OnInit {
  projectTitle: string = '';
  description: string = '';
  assignedTo: any[] = [];



  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    const choices = new (window as any).Choices('#choices-multiple-remove-button', {
      removeItemButton: true,
      maxItemCount: -1, 
      searchResultLimit: 5,
      renderChoiceLimit: 5,
      placeholder: false,
      renderSelectedChoices: 'always'
    });
  }

  cancel() {
    this.navCtrl.navigateBack('/home');
  }

  createTask() {
    console.log('Create Task button clicked', this.assignedTo);
  }
}
