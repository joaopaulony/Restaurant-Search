import React from 'react';

import { Restaurant, RestaurantInfo } from './styles';

const RestaurantCard = () => 
<Restaurant>
    <RestaurantInfo>
        <p>Nome do Restaurante</p>
        <p>Avaliação</p>
        <p>Endereço</p>
    </RestaurantInfo>
</Restaurant>

export default RestaurantCard;