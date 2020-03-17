import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuporteTecnicoPage } from './suporte-tecnico.page';

describe('SuporteTecnicoPage', () => {
  let component: SuporteTecnicoPage;
  let fixture: ComponentFixture<SuporteTecnicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuporteTecnicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuporteTecnicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
