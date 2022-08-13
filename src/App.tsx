import { ThemeProvider } from 'styled-components'
import { NavBar } from './components/NavBar'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavBar />
      <div style={{ height: '2000px' }}>a</div>
      <GlobalStyle />
    </ThemeProvider>
  )
}
