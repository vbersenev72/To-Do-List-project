import React from "react"
import { useState } from "react"


function AddTask({ todo, setTodo }) {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');




    const AddNewPost = (e) => {
        e.preventDefault()

        if(title == ''){
            alert("please, input title")
        } else if(body == ''){
            alert("please, input description")
        } else{
            setTodo([...todo, {
                id: Date.now(),
                title: title,
                body: body,
                status: true
            }])
        }
        
    };

    return (
        <form className="Form">

            <div className="AddTask">

                <input type={"text"}
                    placeholder="Name task"
                    value={title}
                    onChange={e => (setTitle(e.target.value))}>
                </input>

                <input type={"text"}
                    placeholder="Description task"
                    value={body}
                    onChange={e => (setBody(e.target.value))}>
                </input>

                <button onClick={AddNewPost}>Create task</button>

            </div>


        </form>


    )

};


export default AddTask;