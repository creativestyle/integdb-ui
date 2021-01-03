import { initializeApollo } from '../apollo/client'
import { IntegrationsQuery } from '../grapthql/queries'
import List from '../components/list'

const Index = () => {

  return (
    <>
      <List />
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: IntegrationsQuery,
    variables: {
      first: 100,
      software_name: null
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Index
