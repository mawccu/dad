'use client';
import React from 'react';



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
                rows='1'
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


export default function ContactForm() {

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        details: '',
        location: '',
        phone: '',
    })

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
        <>
        <div>
            <div className="flex items-center justify-center flex-col">    
                <h1 className="text-4xl text-center mb-20 font-500">
                    Let's shape the future of your project together
                </h1>
                <p className="text-2xl text-gray-800 text-center max-w-5xl font-350">
                    We are excited to explore your ideas, share our creative vision, and guide you through the process of bringing your project to
                    life. Together, we can create a unique masterpiece.
                </p>
            </div>
        </div>

        <div className="flex items-center justify-center">
            <div className="w-full max-w-5xl py-16 bg-white">
                    <form onSubmit={handleSubmit}>
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
                                className="bg-transparent text-black font-medium py-2 px-4 tracking-wider text-1.5xl underline
                                        hover:text-gray-600 hover:border-gray-600 
                                        focus:outline-none focus:text-gray-600 focus:border-gray-600
                                        transition-all duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
            </div>
    </div>
    </>
    )
}

