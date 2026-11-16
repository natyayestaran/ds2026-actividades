
export interface Autor {
  id: number
  nombre: string
}

export interface Categoria {
  id: number
  nombre: string
}

export interface Libro {
  id: number
  titulo: string
  precio: number
  disponible: boolean
  autorId: number
  autor: Autor
  categorias: Categoria[]
}
