import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClientModule, HttpClient}from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-sukesintileri',
  templateUrl: './sukesintileri.page.html',
  styleUrls: ['./sukesintileri.page.scss'],
})
export class SukesintileriPage implements OnInit {
  users2=[];
  constructor( private router: Router,
    private http: HttpClient,
    private loadCTRL : LoadingController) { }

  ngOnInit() {
    this.http.get(
      "http://mobil.aski.gov.tr/services/mobil_bilgi_servis.svc/kesinti_getir/")
      .subscribe((res: any) =>{
      console.log("gelen data");
      console.log(res);
      this.users2=res.Result;
  });
  }

}
