import React from 'react';

const ApprovalCard = (props) => {

    return(
        
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">
            <div className="ui two buttons">
            
            <div class="ui buttons">
            <button class="ui button">Decline</button>
            <div class="or"></div>
            <button class="ui positive button">Approve</button>
            </div>

        </div>
        </div>
        </div>
    );
}

export default ApprovalCard;