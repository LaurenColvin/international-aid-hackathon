import {useRef} from "react"
import { dbClient } from "../../services/dbClient"


const CreateTeacher = (props) => {
const emailRef = useRef()
const passRef = useRef()

const handleClick = async (event) => {
    event.preventDefault()
    console.log(dbClient)
console.log(emailRef.current.value)
console.log(passRef.current.value)


    const { user, session, error } = await dbClient.auth.signUp({
        email: emailRef.current.value ,
        password: passRef.current.value
      }) 

      if (user) {
          console.log(session)
          console.log("woo")
          return console.log(user)
      } else { 
          return console.error(error, 401)
      }


}
    return (
        <div>
            <section>
                <p>
               
                       <input ref={emailRef} type="text" placeholder="email"/>

                       <input ref={passRef} type="text" placeholder="pass"/>

                       <button onClick={(e)=> handleClick(e)}>Submit</button>


                </p>
            </section>
        </div>
    )
}

export default CreateTeacher;