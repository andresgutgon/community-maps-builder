/**
 * This API is exposed by JSONForms
 * https://github.com/eclipsesource/jsonforms/blob/master/packages/vanilla/Styles.md
 * With it you can add your own CSS to generated forms.
 *
 * This is awesome because with Tailwind is all we need to customize
 * the look and feel of the forms
 */
const radioCheckboxLabel = ['text-sm text-gray-800 cursor-pointer']
export const formStyles = {
  styles: [
    {
      name: 'vertical.layout',
      classNames: ['space-y-4']
    },
    {
      name: 'horizontal.layout',
      classNames: [
        'w-full space-y-2 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-2'
      ]
    },
    {
      name: 'vertical.layout.item',
      classNames: ['flex w-full space-y-2']
    },
    {
      name: 'control',
      classNames: ['hidden-attribute flex flex-col w-full space-y-1']
    },
    {
      name: 'control.label',
      classNames: [
        'flex flex-col sm:items-center sm:flex-row sm:justify-between text-sm font-medium text-gray-700'
      ]
    },
    {
      name: 'control.input',
      classNames: [
        'simulateNoNumber p-2 block text-sm w-full shadow-sm focus:ring-0 focus:border-gray-500 sm:text-sm border-gray-300 rounded-md'
      ]
    },
    {
      name: 'control.select',
      classNames: [
        'block w-full p-2 shadow-sm focus:ring-0 focus:border-gray-500 sm:text-sm border-gray-300 rounded-md'
      ]
    },
    {
      name: 'control.validation',
      classNames: ['p-1 border border-transparent text-xs empty:hidden']
    },
    {
      name: 'control.validation.error',
      classNames: [
        'rounded-sm block text-red-600 bg-red-50 border border-red-100'
      ]
    },
    {
      name: 'input.description',
      classNames: ['text-xs text-gray-500']
    },
    {
      name: 'group.layout',
      classNames: [
        'w-full space-y-2 mt-2 rounded border border-gray-200 pt-2 pb-4 px-2 sm:px-4'
      ]
    },
    {
      name: 'group.label',
      classNames: [
        'py-0.5 px-1 text-xs text-gray-600 rounded uppercase tracking-wide'
      ]
    },
    {
      name: 'control.radio',
      classNames: ['w-full']
    },
    {
      name: 'control.radio.option',
      classNames: ['w-full space-x-2 cursor-pointer']
    },
    {
      name: 'control.radio.input',
      classNames: [
        'appearance-none focus:ring-gray-800 checked:text-gray-800 checked:border-transparent'
      ]
    },
    { name: 'control.radio.label', classNames: radioCheckboxLabel },
    {
      name: 'control.checkbox.group',
      classNames: [
        'hidden-attribute flex flex-row items-center space-x-1 cursor-pointer'
      ]
    },
    {
      name: 'control.checkbox.input',
      classNames: [
        'rounded appearance-none focus:ring-gray-800 checked:text-gray-800 checked:border-transparent'
      ]
    },
    { name: 'control.checkbox.label', classNames: radioCheckboxLabel }
  ]
}
