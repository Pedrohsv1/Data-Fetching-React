import { Route, Routes } from "react-router-dom";
import { Estados } from "./pages/estados";
import { Estado } from "./pages/estado";


export type Localidade = {
  id: string;
  nome: string;
  nivel: { nome: string };
}

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Estados/>} />
        <Route path="/estado/*" element={<Estado/>} />
      </Routes>
    </>
  )
}

export default App
