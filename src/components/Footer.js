import React from 'react';

const Call = (props) => {
    return (
        <div>
            My name is {props.name}
            <br />
            My rollno is {props.rollno}
            <br />
            My phone number is {props.phone}
            <br />
            My email is {props.email}
            <br/>
        </div>
    )
}

export default Call;
