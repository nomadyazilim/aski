import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaturasorgulaPage } from './faturasorgula.page';

describe('FaturasorgulaPage', () => {
  let component: FaturasorgulaPage;
  let fixture: ComponentFixture<FaturasorgulaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaturasorgulaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaturasorgulaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
