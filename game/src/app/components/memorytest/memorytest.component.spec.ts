import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorytestComponent } from './memorytest.component';

describe('MemorytestComponent', () => {
  let component: MemorytestComponent;
  let fixture: ComponentFixture<MemorytestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemorytestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
