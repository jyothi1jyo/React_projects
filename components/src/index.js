import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';        // ./ means look in the same folder
import ApprovalCard from './ApprovalCard';

//App component
const App = () => {
    return (
        <div className ="ui cointainer comments">
            <ApprovalCard>
                <CommentDetail 
                    author="jyothi"  
                    timeAgo="Today at 4:41am" 
                    content="nice!!"
                    avatar = {faker.image.avatar()}
                /> 
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Snigdha"  
                    timeAgo="Today at 1:41am" 
                    content="Interesting "
                    avatar = {faker.image.avatar()}
                /> 
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Ankit pushpam"  
                    timeAgo="Today at 9:41am" 
                    content="nice job."
                    avatar = {faker.image.avatar()}
                /> 
            </ApprovalCard>

            <ApprovalCard>Do you wanna go over ?</ApprovalCard>
              
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);