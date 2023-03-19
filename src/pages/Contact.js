import { useState } from "react";

const styles = {
    header: {
        textAlign: 'centre',
        margin: '20px 0'
    },

    submitBtn: {
        backgroundColor: 'lilac',
        color: '#fff',
        cursor: 'pointer'
    }
};

function Contact() {
    const [formData, setFormData] = useState({
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

