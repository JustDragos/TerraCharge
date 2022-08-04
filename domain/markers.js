
export class StationsClass{
    constructor(latitude, longitude, address, icon){
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
        this.icon = icon;
        this.idInList = 0;
        this.chargersInTotal = 0;
        this.chargersLeft = 0;
        this.hoursOpened = [9, 17];
        this.status = 0;
        this.distanceFromUser = 0;
        // status - 0 => closed
        // status - 1 => opened
    }
    createStatus(){
        var hour = new Date().getHours();
        var minute = new Date().getMinutes()
        if (this.hoursOpened[0] <= hour && hour <= this.hoursOpened[1]){
            return 1
        }
        return 0;
        // get current hour and minute
    } 
    calculateDistance(){
        // calculate distance between user and station
    }
};
