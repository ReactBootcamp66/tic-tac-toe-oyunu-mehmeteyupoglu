const Game = () => {
    return (
        <div>
            <button style={styledButton}>New Game</button>
        </div>
    )
}

const styledButton = {
    margin: '20px 0 0', 
    color: 'white', 
    background: 'rgb(44 93 191)', 
    height: '45px',
    width: '125px', 
    border: 'none', 
    borderRadius: '3px', 
    boxShadow: '0 2px 15px black', 
    fontSize: '17px'
}

export default Game