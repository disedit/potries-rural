export const useColorMode = () => {
  const colors = {
    dark: '#000',
    light: '#fff',
  }

  const setDark = () => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', colors.dark)
    document.documentElement.classList.add('bg-black')
    document.documentElement.classList.remove('bg-white')
  }

  const unsetDark = () => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', colors.light)
    document.documentElement.classList.remove('bg-black')
    document.documentElement.classList.add('bg-white')
  }

  const setMenuOpen = () => {
    document.documentElement.classList.add('overflow-hidden')
  }

  const unsetMenuOpen = () => {
    document.documentElement.classList.remove('overflow-hidden')
  }

  return {
    setDark,
    unsetDark,
    setMenuOpen,
    unsetMenuOpen
  }
}