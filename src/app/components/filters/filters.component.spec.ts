import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltersComponent } from './filters.component';
import { By } from '@angular/platform-browser';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the filters component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit sort event when a button is clicked', () => {
    spyOn(component.sort, 'emit');

    const button = fixture.debugElement.query(By.css('.filters__button'));
    button.triggerEventHandler('click', null);

    expect(component.sort.emit).toHaveBeenCalledWith('downloadSpeed');
  });
});
