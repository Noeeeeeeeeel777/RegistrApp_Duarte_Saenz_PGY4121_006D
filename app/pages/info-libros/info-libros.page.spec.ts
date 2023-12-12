import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoLibrosPage } from './info-libros.page';

describe('InfoLibrosPage', () => {
  let component: InfoLibrosPage;
  let fixture: ComponentFixture<InfoLibrosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoLibrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
