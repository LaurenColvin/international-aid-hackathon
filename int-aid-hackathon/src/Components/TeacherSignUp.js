import { Link } from "react-router-dom";

const TeacherSignUp = (props) => {
    return (
        <div>
            <div class="hero min-h-screen bg-white-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Welcome!</h1>
                    <p class="py-6">Let's create your account so you can start receiving supplies.</p>
                    <Link to="/teacher-sign-up/step-1"><button class="btn btn-primary">Next</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherSignUp;