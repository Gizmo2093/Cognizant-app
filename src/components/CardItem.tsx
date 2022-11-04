import React from 'react';
import { Card, Typography, CardActionArea, Box, Grid, CardMedia } from '../imports';
import Modal from './Modal';

interface CardProps{
  add: boolean,
  car:{
    _id: number,
    model: string,
    year_model: number,
    price: number,
    licensed: boolean,
    date_added: string,
    img: string,
  }
}
const CardItem:React.FC<CardProps> = ({car, add}) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return(
    <div>
      <Card onClick={handleClickOpen} className='CardItem' sx={{ minWidth: 300, margin:2 }}>
        <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={car.img}
              alt="car image"
            />
            <Box sx={{ my: 3, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item lg>
                  <Typography gutterBottom variant="h4" component="div">
                    {car._id}. {car.model}
                  </Typography>
                </Grid>
              </Grid>
              <Typography color="text.secondary" variant="body2">
                added: {car.date_added}
              </Typography>
            </Box>
        </CardActionArea>
      </Card>
      <Modal open={open} onClose={handleClose} car={car} add={add} />
    </div>
  )
}

export default CardItem