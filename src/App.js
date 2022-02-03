import AppConsumer from './components/AppConsumer'
import AppProvider from './contexts/AppContext'
import './global.css'

export default function App() {
  return (
    <AppProvider>
      <AppConsumer />
    </AppProvider>
  )
}