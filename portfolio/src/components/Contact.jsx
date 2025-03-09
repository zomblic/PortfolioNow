import React from "react";

const Contact = () => {
    const [state, setState] = React.useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted!", formData);
        setState({ name: "", email: "", message: "" });
    };

    return (
        <div className="container">
            <h1>Let's get in contact!</h1>
            {/* Form */}

            {submitted ? (
                <div className="alert alert-success" role="alert">
                    Your message has been submitted successfully! We will get back to you soon.
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={(style = Contact.css)}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={state.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};