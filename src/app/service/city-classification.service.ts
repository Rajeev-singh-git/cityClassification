import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityClassificationService {
  imageDetails:{imageName:string,cityImageId:number,imgNumber:number}[]=[
    {imageName:'Ghazipur1',cityImageId:101,imgNumber:1},
    {imageName:'Nashik2',cityImageId:102,imgNumber:2},
    {imageName:'Noida3',cityImageId:103,imgNumber:3}
    
  ]
  constructor() { }


  getAPi(formBody:any){
    //API TO SUBMIT FORM.....
    console.log('INSIDE SERvice.......',formBody);
  }

  getImageObject():any{
    //API HERE TO GET IMAGE
    return this.imageDetails;
  }

}
