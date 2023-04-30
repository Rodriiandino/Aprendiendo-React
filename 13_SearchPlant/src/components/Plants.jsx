function PlantsList({ plants }) {
  return (
    <ul>
      {plants.map(plant => (
        <li key={plant.id}>
          <h4>
            {plant.common_name ? plant.common_name : plant.scientific_name}
          </h4>
          <h5>Autor: {plant.author}</h5>
          <p>{plant.bibliography}</p>
          <img src={plant.image_url} alt={plant.scientific_name} />
        </li>
      ))}
    </ul>
  )
}

function NoPlants() {
  return <p>No hay plantas</p>
}

export function Plants({ plants }) {
  //   "?"" significa que si plants es null o undefined, no se rompa el codigo
  const hasPlants = plants?.length > 0

  return hasPlants ? <PlantsList plants={plants} /> : <NoPlants />
}
