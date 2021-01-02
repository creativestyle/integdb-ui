
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Integration = (props) => {
    const classes = useStyles();
    let {node} = props;
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
            <Typography variant="h6">
                {node.software.name}
            </Typography>
            <Typography variant="caption">
                {node.software.company} 
            </Typography>
            <br/>
            <Typography variant="body1">
                {node.customer } by {node.partner.name}
            </Typography>
            <Box>
                {node.industry && <Chip size="small" label={node.industry.name}/>}
                {node.market && <Chip size="small" label={node.market}/>}
                {node.year && <Chip size="small" label={node.year} />}
            </Box>
            </CardContent>
            <CardActions>
            <Button size="small" color="primary" href={node.partner.url}>Partner details</Button>
            {node.url && <Button size="small" href={node.url}>Visit shop</Button>}
            </CardActions>
        </Card>
    )
}

export default Integration;