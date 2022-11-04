import React from 'react';
import {
  Button,
  DialogTitle,
  Dialog,
  IconButton,
  CloseIcon,
  Typography,
  DialogContent,
  DialogActions,
  AttachMoneyIcon,
  CalendarMonthIcon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  CheckCircleOutlineIcon,
  HighlightOffIcon,
  CardMedia
}
from '../imports'

import { useAppDispatch, useAppSelector } from '../hooks'
import { addToCart, removeToCart } from '../store/CartSlice'


interface ModalProps{
  add: boolean,
  open: boolean,
  onClose: () => void,
  car:{
    _id: number,
    model: string,
    year_model: number,
    price: number,
    licensed: boolean,
    date_added: string,
    img: string
  }
}
const Modal:React.FC<ModalProps> = ({open, onClose, car, add}) =>{
  
  const dispatch = useAppDispatch();

  let addcar = () => {
    dispatch(addToCart(car))
    onClose()
  }

  let delcar = () => {
    dispatch(removeToCart(car._id))
    onClose()
  }

  return(
    <Dialog 
      open={open}
      sx={{'& .MuiDialog-paper': { width: '80%' }}}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <Typography>
          {car._id}. {car.model}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={() => onClose()}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ mt:2 }}>
        <CardMedia
          component="img"
          height="300"
          image={car.img}
          alt="car image"
        />
        <List>
          <ListItem
            
            disableGutters
            secondaryAction={car.price}
          >
            <ListItemText primary={
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
            } />
          </ListItem>
          <Divider />
          <ListItem
            disableGutters
            secondaryAction={car.year_model}
          >
            <ListItemText primary={
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
            } />
          </ListItem>
          <Divider />
          <ListItem
            disableGutters
            secondaryAction={car.licensed ? 'licensed' : 'not licensed'}
          >
            <ListItemText primary={
               <ListItemIcon>
                {car.licensed ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
               </ListItemIcon>
            } />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        {add ? 
        <Button autoFocus onClick={() => addcar()}>
          Add
        </Button>
        :
        <Button autoFocus onClick={() => delcar()}>
          Remove
        </Button>
      }
      </DialogActions>
    </Dialog>
  )
}
export default Modal