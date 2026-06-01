import './App.css'
import Dashboard from './pages/Dashboard'
import { Buttonbar, Footer, Navbar } from './components';


function App() {

  return (

    <div className="w-full min-h-screen">
      {/* Navegación para movil/tablet */}
      <Buttonbar />

      {/* Navegación para pc */}
      <Navbar />

      {/* Contenido */}
      <Dashboard /> 

      {/* Footer */}
      <Footer />
    </div>

  )
}

export default App
