import { CommunityType, TileStyle } from '@maps/types/index'
import { TILES } from '@maps/lib/tiles'

const data = {
  config: {
    theme: {
      color: 'green',
      tileStyle: 'stadiaOutdoors' as TileStyle
    },
    maps: [
      {
        slug: 'first-map',
        name: 'First map',
        description: 'A description of this map maybe',
        map_types: [
          {
            id: 1, // Hardcoded to match fake markers
            type: CommunityType.mobility
          }
        ]
      }
    ]
  }
}

export default data
