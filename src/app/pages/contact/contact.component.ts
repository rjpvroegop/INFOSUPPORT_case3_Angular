import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string = 'My first angular2-google-maps project';
  lat: number = 52.040381;
  lng: number = 5.535294;
  constructor() { }

  ngOnInit() {
  }

}
