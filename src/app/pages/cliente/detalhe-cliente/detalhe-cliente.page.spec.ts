import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalheClientePage } from './detalhe-cliente.page';

describe('DetalheClientePage', () => {
  let component: DetalheClientePage;
  let fixture: ComponentFixture<DetalheClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalheClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
