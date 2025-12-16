export const useDisplay = (blok, displayType) => {
  if (!displayType) displayType = 'block'

  return ref({
    'block': blok.mobile && displayType === 'block',
    'md:block': blok.desktop && displayType === 'block',
    'grid': blok.mobile && displayType === 'grid',
    'md:grid': blok.desktop && displayType === 'grid',
    'hidden': !blok.mobile,
    'md:hidden': !blok.desktop,
  })
}
