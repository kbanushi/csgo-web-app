import React from 'react';
import {useParams} from "react-router-dom";

function Stats (){
    const {steamID} = useParams();

    return(
        <div>
            Steam ID: {steamID}
        </div>
    )
}

export default Stats;