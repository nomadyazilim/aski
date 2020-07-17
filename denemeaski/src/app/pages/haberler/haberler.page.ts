import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {ServisService} from '../../servis.service' ; 
@Component({
  selector: 'app-haberler',
  templateUrl: './haberler.page.html',
  styleUrls: ['./haberler.page.scss'],
})
export class HaberlerPage implements OnInit {
  users3:any;
  u:any;
  d : any  ;
  constructor(
    private servis : ServisService ,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.http.get(
      "http://mobil.aski.gov.tr/services/mobil_bilgi_servis.svc/haber_getir/0"
    ).subscribe((res: any) =>{
      console.log("haberler");
      console.log(res);
      this.users3=res.Result;
     
  });
  }
  nextpage(id){

     console.log(id);
    this.u=id;
    this.servis.setNavData(this.u);
    this.router.navigate(['/haberdetay']);
    
  }
}
