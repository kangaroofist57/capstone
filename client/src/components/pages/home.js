import React, { Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit, faEye, faCommentDots } from '@fortawesome/free-solid-svg-icons';

import studentChartImage from '../../images/student-chart-image.PNG';
import todosLayoutImage from '../../images/todos-layout-image.PNG';
import studentButtonsImage from '../../images/student-buttons-image.PNG';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      }
      
    render() {

        // let images = readdirSync('./');
        return(
            <div>
                <div className='images-container'>

                    <div className='image-container'>
                        <div className='image-heading'>Very organized way for you to add a data collection of students</div>
                        <img className='home-image' src={studentChartImage}/>
                    </div>

                    <div className='image-container'>
                        <div className='image-heading'>Easy simple todo list incase you need to remember something</div>
                        <img className='home-image' src={todosLayoutImage}/>
                    </div>

                    <div className='image-container'>
                        <div className='image-heading'>Buttons</div>
                        <div className='legend-container'>
                            <div>{<FontAwesomeIcon color='green' icon={faPlus} />} = Add new student to chart</div>
                            <div>{<FontAwesomeIcon color='purple' icon={faEye} />} = View all student data in that row</div>
                            <div>{<FontAwesomeIcon color='#F0810F' icon={faEdit} />} = Edit the Student data in that row</div>
                            <div>{<FontAwesomeIcon color='red' icon={faTrash} />} = delete student/todo</div>
                        </div>
                        <img className='button-image' src={studentButtonsImage}/>
                    </div>

                    {/* <div className='image-container'>
                        <div className='image-heading'>Buttons</div>
                        <img className='home-image' src={studentButtonsImage}/>
                    </div> */}

                </div>
            </div>
        )
    }
}