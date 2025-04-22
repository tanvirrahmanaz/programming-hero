import React from 'react';


const Simpleform = () => {

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("Form submitted")
        console.log(event.target)
        console.log(event.target.name)
        console.log(event.target.name.value)
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='your name' name='name'/>
                <br />
                <input type="submit" value="Submit" />

            </form>
        </div>

        //comment added
    );
};

export default Simpleform;