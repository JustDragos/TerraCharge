
export class StationsClass {
    constructor(latitude, longitude, shortAddress, icon) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.shortAddress = shortAddress;
        this.icon = icon;
        this.chargersInTotal = 0;
        this.chargersLeft = 0;
        this.hoursOpened = [9, 17];
        this.status = 0;
        this.distanceFromUser = 0;
        this.rating = 3.0;
        this.longAddress = "";
        // status - 0 => closed
        // status - 1 => opened
    }
    createStatus() {
        var hour = new Date().getHours();
        var minute = new Date().getMinutes()
        if (this.hoursOpened[0] <= hour && hour <= this.hoursOpened[1]) {
            return 1
        }
        return 0;
        // get current hour and minute
    }
};
