import React from 'react';
import { ButtonDonate } from './donate.style';
import FavoriteIcon from '@material-ui/icons/Favorite';
const Donate = () => {
    return (
        <div>
            <ButtonDonate href="https://flutterwave.com/pay/sman-donation" >Donate <FavoriteIcon style={{ color: 'white' }}/></ButtonDonate>
        </div>
    );
};

export default Donate;