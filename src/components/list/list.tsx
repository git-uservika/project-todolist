import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "../../redux/actions/actions";
//import styles from './list.module.scss';

export interface Task {
    "userId": number;
    "id": string;
    "title": string;
    "body": string;
}

interface iProps {
    tasks: Task[];
}

declare type MyType = EventTarget & {
    id: string;
}

const List: React.FC<iProps> = ({ tasks }) => {
    const dispatch = useDispatch();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const id = ((event.target) as MyType).id;
        dispatch(deletePost(id));
    }
    
    return (
        <div className="list-task" >
            
            {tasks.map((task) => {
                return (
                   <div className="wrapper-tasks">
                    <React.Fragment key={task.id}>
                    <Link to={`task/${task.id}`} >
                        <div className='task'>{task.title} </div>
                    </Link>
                    <button className='delete' id={task.id.toString()} onClick={handleClick}>x</button>
                    </React.Fragment>
                   </div> 
                )
            })}
           
        </div>
    )
}

export default List;