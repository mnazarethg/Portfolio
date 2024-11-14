//CHEQUEAR SI FUNCIONA EL IFRAME
import Header from "./Header";
function Curriculum() {
    return (
    <>
    <Header/>
    <div>
    <iframe 
            src="https://docs.google.com/document/d/e/2PACX-1vSyx6DMnYAAE79ASduMWZK7FR-7h4ZRhfO4xJU5MnogOVJG4QSLOdTDzRSY9PVRYg/pub?embedded=true" 
            title="curriculum" 
            width="100%" 
            height="600px"         
        ></iframe>
    </div>
    </>
    )
}

export default Curriculum;
