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
  cityImageId : number = 101;
  imagePath : string ='assets/images/Ghazipur1.png';
  
 cityDetailArray : CityClassification[] = [];
  
 city: CityClassification = {
   pinCode : '1',
   cityImageId : 101
 }

 nextImage(){}

 constructor(private cityClassificationService: CityClassificationService) { }
 
 ngOnInit(): void {
  }

}
