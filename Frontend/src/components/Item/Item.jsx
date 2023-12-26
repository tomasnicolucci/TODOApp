import React, {useContext} from 'react';
import { ItemsContext } from '../../Context/ItemsContext';

function Item(){
    const { items } = useContext(ItemsContext);

    return (
      
        <div>
          {
            items ?
            items.map((item) => {
              return <p>{item.title}</p>
            })
            :
            <></>
          }     
        </div>
      
    )
}

export default Item