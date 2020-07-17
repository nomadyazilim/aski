import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ServisService} from '../../servis.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
declare var google : any ;

@Component({
  selector: 'app-konumlar',
  templateUrl: './konumlar.page.html',
  styleUrls: ['./konumlar.page.scss'],
})
export class KonumlarPage implements OnInit {
  aski : [];
  map : any ;
  infoWindows : any =[];
 bos : any ;
 @ViewChild('map',{read: ElementRef , static : false}) mapRef:ElementRef;
  
 constructor(  private servis : ServisService , private http: HttpClient  ) { }
 
 deger : any ;
 
  ngOnInit() {
    this.deger=this.servis.getNavData();
    console.log(this.deger);
   


  this.http.post( "http://mobil2.aski.gov.tr/service/dlistislem_noktalari_getir/0/0",1,
  {headers: new HttpHeaders({"content-Type":"application/json"})}).subscribe((data : any) =>{
  
  this.aski=data.Result;
  console.log('ASKİ ŞUBELERİ',this.aski);
  }); 



 }

 ionViewDidEnter()
 {
   this.showMap();
 }
 showMap()
 {
   const location = new google.maps.LatLng(39.94497,32.848845);
   const options = {
     center : location,
     zoom : 15 ,
     disableDefaultUI : true
   }
   this.map = new google.maps.Map(this.mapRef.nativeElement,options);
   this.addMarkersToMap(this.aski);
 }
 addMarkersToMap(aski){
   
  if(this.deger==1){
  for (let marker of aski){
    if(marker.UST_ID == 1){
      let position = new google.maps.LatLng(marker.X, marker.Y);
      let mapMarker = new google.maps.Marker({
        position : position ,
        title: marker.ADI,
        latitude:marker.X,
        longitude:marker.Y
      });
      mapMarker.setMap(this.map);
      console.log(mapMarker);
    }
    
     
    }
   }


   if(this.deger==2){
    for (let marker of aski){
      if(marker.UST_ID == 2){
        let position = new google.maps.LatLng(marker.X, marker.Y);
        let mapMarker = new google.maps.Marker({
          position : position ,
          title: marker.ADI,
          latitude:marker.X,
          longitude:marker.Y
        });
        mapMarker.setMap(this.map);
      }
      
       
      }
     }

     if(this.deger==6){
      for (let marker of aski){
        if(marker.UST_ID == 6){
          let position = new google.maps.LatLng(marker.X, marker.Y);
          let mapMarker = new google.maps.Marker({
            position : position ,
            title: marker.ADI,
            latitude:marker.X,
            longitude:marker.Y
          });
          mapMarker.setMap(this.map);
        }
        
         
        }
       }

 }







}