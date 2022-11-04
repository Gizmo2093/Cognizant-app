import { Accordion, AccordionSummary, AccordionDetails, Typography, ExpandMoreIcon, Grid } from '../imports'

import CardItem from './CardItem';
import { useFetchWarehouseQuery } from '../store/WarehouseSlice'

export const Homepage = () => {

  let { data = [] } = useFetchWarehouseQuery()

  return (
    <>
    {data.map((el, id) =>{ 
      return(
        <Accordion key={id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography key={el.id}>{el.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={5} alignItems="flex-end">
            {el.cars.vehicles.map((car,id) => 
              <Grid item key={id} xs={12} sm={6} md={4}>
                <CardItem key={id} car={car} add={true} />
              </Grid>
            )}
            </Grid>
          </AccordionDetails>
        </Accordion>
      )
     })}
    </>
  );
}