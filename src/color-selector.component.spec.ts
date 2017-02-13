import {TestBed, ComponentFixture, async} from '@angular/core/testing'
import {Component, DebugElement} from '@angular/core'
import {By} from '@angular/platform-browser'
import {ColorSelectorComponent} from './color-selector.component'
import {ColorSelectorModule} from './color-selector.module'
import {anyColor, Color, ColorTypes, ColorUtilities} from '@kolory/color-utilities'

// FIXME: Remove when all tests will be filled
/* tslint:disable */

@Component({
  selector: 'test-component',
  template: '<color-selector [colors]="colors"></color-selector>'
})
class TestComponent {
  colors: (anyColor | Color)[]
}

describe('Color selector component', () => {
  const colorUtilities = ColorUtilities.create()

  let fixture: ComponentFixture<ColorSelectorComponent>
  let parentFixture: ComponentFixture<TestComponent>
  let component: ColorSelectorComponent
  let parentComponent: TestComponent
  let debugElement: DebugElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ColorSelectorModule],
      providers: [],
      declarations: [TestComponent]
    })
  }))

  beforeEach(() => {
    parentFixture = TestBed.createComponent(TestComponent)
    fixture = TestBed.createComponent(ColorSelectorComponent)
    parentComponent = parentFixture.componentInstance
    component = fixture.componentInstance
    debugElement = fixture.debugElement
  })

  it('should display colors provided in HEX format from the parent component', () => {
    parentComponent.colors = ['#d51123', '#ad4363']
    parentFixture.detectChanges()
    const colors = parentFixture.debugElement.queryAll(By.css('button'))
    expect(colors.length).toBe(parentComponent.colors.length)
    expect(colors[0].styles['background-color']).toBe(parentComponent.colors[0])
    expect(colors[1].styles['background-color']).toBe(parentComponent.colors[1])
  })

  it('should display colors provided in RGB format from the parent component', () => {
    parentComponent.colors = ['rgb(123, 123, 123)', 'rgb(255, 0, 255)']
    parentFixture.detectChanges()
    const colors = parentFixture.debugElement.queryAll(By.css('button'))
    expect(colors.length).toBe(parentComponent.colors.length)
    expect(colors[0].styles['background-color']).toBe(colorUtilities.convert(parentComponent.colors[0], ColorTypes.hex))
    expect(colors[1].styles['background-color']).toBe(colorUtilities.convert(parentComponent.colors[1], ColorTypes.hex))
  })

  it('should display colors provided in HSL format from the parent component', () => {
    parentComponent.colors = ['hsl(100, 50, 100%)', 'hsl(25, 0, 75%)']
    parentFixture.detectChanges()
    const colors = parentFixture.debugElement.queryAll(By.css('button'))
    expect(colors.length).toBe(parentComponent.colors.length)
    expect(colors[0].styles['background-color']).toBe(colorUtilities.convert(parentComponent.colors[0], ColorTypes.hex))
    expect(colors[1].styles['background-color']).toBe(colorUtilities.convert(parentComponent.colors[1], ColorTypes.hex))
  })

  it('should display colors provided as a Color instances from the parent component', () => {
    parentComponent.colors = [Color.create(), Color.create('hsl(25, 0, 75%)')]
    parentFixture.detectChanges()
    const colors = parentFixture.debugElement.queryAll(By.css('button'))
    expect(colors.length).toBe(parentComponent.colors.length)
    expect(colors[0].styles['background-color']).toBe((parentComponent.colors[0] as Color).hex)
    expect(colors[1].styles['background-color']).toBe((parentComponent.colors[1] as Color).hex)
  })

  it('should display colors definitions provided in mixed formats from the parent component', () => {
    parentComponent.colors = ['#d51123', 'rgb(213,123,123)', Color.create()]
    parentFixture.detectChanges()
    expect(parentFixture.debugElement.queryAll(By.css('button')).length).toBe(parentComponent.colors.length)
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
