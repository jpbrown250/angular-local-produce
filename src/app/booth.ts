export class Booth {
    constructor(
        // public id: number,
        // public location: {lat: number, lng: number}, //needs class
        public coverPhoto: string,
        public website: string,
        public contactNumber: number,
        public boothType: string,
        // public boothType: "event" | "produce" | "food" | "entertainment" | "merchandise" | "other",
        // TODO: only if boothType is "other"
        public otherBoothType?: string,
        public date: Date = new Date(),
    ) {}
    // public getBoothTypes() {
    //     return ["event", "produce", "food", "entertainment", "merchandise", "other"];
    // }
}