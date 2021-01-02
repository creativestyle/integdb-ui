import gql from 'graphql-tag'

export const IntegrationsQuery = gql`
  query IntegrationsQuery($first: Int, $software_name: String) {
    integrations(first: $first, software_name: $software_name) {
      edges {
        node {
          id
          year
          market
          customer
          url
          industry {
            name
          }
          software {
            name
            company
            logo
          }
          partner {
            name
            url
          }
        }
      }
    }
    systems(first: 100) {
    	edges {
        node {
          name
          company
          _id
        }
      }
  	}
  }
`
