import './Quiz.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        })
    };

    return (
        <div className='text-lime-900 m-9'>
            <div className='bg-lime-200 p-6 rounded-lg'>
                {/* <p>{correctAnswer}</p> */}

                <button onClick={() => notify(detail)} className='flex'><ToastContainer></ToastContainer><EyeIcon className='h-6 w-6'></EyeIcon></button>
                <h3 className='text-2xl font-bold'>{question} </h3>



                <div className='quiz-option pt-6'>
                    <button className='text-xl rounded-xl p-1 bg-lime-300 text-lime-900 font-medium hover:bg-lime-800 hover:text-lime-50'>{options[0]}</button>
                    <button className='text-xl rounded-xl p-1 bg-lime-300 text-lime-900 font-medium hover:bg-lime-800 hover:text-lime-50'>{options[1]}</button>
                    <button className='text-xl rounded-xl p-1 bg-lime-300 text-lime-900 font-medium hover:bg-lime-800 hover:text-lime-50'>{options[2]}</button>
                    <button className='text-xl rounded-xl p-1 bg-lime-300 text-lime-900 font-medium hover:bg-lime-800 hover:text-lime-50'>{options[3]}</button>
                    {/* <p className='text-xl'><strong>i.</strong> {options[0]}</p> */}
                    {/* <p className='text-xl'><strong>ii.</strong> {options[1]}</p>
            <p className='text-xl'><strong>iii.</strong> {options[2]}</p>
            <p className='text-xl'><strong>iv.</strong> {options[3]}</p> */}
                </div>
            </div>
        </div>
    );
};

export default Quiz;