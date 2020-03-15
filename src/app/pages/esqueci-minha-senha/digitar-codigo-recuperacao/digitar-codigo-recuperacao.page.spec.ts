import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DigitarCodigoRecuperacaoPage } from './digitar-codigo-recuperacao.page';

describe('DigitarCodigoRecuperacaoPage', () => {
  let component: DigitarCodigoRecuperacaoPage;
  let fixture: ComponentFixture<DigitarCodigoRecuperacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitarCodigoRecuperacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DigitarCodigoRecuperacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
