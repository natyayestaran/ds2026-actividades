import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Layout from './components/Layout'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import LibroDetalle from './pages/LibroDetalle'
import LibroNuevo from './pages/LibroNuevo'

export interface Libro {
  titulo: string
  autor: string
  imagen: string
  precio?: number
}

function App() {
  const [libros, setLibros] = useState<Libro[]>([
    {
      titulo: 'Harry Potter',
      autor: 'J.K Rowling',
      imagen: 'https://covers.openlibrary.org/b/id/10523338-L.jpg'
    },
    {
      titulo: '1984',
      autor: 'George Orwell',
      imagen: 'https://covers.openlibrary.org/b/id/8228691-L.jpg'
    },
    {
      titulo: 'El Hobbit',
      autor: 'J.R.R Tolkien',
      imagen: 'https://covers.openlibrary.org/b/id/8231996-L.jpg'
    }
  ])

  const agregarLibro = (nuevo: {
    titulo: string
    autor: string
    precio: number
  }) => {
    setLibros([
      ...libros,
      {
        ...nuevo,
        imagen: 'https://placehold.co/300x400?text=Libro'
      }
    ])
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/catalogo"
            element={<Catalogo libros={libros} />}
          />

          <Route
            path="/libros/nuevo"
            element={<LibroNuevo onAgregar={agregarLibro} />}
          />

          <Route
            path="/libros/:id"
            element={<LibroDetalle />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App