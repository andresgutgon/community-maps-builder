import { CommunityType, TitleStyle } from '@maps/types/index'

const data = {
  config: {
    theme: {
      color: 'green',
      tileStyle: 'osm' as TitleStyle
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
