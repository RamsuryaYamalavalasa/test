import { React, useState } from 'react'
import Presentation from './Presentation'
function Container() {
    const [state, setState] = useState({
        course_code: "",
        course_name: "",
        section: "",
        sessions_planned: '',
        sessions_delivered:"",
        branch:'Branch',
    });
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div><Presentation handleChange={handleChange} state={state}/></div>
    )
}

export default Container