import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Josefin Sans",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  headerWeight: '600',
  bodyFontFamily: [
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyWeight: '300',
  googleFonts: [
    {
      name: 'Josefin Sans',
      styles: [
        '600',
      ],
    },
    {
      name: 'Roboto',
      styles: [
        '300',
        '300i',
      ],
    },
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    img: {
      marginBottom: 0,
    },
  })
})

export default typography