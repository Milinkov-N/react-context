import { Content } from './components'
import AppProvider from './contexts/AppContext'
import './global.css'

export default function App() {
  return (
    <AppProvider>
      <Content />
    </AppProvider>
  )
}