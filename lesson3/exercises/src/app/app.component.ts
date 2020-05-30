import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Exercises: Angular Lesson 3';

  color: string = 'green';
  height: number = 0;
  width: number = 0;
  message = 'Space shuttle ready for takeoff!';
  flightStatus: string = "Space shuttle ready for takeoff!";
  pixelsBottom: string = "0px";
  pixelsLeft: string = "0px";
  takeOffEnabled: boolean = true;


  takeOff():void {
      if (confirm("Confirm that the shuttle is ready for takeoff.")) {
        this.flightStatus = "Shuttle in flight.";
        this.color = "blue";
        this.upButton();
        this.takeOffEnabled = false;
      }
    }

    land():void {
      alert("The shuttle is landing. Landing gear engaged.");
      this.flightStatus = "The shuttle has landed.";
      this.color = "green";
      this.height = 0;
      this.pixelsBottom = "0px"
      this.takeOffEnabled = true;
    }

    abortMission():void {
      if (confirm("Really abort?")) {
        this.flightStatus = "Mission aborted";
        this.color = "red";
        this.height = 0;
        this.pixelsBottom = "0px";
        this.takeOffEnabled = true;
      }
    }

    upButton():void {
      this.height += 10000;
      this.pixelsBottom = parseInt(this.pixelsBottom) + 10 + "px";
    }

    downButton():void {
      if(this.height >= 10000){
        this.height -= 10000;
        this.pixelsBottom = parseInt(this.pixelsBottom) - 10 + "px";
      }
    }

    leftButton():void {
      if (parseInt(this.pixelsLeft) - 10 > 0) {
        this.pixelsLeft = parseInt(this.pixelsLeft) - 10 + "px";
      }
    }

    rightButton():void {
      this.pixelsLeft = parseInt(this.pixelsLeft) + 10 + "px";
    }

}
