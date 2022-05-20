import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedisListComponent } from './redis-list.component';

describe('RedisListComponent', () => {
  let component: RedisListComponent;
  let fixture: ComponentFixture<RedisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedisListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
