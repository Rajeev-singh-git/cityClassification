import { CompileEntryComponentMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CityClassification } from 'src/app/domain/cityClassification.model';
import { CityClassificationService } from 'src/app/service/city-classification.service';

@Component({
  selector: 'app-city-classification',
  templateUrl: './city-classification.component.html',
  styleUrls: ['./city-classification.component.css']
})
export class CityClassificationComponent implements OnInit {
  imgNumber : number =1;
  cityImageId : number = -1;
  imagePath : string ='';
  curImageNumber:number=0;

  imageDetails :{imageName:string,cityImageId: number,imgNumber:number}[]={
    {imageName:'Ghazipur1', cityImageId:101,imgNumber:1},
    {imageName:'Nashik2', cityImageId:101,imgNumber:2},
    {imageName:'Noida3', cityImageId:101,imgNumber:3}
  }
  
 //cityDetailArray : CityClassification[] = [];
 
  
 city: CityClassification = {
   pinCode : '1',
   cityImageId : 101
 }

 nextImage(){}

 constructor(private cityClassificationService: CityClassificationService) { }
 
 ngOnInit(): void {
  }

}
