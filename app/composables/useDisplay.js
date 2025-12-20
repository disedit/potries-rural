export const useDisplay = (blok, displayType) => {
  if (!displayType) displayType = 'block'

  return ref({
    'block': blok.mobile && displayType === 'block',
    'md:block': blok.desktop && displayType === 'block',
    'grid': blok.mobile && displayType === 'grid',
    'md:grid': blok.desktop && displayType === 'grid',
    'flex': blok.mobile && displayType === 'flex',
    'md:flex': blok.desktop && displayType === 'flex',
    'hidden': !blok.mobile,
    'md:hidden': !blok.desktop,
  })
}
