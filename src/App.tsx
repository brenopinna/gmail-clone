import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { SideIcons } from "./components/SideIcons"

function App() {
  return (
    <div className="bg-slate-100 flex flex-col h-screen">
      <Header />
      <div className="grid grid-cols-layout grid-rows-layout flex-grow pb-5 pr-1">
        <SideIcons />
        <Main />
      </div>
    </div>
  )
}

export default App
