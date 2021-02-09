import React from 'react';
import { ButtonDonate } from './donate.style';
import FavoriteIcon from '@material-ui/icons/Favorite';
const Donate = () => {
    return (
        <div>
            <ButtonDonate >Donate <FavoriteIcon style={{ color: 'white' }}/></ButtonDonate>
        </div>
    );
};

export default Donate;