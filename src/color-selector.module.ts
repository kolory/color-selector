import {NgModule} from '@angular/core'
import {ColorSelectorComponent} from './color-selector.component'
import {ColorUtilities} from '@kolory/color-utilities'

@NgModule({
  providers: [ColorUtilities],
  declarations: [ColorSelectorComponent],
  exports: [ColorSelectorComponent]
})
export class ColorSelectorModule {}
