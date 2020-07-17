import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClientModule, HttpClient}from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  users=[];
 
  constructor(
    private router: Router,
    private http: HttpClient
  
  ) { }

  ngOnInit() {
    this.http.get("https://mobil2.aski.gov.tr/service/hava_durumu_yahoo").subscribe((res: any) =>{
      console.log("gelen data");
      console.log(res);
      this.users=res.liste;
  });
 
 
 
  }
 
 
 
 
  islem(){
    this.router.navigate(['/islemmerkezleri']);
  }
  nextpageFatura(){
  this.router.navigate(['/faturasorgula']);
 }
 nextpageSukesintileri(){
  this.router.navigate(['/sukesintileri']);
 }
 nextpageHaberler(){
  this.router.navigate(['/haberler']);
 }
 nextpageIletisim(){
  this.router.navigate(['/iletisim']);
 }
 nextpageislemMerkezi()
 {
  this.router.navigate(['/islem-merkezleri']); 
 }

}
