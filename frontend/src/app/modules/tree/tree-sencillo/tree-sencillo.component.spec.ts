import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeSencilloComponent } from './tree-sencillo.component';

describe('TreeSencilloComponent', () => {
  let component: TreeSencilloComponent;
  let fixture: ComponentFixture<TreeSencilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeSencilloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeSencilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
