import { useEffect, useState } from "react"
import "./Nav.css"

function Nav() {
const [show,handleShow] = useState(false)
useEffect(() => { 
    window.addEventListener("scroll",() => {
        if(window.scrollY > 100 ){// Y axessu 100% laye setderse westu yalwen value true adergate
        handleShow(true)
    } else handleShow(false)

})
// return () =>{
// window.removeEventListener("scroll, handleshow")
// }
},[])

  return (
    // huley nav yehun show true kehonce  nav-black yemelwen class cemerlge
    <div className={`nav ${show && "nav_black"}`}>
 
<img className="nav_logo"
src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456" alt="Netflix Logo"

/>
<img className="nav_avatar"
src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar logo" /> 

    </div>
  )
}

export default Nav





















