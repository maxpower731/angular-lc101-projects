import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Buy groceries', 'Brush teeth'];
   finishedChores = [ 'Empty dishwasher', 'Dishes', 'Floors', 'Stairs', 'Complete LaunchCode prep work', 'Cleaning'];

   trophyImage = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';

   constructor() { }

   ngOnInit() {
   }

}
