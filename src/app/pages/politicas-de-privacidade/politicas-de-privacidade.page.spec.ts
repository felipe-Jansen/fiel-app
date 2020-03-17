import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoliticasDePrivacidadePage } from './politicas-de-privacidade.page';

describe('PoliticasDePrivacidadePage', () => {
  let component: PoliticasDePrivacidadePage;
  let fixture: ComponentFixture<PoliticasDePrivacidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticasDePrivacidadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoliticasDePrivacidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
