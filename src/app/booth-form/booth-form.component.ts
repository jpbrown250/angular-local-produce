import { Component, OnInit } from '@angular/core';

import { Booth } from '../booth';

@Component({
  selector: 'app-booth-form',
  templateUrl: './booth-form.component.html',
  styleUrls: ['./booth-form.component.scss']
})
export class BoothFormComponent implements OnInit {

  // constructor() {
  // }

  ngOnInit() {
    console.log(new Booth(1010101010, "event").getBoothTypes());
    console.log("booth form loaded");
  }
  
  // boothType: Array<"event" | "produce" | "food" | "entertainment" | "merchandise" | "other"> = 
  //   ["event", "produce", "food", "entertainment", "merchandise", "other"];

  // model = new Booth(6197506456, this.boothType[1]);

  // submitted = false;

  // onSubmit() { this.submitted = true; }

  // // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }

}
