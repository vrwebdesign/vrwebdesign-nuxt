import Vue from 'vue'
import FormGenerator from 'vrwebdesign-nuxt/modules/nuxt-form-generator/components/form-generator.vue'
import VFormGenerator from 'vrwebdesign-nuxt/modules/nuxt-form-generator/components/v-form-generator.vue'
import autocomplete from 'vrwebdesign-nuxt/modules/nuxt-form-generator/components/form-controlls/autocomplete.vue'
import comboBox from 'vrwebdesign-nuxt/modules/nuxt-form-generator/components/form-controlls/comboBox.vue'
import checkbox from 'vrwebdesign-nuxt/modules/nuxt-form-generator/components/form-controlls/checkbox.vue'
import datePicker from 'vrwebdesign-nuxt/modules/nuxt-form-generator/components/form-controlls/datePicker.vue'
import timePicker from 'vrwebdesign-nuxt/modules/nuxt-form-generator/components/form-controlls/timePicker.vue'
import fileUpload from 'vrwebdesign-nuxt/modules/nuxt-form-generator/components/form-controlls/fileUpload.vue'
import radio from 'vrwebdesign-nuxt/modules/nuxt-form-generator/components/form-controlls/radio.vue'
import select from 'vrwebdesign-nuxt/modules/nuxt-form-generator/components/form-controlls/select.vue'
import textArea from 'vrwebdesign-nuxt/modules/nuxt-form-generator/components/form-controlls/textArea.vue'
import textField from 'vrwebdesign-nuxt/modules/nuxt-form-generator/components/form-controlls/textField.vue'

Vue.component('vr-autocomplete', autocomplete)
Vue.component('vr-comboBox', comboBox)
Vue.component('vr-checkbox', checkbox)
Vue.component('vr-datePicker', datePicker)
Vue.component('vr-timePicker', timePicker)
Vue.component('vr-fileUpload', fileUpload)
Vue.component('vr-radio', radio)
Vue.component('vr-select', select)
Vue.component('vr-textArea', textArea)
Vue.component('vr-textField', textField)

Vue.component('vr-form-generator', FormGenerator)
Vue.component('v-form-generator', VFormGenerator)
