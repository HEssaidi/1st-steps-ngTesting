import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async () => {
    component = new AppComponent();
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'first-step-ng-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('first-step-ng-test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('first-step-ng-test app is running!');
  });


  it('Testing addition function', ()=>{
    expect(component.addition(10,20)).toEqual(30);
  })
  it('String Matcher test toBe', ()=>{
    let str= "Hello World"
    expect(str).toBe("Hello World");
  })
  it('String Matcher test toEqual', ()=>{
    let str= "Hello World"
    expect(str).toEqual("Hello World");
  })
  it('String Matcher test toContain', ()=>{
    let str= "Hello World, let's get started"
    expect(str).toContain("Hello World");
  })

});
