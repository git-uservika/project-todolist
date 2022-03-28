import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPosts } from "../../redux/actions/actions";
import styles from './styles.module.scss';


const Input: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleClick = () => {
        dispatch(addPosts([
            {
                userId: 1,
                id: inputValue,
                title: inputValue,
                body: ''
            }
        ]))
    }

    return (
        <div className="wrap">
             <label className={styles.title}>
              <h1 className="title">Todo List</h1>
            </label>
           
            <input type="text"   onChange={handleChange} />
            
            <span  onClick={handleClick}>add</span>
        
        </div>
    )
}

export default Input;