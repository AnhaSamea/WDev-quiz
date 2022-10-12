
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicDetails = () => {
    const details = useLoaderData();
  
    // console.log(details.data.questions[0]);
    // const {question,options} = topic.data;
    // const {question}
    return (
        <div>
            
            {
               
                details.data.questions.map(detail=> <Quiz key={detail.id} detail={detail}></Quiz>)
            }
           

        </div>
    );
};

export default TopicDetails;
// /topic/:id