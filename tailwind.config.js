const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

function withOpacity(cssVariable) {
  return ({ opacityValue }) => {
    return `rgba(var(${cssVariable}), ${opacityValue || 1})`
  }
}

module.exports = {
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      screens: { xs: '375px' },
      colors: {
        twitter: '#00acee'
      },
      textColor: {
        brand: {
          base: withOpacity('--color-text-base'),
          button: withOpacity('--color-text-button'),
          'button-hover': withOpacity('--color-text-button-hover'),
          'button-inverted': withOpacity('--color-text-inverted-button'),
          'button-inverted-hover': withOpacity(
            '--color-text-inverted-button-hover'
          )
        }
      },
      borderColor: {
        brand: {
          base: withOpacity('--color-border')
        }
      },
      backgroundColor: {
        brand: {
          fill: withOpacity('--color-fill'),
          button: withOpacity('--color-button'),
          'button-hover': withOpacity('--color-button-hover')
        }
      },
      zIndex: {
        leafletControlSearchControl: 801
      },
      typography: {
        sm: {
          css: {
            fontSize: rem(12),
            lineHeight: round(20 / 12),
            a: {
              textDecoration: 'underline'
            },
            p: {
              marginTop: em(4, 12),
              marginBottom: em(4, 12)
            }
          }
        }
      },
      borderRadius: {
        inherit: 'inherit'
      },
      outline: {
        white: '2px solid rgba(255, 255, 255, 0.5)'
      },
      transitionProperty: {
        width: 'width',
        left: 'left'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
