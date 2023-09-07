import React from 'react';

function AboutPage() {
    return (
        <div className="py-10 bg-gray-100">
            <div className="container p-5 mx-auto">
                <div className="p-8 bg-white rounded-lg shadow-lg">
                    <h1 className="mb-4 text-3xl font-semibold">About Our News App</h1>
                    <p className="mb-4 text-gray-700">Your Trusted Source for Breaking News</p>

                    <div className="prose max-w-none">
                        <p>
                            Welcome to our cutting-edge news application! We are dedicated to bringing you the latest and most reliable news from around the world. Our mission is to keep you informed, entertained, and engaged with the stories that matter most.
                        </p>

                        <p className="mt-4 font-semibold">What Sets Us Apart:</p>
                        <ul className="ml-6 list-disc">
                            <li>Comprehensive Coverage: We cover a wide range of topics, from politics and technology to sports and entertainment.</li>
                            <li>Breaking News: Stay up-to-date with real-time breaking news alerts.</li>
                            <li>Customization: Tailor your news feed to your interests and preferences.</li>
                            <li>User-Friendly Interface: Our app is designed with your convenience in mind, making it easy to navigate and explore stories.</li>
                        </ul>

                        <p className="mt-4 font-semibold">Our Team:</p>
                        <p>
                            We are a passionate team of journalists, designers, and developers committed to delivering high-quality news content. Our goal is to provide you with a seamless and enjoyable news-reading experience.
                        </p>

                        <p className="mt-4 font-semibold">Contact Us:</p>
                        <p>
                            Have questions, suggestions, or feedback? We'd love to hear from you! Feel free to reach out to us at <a href="mailto:info@yournewsapp.com" className="text-blue-500 hover:underline">info@yournewsapp.com</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;