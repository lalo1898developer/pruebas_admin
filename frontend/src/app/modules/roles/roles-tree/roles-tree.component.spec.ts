import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesTreeComponent } from './roles-tree.component';

describe('RolesTreeComponent', () => {
  let component: RolesTreeComponent;
  let fixture: ComponentFixture<RolesTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
