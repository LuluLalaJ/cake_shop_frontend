import React from 'react';
import PastCakeCard from './PastCakeCard';

function PastOrderCard({order}) {

    return (
    <div>
         {/* some bugs related to slice here - needs to be fixed */}
        <h3>- Order created: {order.created_at}</h3>
        {order.order_cakes.map( order => <PastCakeCard order={order}/>)}
        <p> Total: $ {order.total_price}</p>
    </div>
    )
}


export default PastOrderCard
