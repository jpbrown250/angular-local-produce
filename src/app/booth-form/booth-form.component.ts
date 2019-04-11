import { Component, OnInit } from '@angular/core';

import { Booth } from '../booth';

@Component({
  selector: 'app-booth-form',
  templateUrl: './booth-form.component.html',
  styleUrls: ['./booth-form.component.scss']
})
export class BoothFormComponent implements OnInit {

  model: Booth = {
    // location: {
    //   lat: 10,
    //   lng: 11
    // },
    coverPhoto: "/assets/vendor.jpg",
    website: "redhookfoodvendors.com",
    contactNumber: 3333333333,
    boothType: "food",
    date: new Date() //TODO: this should be set on submit
  }
  ngOnInit() {
    var vendor = {
      // location: {
      //   lat: 10,
      //   lng: 11
      // },
      coverPhoto: "/assets/vendor.jpg",
      website: "redhookfoodvendors.com",
      contactNumber: 3333333333,
      boothType: "food",
      date: new Date()
    }
    // console.log(new Booth(
    //   // vendor.location,
    //   vendor.coverPhoto,
    //   vendor.website,
    //   vendor.contactNumber,
    //   vendor.boothType
    // ));
  }
  
  // boothType: Array<"event" | "produce" | "food" | "entertainment" | "merchandise" | "other"> = 
  //   ["event", "produce", "food", "entertainment", "merchandise", "other"];

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  diagnostic() { return JSON.stringify(this.model); }
}
