import NBtn from './src/components/btn'
import NExpansion from './src/components/expansion'
import NForm from './src/components/form'
import NGroupCheckbox from './src/components/group-checkbox'
import NInput from './src/components/input'
import NRadio from './src/components/radio'
import NRadioGroup from './src/components/radio-group'
import NSelect from './src/components/select'
import NStatus from './src/components/status'
import NTable from './src/components/table'
import NTitle from './src/components/title'

export default class Components {
  static add (Vue) {
    Vue.component('NBtn', NBtn)
    Vue.component('NExpansion', NExpansion)
    Vue.component('NForm', NForm)
    Vue.component('NGroupCheckbox', NGroupCheckbox)
    Vue.component('NInput', NInput)
    Vue.component('NRadio', NRadio)
    Vue.component('NRadioGroup', NRadioGroup)
    Vue.component('NSelect', NSelect)
    Vue.component('NStatus', NStatus)
    Vue.component('NTable', NTable)
    Vue.component('NTitle', NTitle)
  }
}
