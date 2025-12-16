export const useBackgroundColor = (background) => {
  return ref({
    'bg-beige': background === 'beige',
    'bg-white': background === 'white',
    'bg-black text-white': background === 'black',
    'bg-gray-100': background === 'gray'
  })
}
