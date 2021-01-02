import { makeStyles } from '@material-ui/core/styles';
import Integration from '../components/integration';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import FilterIcon from '@material-ui/icons/FilterList';
import ClearIcon from '@material-ui/icons/ClearAll';
import Filters from '../components/filters';
import { useQuery } from '@apollo/client'
import { initializeApollo } from '../apollo/client'
import { IntegrationsQuery } from '../grapthql/queries'
import { useState } from 'react';

const Index = () => {
  const [filtersOpened, showFilters] = React.useState(false);

 
  let [ activeFilter, setActiveFilter ] = useState(null);

  const handleChangeSoftware = (name) => {
    showFilters(false);
    setActiveFilter(name);
  };

  let { 
    data, 
    error, 
    loading 
  } = useQuery(IntegrationsQuery, { variables: {
      first: 100,
      software_name: activeFilter      
    }
  });

  if (loading) return <div>Loading</div>

  let integrations = data.integrations.edges;
  let systems = data.systems.edges;

  return (
    <>

    <Button
        // variant="contained"        
        startIcon={<FilterIcon />}
        onClick={e => showFilters(true)}
      >
        Filter
    </Button>
    <Button
        // variant="contained"        
        startIcon={<ClearIcon />}
        onClick={e => setActiveFilter(null)}
      >
        Clear filter
    </Button>
    
    
    <Drawer anchor="right" open={filtersOpened} onClose={e=>showFilters(false)}> 
      <Filters onChange={ handleChangeSoftware } systems={systems} value={activeFilter}/>
    </Drawer>
    
    <Grid container spacing={1}>      
      { integrations.map( ({node}) => (
        <Grid item xs={12} sm={6} md={4} key={node.id}>
          <Integration node={node}/>
        </Grid>
      )) }
    </Grid>
  </>
  )
}


export default Index
