import {useRef} from "react"



const CreateTeacher = (props) => {
const emailRef = useRef()
const passRef = useRef()

const handleClick = async () => {
    

}
    return (
        <div>
            <section>
                <p>
               
                       <input ref={emailRef} type="text" placeholder="email"/>

                       <input ref={passRef} type="text" placeholder="pass"/>

                       <button type="submit" onClick={()=> handleClick()}>Submit</button>


                </p>
            </section>
        </div>
    )
}

export default CreateTeacher;