import { useEffect, useState } from 'react'

function useFetch(url: string) {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(url)
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('Error al cargar los datos')
        }

        return respuesta.json()
      })
      .then((datos) => {
        setData(datos)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [url])

  return { data, loading, error }
}

export default useFetch