import { Form, Theme, ThemeColor, TileStyle } from '@maps/types/index'
import forms from './forms.json'
import suggestPlaceForms from './suggestPlaceForms.json'

const data = {
  theme: {
    color: {
      textColorBase: '63, 62, 62',
      fillColor: '233, 189, 0',
      borderColor: '30, 49, 64',
      buttonColor: '233, 189, 0',
      buttonColorHover: '30, 49, 64',
      buttonTextColor: '63, 62, 62',
      buttonTextColorHover: '255, 255, 255',
      buttonTextInvertedColor: '30, 49, 64',
      buttonTextInvertedColorHover: '30, 49, 64'
    } as ThemeColor,
    tileStyle: 'osm' as TileStyle
  } as Theme,
  crowdfunding: {
    showMarkerProgress: true
  },
  showFilters: { status: true, crowdfunding: true, categories: true },
  legal: {
    privacyLink: 'https://www.sommobilitat.coop/politica-de-privadesa/',
    cookiesLink: 'https://www.sommobilitat.coop/cookies/'
  },
  forms: forms as Record<string, Form>,
  suggestPlaceForms: suggestPlaceForms as Record<string, Form>
}

export default data
