import { useState } from "react";

let styles = {
    header: {
        textAlign: 'centre',
        margin: '18px 2'
    },

    submitBtn: {
        backgroundColor: 'lilac',
        color: '#90e0ef',
        cursor: 'pointer'
    }
};

function Contact() {
    let [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);
    };

    return (
        <>
            <h1 style={styles.header}>Contact Me</h1>

            <p></p>

            <form onSubmit={handleSubmit}>
                <input name='name' onChange={handleChange} type="text" placeholder="Enter Your Name" />
                <input name='email' onChange={handleChange} type="text" placeholder="Enter Your Email Address" />
                <textarea name='message' onChange={handleChange} placeholder="Enter your message..." cols="30" rows="10" ></textarea>
                <button style={styles.submitBtn}>Submit</button>
            </form>        
        </>

    )
}

export default Contact;

