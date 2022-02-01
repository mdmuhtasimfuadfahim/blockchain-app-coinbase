// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import screening from './screening'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    {
      title: 'Coins',
      name: 'coins',
      type: 'document',
      fields:[
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Symbols',
          name: 'symbol',
          type: 'string',
        },
        {
          title: 'Contract Address',
          name: 'contractAddress',
          type: 'string',
        },
        {
          title: 'BDT Price',
          name: 'bdtPrice',
          type: 'string',
        },
        {
          title: 'Logo',
          name: 'logo',
          type: 'image',
        },
      ],
    },
  ]),
})
