export const useFontSizes = (blok) => {
  return ref({
    'text-xs': blok.font_size === 'xs',
    'text-sm': blok.font_size === 'sm',
    'text-base': blok.font_size === 'base',
    'text-md': blok.font_size === 'md',
    'text-lg': blok.font_size === 'lg',
    'text-xl': blok.font_size === 'xl',
    'text-2xl': blok.font_size === '2xl',
    'md:text-xs': blok.font_size_desktop === 'xs',
    'md:text-sm': blok.font_size_desktop === 'sm',
    'md:text-base': blok.font_size_desktop === 'base',
    'md:text-md': blok.font_size_desktop === 'md',
    'md:text-lg': blok.font_size_desktop === 'lg',
    'md:text-xl': blok.font_size_desktop === 'xl',
    'md:text-2xl': blok.font_size_desktop === '2xl',
  })
}
