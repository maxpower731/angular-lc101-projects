import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Awesome Images!';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://e360.yale.edu/assets/site/Trees_JeroenVanNieuwenhoveFlickr.jpg';
  image3 = 'https://media.giphy.com/media/PiQejEf31116URju4V/giphy.gif';

  constructor() { }

  ngOnInit() {
  }

}
