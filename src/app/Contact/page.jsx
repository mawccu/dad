'use client';
import React from 'react';

function Contact({ onScheduleClick }) {
    
    const handleScheduleClick = (type) => {
        onScheduleClick(type);
        setTimeout(() => {
            const formElement = document.getElementById('contact-form');
            if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };
    return(
        <div className="min-h-screen py-32">
            <div className="container mx-auto px-4 py-8 flex flex-col items-center">
                <h1 className="text-4xl font-bold text-center mb-8">Get in contact with us</h1>
                <p className="max-w-6xl text-2xl font-300 text-center mb-16">
                    Have any questions or inquiries? We'd love to hear from you. Reach out to us to discuss your project ideas, explore collaboration opportunities,
                    or simply learn more about our work. Our team is here to assist you and provide personalized solutions.
                </p>
            </div>

            {/* number */}
            <div className="container mx-auto px-4 mb-16">
                <div className="flex justify-center gap-32">
                    <div className="text-center">
                        <h4 className="font-semibold text-1.5xl mb-4">Jordan, Amman</h4>
                        <p><a href="tel:+962795637354" className="hover:underline">+962 79 5637354</a></p>
                    </div>
                    <div className="text-center">
                        <h4 className="font-semibold text-1.5xl mb-4">Remote Consultations</h4>
                        <p>Available Worldwide</p>
                        <button 
                            onClick={() => handleScheduleClick('consultation')}
                            className="text-sm text-blue-600 mt-2 hover:text-blue-800 hover:underline transition-colors cursor-pointer bg-transparent border-none"
                        >
                            Schedule online meetings
                        </button>
                    </div>
                </div>
            </div>
            
            {/* emails */}
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center gap-16 py-8 text-1.5xl">
                    <div className="flex flex-col gap-2 text-center">
                        <h2 className="font-semibold text-2xl">General Inquiries</h2>
                        <p className="text-1xl font-300"><a href="mailto:info@newlook-jo.com" className="hover:underline">info@newlook-jo.com</a></p>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h2 className="font-semibold text-2xl">Careers</h2>
                        <p className="text-1xl font-300"><a href="mailto:careers@newlook-jo.com" className="hover:underline">careers@newlook-jo.com</a></p>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h2 className="font-semibold text-2xl">PR & Collaborations</h2>
                        <p className="text-1xl font-300"><a href="mailto:pr@newlook-jo.com" className="hover:underline">pr@newlook-jo.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FormInput = ({ label, type= 'text', value, onChange, name }) => (
    <div className="flex items-baseline">
        <label htmlFor={name} className="text-gray-800 shrink-0 text-left w-28">
            {label}
        </label>
        {type === 'textarea' ? (
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="flex-grow bg-transparent border-b border-gray-400 focus:outline-none focus:border-black transition-colors resize-none
                 focus:text-gray-700 text-gray-300 overflow-hidden"
                rows={1}
                style={{ resize: 'none' }}
                onInput={(e) => {e.target.style.height = 'auto';
                     e.target.style.height = `${e.target.scrollHeight}px`}
                    } 
            />
    ): (
        <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            className="flex-grow bg-transparent border-b border-gray-400 focus:outline-none text-gray-300 focus:border-black transition-colors focus:text-gray-700" 
        />
    )}
    </div>
)

function ContactForm({ prefillType }) {
    const prefillTemplates = {
        consultation: "I would like to schedule an online consultation to discuss my project requirements. Please let me know your available times for a video call.",
        general: "I have some questions about your services and would appreciate the opportunity to discuss my project needs.",
        collaboration: "I'm interested in exploring potential collaboration opportunities and would like to arrange a meeting to discuss further."
    };

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        details: '',
        location: '',
        phone: '',
    });

    // Handle prefill when type changes
    React.useEffect(() => {
        if (prefillType && prefillTemplates[prefillType]) {
            setFormData(prev => ({
                ...prev,
                details: prefillTemplates[prefillType],
                location: prefillType === 'consultation' ? 'Remote/Online' : prev.location
            }));
        }
    }, [prefillType]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name] : value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);

        const emptyFields = Object.entries(formData).filter(([key, value]) => !value.trim());
        if (emptyFields.length > 0) {
            alert(`Please fill in the following fields: ${emptyFields.map(([key]) => key).join(', ')}`);
            return;
        }
    }
    
    return(
        <div className="py-8">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center flex-col mb-16">    
                    <h1 className="text-4xl text-center mb-8 font-500">
                        Let's shape the future of your project together
                    </h1>
                    <p className="text-2xl text-gray-800 text-center max-w-5xl font-350">
                        We are excited to explore your ideas, share our creative vision, and guide you through the process of bringing your project to
                        life. Together, we can create a unique masterpiece.
                    </p>
                </div>

                <div className="flex items-center justify-center">
                    <div id="contact-form" className="w-full max-w-5xl py-16 bg-white">
                        <div>
                            <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-16 text-1.5xl font-400">
                                <FormInput
                                    label='Name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <FormInput
                                    label="Location"
                                    name='location'
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                                <FormInput
                                    label='Email'
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange} 
                                />
                                <FormInput 
                                    label='Phone'
                                    type='tel'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <div className="col-span-2 text-1.5xl">
                                    <FormInput 
                                        label='Details'
                                        type='textarea'
                                        name='details'
                                        value={formData.details}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="bg-transparent text-black font-semibold py-8 px-4 tracking-wider text-1.5xl underline underline-offset-4 
                                            hover:text-gray-600 hover:border-gray-600 
                                            focus:outline-none focus:text-gray-600 focus:border-gray-600
                                            transition-all duration-300"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Call(){
    const [prefillType, setPrefillType] = React.useState(null);

    const handleScheduleClick = (type) => {
        setPrefillType(type);
    };

    return(
        <div>
            <Contact onScheduleClick={handleScheduleClick} />
            <ContactForm prefillType={prefillType} />
        </div>
    )
}