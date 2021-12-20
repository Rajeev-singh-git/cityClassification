import { Component, OnInit } from '@angular/core';
import { CityClassificationService } from 'src/app/service/city-classification.service';

@Component({
  selector: 'app-city-classification',
  templateUrl: './city-classification.component.html',
  styleUrls: ['./city-classification.component.css']
})
export class CityClassificationComponent implements OnInit {
  imgNumber : number =-1;
  cityImageId : number = -1;
  imagePath : string ='';
  pincode:string='';
  curImageNumber:number=0;
  imageDetails:{imageName:string,cityImageId:number,imgNumber:number}[]=[];
  
 cityDetailArray :{ pincode : string; cityImageId : number; imgNumber:number;}[] = [];
  
 

 constructor(private cityService:CityClassificationService) { }
 
 ngOnInit(): void {
   this.imageDetails=this.cityService.getImageObject();
    this.getNextImage(this.imageDetails[this.curImageNumber]);
  }

  getNextImage(imageObj:{imageName:string,cityImageId:number,imgNumber:number}):void{
    this.imgNumber= imageObj.imgNumber;this.imagePath=`assets/images/${imageObj.imageName}.png`;this.cityImageId=imageObj.cityImageId;
  }

  generatecityDetailArray():void{
    if(this.pincode=='' || this.pincode.toString().length>6){alert('Enter Valid PinCode');return;};
    this.cityDetailArray.push(
      {pincode:this.pincode, cityImageId:this.cityImageId, imgNumber:this.imgNumber}
    );
    this.pincode='';
    this.curImageNumber++;
    if(this.curImageNumber==this.imageDetails.length){this.submitForm();return;}
    this.getNextImage(this.imageDetails[this.curImageNumber]);
  }

  submitForm(){
    //TODO here....
    this.cityService.getAPi(this.cityDetailArray);
  }

}
