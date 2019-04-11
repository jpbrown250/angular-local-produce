export class Booth {
    constructor(
    //   public id: number,
      public geoLocation: string, //needs class
      public coverPhoto: string,
      public website: string,
      public contactNumber: number,
      public boothType: "event" | "produce" | "food" | "entertainment" | "merchandise" | "other",
      public otherBoothType: string,
    ) {  }
}