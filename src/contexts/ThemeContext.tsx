import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

type Theme = 'light' | 'dark'

export interface ThemeContextType {
  theme: Theme

  toggleTheme(theme: Theme): void
}

export interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextType)

export function useThemeContext() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark')

  const toggleTheme = useCallback((theme: Theme) => {
    setTheme(theme)
  }, [])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [toggleTheme, theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
