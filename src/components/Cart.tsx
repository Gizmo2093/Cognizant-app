import { Grid } from '../imports';
import CardItem from './CardItem';
import { useAppSelector } from '../hooks'

export const Cart = () => {
  let cart = useAppSelector((state) => state.cart.list)
  return (
    <>
    <Grid container sx={{ padding:3 }} alignItems="flex-start">
    {cart.map(el =>{
      return(
        <CardItem key={el._id} car={el} add={false} />
      )
    })}
    </Grid>
    </>
  );
} 
