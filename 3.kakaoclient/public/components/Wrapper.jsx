//rfce
function Wrapper({children}) {
    const style = {
        border: "2px solid black",
        marginLeft: "30px",
        marginTop: "20px",
        padding: "30px",
        width: "750px"
    };

    return (
        <div style={style}>
           {children}<p></p>
        </div>
    )
}
export default Wrapper