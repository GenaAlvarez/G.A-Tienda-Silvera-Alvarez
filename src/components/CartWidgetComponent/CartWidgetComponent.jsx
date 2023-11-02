import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {
    const IconStyles = {
        fontSize: '24px',
        marginRight: '10px'
    }

    return(
        <div>
            <FontAwesomeIcon style={IconStyles} icon={faCartShopping} />
            <span style={{fontSize:'24px'}}>5</span>
        </div>
    )
}
export default CartWidgetComponent;