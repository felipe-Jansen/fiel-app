import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroducedSlidesPage } from './introduced-slides.page';

describe('IntroducedSlidesPage', () => {
  let component: IntroducedSlidesPage;
  let fixture: ComponentFixture<IntroducedSlidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroducedSlidesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroducedSlidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
