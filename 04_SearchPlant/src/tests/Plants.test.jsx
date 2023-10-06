import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Plants } from '../components/Plants'

describe('Plants component', () => {
  it('renders a list of plants', () => {
    const plants = [
      {
        id: 21381,
        common_name: 'Sunflower',
        slug: 'helianthus-annuus',
        scientific_name: 'Helianthus annuus',
        year: 1753,
        bibliography: 'Sp. Pl.: 904 (1753)',
        author: 'L.',
        status: 'accepted',
        rank: 'species',
        family_common_name: 'Aster family',
        genus_id: 130,
        image_url:
          'https://bs.plantnet.org/image/o/e92bdbc5adc4e91cc0c5aa8e9f102833a28bc6e3',
        synonyms: [],
        genus: 'Helianthus',
        family: 'Asteraceae',
        links: {
          self: '/api/v1/species/helianthus-annuus',
          plant: '/api/v1/plants/helianthus-annuus',
          genus: '/api/v1/genus/helianthus'
        }
      }
    ]

    const { getByText } = render(<Plants plants={plants} />)

    expect(getByText('Sunflower')).toBeDefined()
  })

  it('renders a message when there are no plants', () => {
    const { getByText } = render(<Plants plants={[]} />)

    expect(getByText('No hay plantas')).toBeDefined()
  })
})
