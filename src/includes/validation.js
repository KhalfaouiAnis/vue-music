import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import {
  email,
  min,
  max,
  required,
  confirmed,
  min_value as minValue,
  max_value as maxValue,
  not_one_of as excluded,
  alpha_spaces as alphaSpaces
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('min', min)
    defineRule('max', max)
    defineRule('email', email)
    defineRule('tos', required)
    defineRule('excluded', excluded)
    defineRule('required', required)
    defineRule('min_value', minValue)
    defineRule('max_value', maxValue)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('country_excluded', excluded)
    defineRule('passwords_mismatch', confirmed)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field} is too long.`,
          alpha_spaces: `The field ${ctx.field} may only contain alphabetic characters and spaces.`,
          email: `The field ${ctx.field} must be a valid email.`,
          min_value: `The field ${ctx.field} is too low.`,
          max_value: `The field ${ctx.field} is too high.`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}.`,
          country_excluded: 'Do to restrictions, we do not accept users from this location.',
          passwords_mismatch: "The passwords don't match.",
          tos: 'You must accept the Terms of Service.'
        }

        return messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid`
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
  }
}
