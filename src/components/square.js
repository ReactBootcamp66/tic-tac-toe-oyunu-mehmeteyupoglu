const Square = (props) => {
    
    return (
        <div>
            <button
                style={styledButtons}
                onClick={() => props.onClick()}
            >
                {props.value}
            </button>
        </div>
    )
}

const styledButtons = {
    background: 'rgb(27 48 107)',
    border: '1px solid #999',
    fontSize: '64px',
    lineHeight: '125px',
    height: '125px',
    marginRight: '-2px',
    marginTop: '-2px',
    padding: '0',
    textAlign: 'center',
    width: '125px',
    color: 'white'
}
export default Square