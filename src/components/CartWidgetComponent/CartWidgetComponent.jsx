import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context";

const CartWidgetComponent = () => {
    const {itemCount} = React.useContext(CartContext)
    const IconStyles = {
        fontSize: '24px',
        marginRight: '10px'
    }

    return(
        <div>
            <FontAwesomeIcon style={IconStyles} icon={faCartShopping} />
            <span style={{fontSize:'24px'}}>{itemCount}</span>
        </div>
    )
}
export default CartWidgetComponent;