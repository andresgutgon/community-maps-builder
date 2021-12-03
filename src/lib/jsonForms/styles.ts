/**
 * This API is exposed by JSONForms
 * https://github.com/eclipsesource/jsonforms/blob/master/packages/vanilla/Styles.md
 * With it you can add your own CSS to generated forms.
 *
 * This is awesome because with Tailwind is all we need to customize
 * the look and feel of the forms
 */
export const formStyles = {
  styles: [
    {
      name: 'vertical.layout',
      classNames: ['space-y-6']
    },
    {
      name: 'horizontal.layout',
      classNames: ['w-full space-y-2 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-2']
    },
    {
      name: 'vertical.layout.item',
      classNames: ['flex w-full space-y-2']
    },
    {
      name: 'control',
      classNames: ['flex flex-col w-full space-y-2']
    },
    {
      name: 'control.label',
      classNames: ['block text-sm font-medium text-gray-700 mb-1']
    },
    {
      name: 'control.input',
      classNames: ['block w-full shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm border-gray-300 rounded-md']
    },
    {
      name: 'control.validation',
      classNames: ['text-xs']
    },
    {
      name: 'control.validation.error',
      classNames: ['py-1 px-2 rounded-sm block text-red-600 bg-red-50 border border-red-100']
    },
    {
      name: 'input.description',
      classNames: ['text-xs text-gray-500']
    },
    {
      name: 'group.layout',
      classNames: ['w-full space-y-4 rounded border border-gray-200 pt-2 pb-4 px-4']
    },
    {
      name: 'group.label',
      classNames: ['px-2 text-xs text-gray-400 uppercase tracking-wide']
    }
  ]
}
