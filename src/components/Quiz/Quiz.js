import "./Quiz.css";
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Quiz = ({ detail }) => {
    const { question, options, correctAnswer } = detail;

    const notify = (detail) => {
        toast.info(`Correct answer: ${correctAnswer}`, {
            position: "top-center",
            autoClose: 2000,
            // hideProgressBar: false,
            pauseOnHover: true,
            closeOnClick: false,
            // progress: undefined,
            theme: "light",
        });
    };
    const correctAns = event => {
        const value = event.target.innerText;
        if (value === correctAnswer) {
            toast.success('Correct!', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            toast.error('Incorrect!', {
                position: "top-center",
                autoClose: 400,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div className="text-lime-900 m-9">
            <div className="bg-lime-200 p-6 rounded-lg">


                <button onClick={() => notify(detail)} className="flex">
                    <ToastContainer></ToastContainer>
                    <EyeIcon className="h-6 w-6"></EyeIcon>
                </button>
                <h3 className="text-2xl font-bold">{question} </h3>
                <div className="quiz-option pt-6">
                    <button onClick={(event) => correctAns(event)} className="text-xl rounded-xl p-1 bg-lime-300 text-lime-900 font-medium hover:bg-lime-800 hover:text-lime-50">
                        {options[0]}
                    </button>
                    <button onClick={(event) => correctAns(event)} className="text-xl rounded-xl p-1 bg-lime-300 text-lime-900 font-medium hover:bg-lime-800 hover:text-lime-50">
                        {options[1]}
                    </button>
                    <button onClick={(event) => correctAns(event)} className="text-xl rounded-xl p-1 bg-lime-300 text-lime-900 font-medium hover:bg-lime-800 hover:text-lime-50">
                        {options[2]}
                    </button>
                    <button onClick={(event) => correctAns(event)} className="text-xl rounded-xl p-1 bg-lime-300 text-lime-900 font-medium hover:bg-lime-800 hover:text-lime-50">
                        {options[3]}
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Quiz;
