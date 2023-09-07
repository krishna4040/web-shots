import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        article: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to your server)
        console.log(formData);
    };

    return (
        <div className="py-10 bg-gray-100">
            <div className="container p-5 mx-auto">
                <div className="p-8 bg-white rounded-lg shadow-lg">
                    <h1 className="mb-4 text-3xl font-semibold">Contact Us</h1>
                    <p className="mb-4 text-gray-700">We'd love to hear from you!</p>

                    <div className="prose max-w-none">
                        <p>
                            If you have any questions, suggestions, or feedback about our news application, please don't hesitate to reach out to us. Your input is valuable to us, and we're here to assist you.
                        </p>

                        <div className="mt-6">
                            <p className="font-semibold">Contact Information:</p>
                            <p>Email: <a href="mailto:info@yournewsapp.com" className="text-blue-500 hover:underline">info@yournewsapp.com</a></p>
                            <p>Phone: <span className="text-blue-500">+1 (123) 456-7890</span></p>
                        </div>

                        <div className="mt-6">
                            <p className="font-semibold">Visit Us:</p>
                            <address>
                                123 News Street<br />
                                Cityville, USA
                            </address>
                        </div>

                        <form className="mt-8" onSubmit={handleSubmit}>
                            <p className="mb-4 font-semibold">Contribute to Our Headlines</p>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full p-2 border rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full p-2 border rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full p-2 border rounded-lg resize-none"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    name="article"
                                    value={formData.article}
                                    onChange={handleChange}
                                    placeholder="Submit Your Article (Optional)"
                                    rows="6"
                                    className="w-full p-2 border rounded-lg resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;