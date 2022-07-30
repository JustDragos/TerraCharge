
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
        // status - 0 => closed
        // status - 1 => opened
    }
    
};
function getStatus(hoursArray){
    var hour = new Date().getHours();
    var minute = new Date().getMinutes()
    if (hoursArray[0] <= hour && hour <= hoursArray[1]){
        return 1
    }
    return 0;
    // get current hour and minute
} 