import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemsTreeComponent } from './systems-tree.component';

describe('SystemsTreeComponent', () => {
  let component: SystemsTreeComponent;
  let fixture: ComponentFixture<SystemsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemsTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
