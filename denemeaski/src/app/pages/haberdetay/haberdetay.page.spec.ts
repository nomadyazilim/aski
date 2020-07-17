import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HaberdetayPage } from './haberdetay.page';

describe('HaberdetayPage', () => {
  let component: HaberdetayPage;
  let fixture: ComponentFixture<HaberdetayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaberdetayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HaberdetayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
