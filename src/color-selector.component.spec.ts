import {TestBed, ComponentFixture, async} from '@angular/core/testing'
import {DebugElement} from '@angular/core'
import {By} from '@angular/platform-browser'
import {ColorSelectorComponent} from './color-selector.component'
import {ColorSelectorModule} from './color-selector.module'

describe('Color selector component', () => {
  let fixture: ComponentFixture<ColorSelectorComponent>
  let component: ColorSelectorComponent
  let debugElement: DebugElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ColorSelectorModule],
      providers: [],
      declarations: []
    })
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSelectorComponent)
    component = fixture.componentInstance
    debugElement = fixture.debugElement
  })

  it('shoud render in the DOM', () => {
    // TODO
    expect(debugElement.query(By.css('div')).nativeElement.textContent).toBe('Color Selector')
  })
})
