import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HaberlerPage } from './haberler.page';

describe('HaberlerPage', () => {
  let component: HaberlerPage;
  let fixture: ComponentFixture<HaberlerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaberlerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HaberlerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
