export const useFlex = (align, justify) => {
  return ref({
    'items-start': align === 'start',
    'items-center': align === 'center',
    'items-end': align === 'end',
    'items-between': align === 'space-between',
    'justify-start': justify === 'start',
    'justify-center': justify === 'center',
    'justify-end': justify === 'end',
    'justify-between': justify === 'space-between',
  })
}
