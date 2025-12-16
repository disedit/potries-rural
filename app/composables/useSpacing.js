export const useSpacing = (blok, defaultPadding, defaultMargin) => {
  if (!defaultPadding) defaultPadding = '6rem'
  if (!defaultMargin) defaultMargin = 0

  return ref({
    '--pt': blok.padding_top  || defaultPadding,
    '--pb': blok.padding_bottom  || defaultPadding,
    '--pt-md': blok.padding_top_desktop  || defaultPadding,
    '--pb-md': blok.padding_bottom_desktop || defaultPadding,
    '--mt': blok.margin_top || defaultMargin,
    '--mb': blok.margin_bottom || defaultMargin,
    '--mt-md': blok.margin_top_desktop || defaultMargin,
    '--mb-md': blok.margin_bottom_desktop || defaultMargin
  })
}
