
function Pain({text,setText}){
    function input(e){
        setText(e.target.value)
       
    }
    function CLEAR(){
        setText('')
    }
return (
    <>
    <input type="text" value={text} onChange={input} />
    <button onClick={CLEAR}>CLEAR</button>
    <h2>{text}</h2>
    </>
)
}













export {Pain };