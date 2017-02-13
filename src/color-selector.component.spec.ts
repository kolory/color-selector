import {TestBed, ComponentFixture, async} from '@angular/core/testing'
import {Component, DebugElement} from '@angular/core'
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

  it('should display colors provided from the parent component', () => {

  })

  it('should limit the amount of displayed colors if the limit is provided', () => {

  })

  it('should display empty, non-clickable items when the padding value is provided', () => {

  })

  it('should inform the parent component about color selection', () => {

  })

  it('should optionally display an indication of what color is selected', () => {

  })

  it('should filter falsy or non-color values', () => {

  })

  // TODO: Decide
  it('should optionally display the color\'s name', () => {

  })
})
