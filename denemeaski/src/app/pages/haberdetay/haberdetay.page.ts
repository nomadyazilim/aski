import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router' ;
import {ServisService} from '../../servis.service' ;
import { HttpClient , HttpHeaders} from '@angular/common/http'; 

@Component({
  selector: 'app-haberdetay',
  templateUrl: './haberdetay.page.html',
  styleUrls: ['./haberdetay.page.scss'],
})

export class HaberdetayPage implements OnInit {
 data:any;
 users2:any;
 haber : any ;
 
  constructor(private http: HttpClient,
     private servis : ServisService,
     private route:ActivatedRoute) { 
      
     }

  ngOnInit() {
   
    this.data=this.servis.getNavData();
    console.log('detay',this.data);
    this.http.get(
      "http://mobil.aski.gov.tr/services/mobil_bilgi_servis.svc/haber_getir/"+this.data
    ).subscribe((res: any) =>{
     
      this.haber=res.Result;
     
  });

  }

 

}
