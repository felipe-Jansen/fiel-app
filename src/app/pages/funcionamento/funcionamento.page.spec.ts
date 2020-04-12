import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuncionamentoPage } from './funcionamento.page';

describe('FuncionamentoPage', () => {
  let component: FuncionamentoPage;
  let fixture: ComponentFixture<FuncionamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuncionamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
