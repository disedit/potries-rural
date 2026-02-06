export const useSpacing = (blok, defaultPadding, defaultMargin, defaultPaddingDesktop, defaultMarginDesktop) => {
  if (!defaultPadding) defaultPadding = 'calc(var(--spacing-site) * 3.5)'
  if (!defaultPaddingDesktop) defaultPaddingDesktop = '6rem'
  if (!defaultMargin) defaultMargin = 0
  if (!defaultMarginDesktop) defaultMarginDesktop = 0

  return ref({
    '--pt': blok.padding_top  || defaultPadding,
    '--pb': blok.padding_bottom  || defaultPadding,
    '--pt-md': blok.padding_top_desktop  || defaultPaddingDesktop,
    '--pb-md': blok.padding_bottom_desktop || defaultPaddingDesktop,
    '--mt': blok.margin_top || defaultMargin,
    '--mb': blok.margin_bottom || defaultMargin,
    '--mt-md': blok.margin_top_desktop || defaultMarginDesktop,
    '--mb-md': blok.margin_bottom_desktop || defaultMarginDesktop
  })
}
