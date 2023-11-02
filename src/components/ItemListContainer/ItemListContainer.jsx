const ItemListContainer = ({greeting}) =>{
   
    const greetingStyles = {
        fontSize: '35px',
        color:'#ddd',
        textAlign: 'center',

    }
    return(
        <div style={greetingStyles}>
            {greeting}
        </div>
    )
    

}

export default ItemListContainer;