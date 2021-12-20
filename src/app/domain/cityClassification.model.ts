export class CityClassification{
  
    pinCode : string;
    cityImageId : number;
    imgNumber : number;
   
    constructor(pinCode : string, cityImageId : number, imgNumber : number){
        this.pinCode = pinCode;
        this.cityImageId = cityImageId;
        this.imgNumber = imgNumber;
    }
   
}