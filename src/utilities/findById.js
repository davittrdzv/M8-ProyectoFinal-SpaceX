// Función findById: Utilidad genérica que recibe un arreglo de objetos y un ID, y devuelve el objeto cuyo campo id coincide con el ID proporcionado. Es especialmente útil cuando se trabaja con datos normalizados de la API de SpaceX, donde muchos objetos contienen referencias por ID a otros recursos (por ejemplo, un lanzamiento que referencia un cohete o plataforma de lanzamiento por ID).

export const findById = (array, id) => {
  return array.find(object => object.id === id)
}
