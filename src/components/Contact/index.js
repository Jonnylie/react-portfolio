import React from 'react';
import { useForm } from 'react-hook-form';
import {
    useNetlifyForm,
    NetlifyFormProvider,
    NetlifyFormComponent,
    Honeypot
} from 'react-netlify-forms'
import './form.css'

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const netlify = useNetlifyForm({
        name: 'react-hook-form',
        action: '/thanks',
        honeypotName: 'bot-field',
        onSuccess: (response, context) => {
            console.log('Successfully sent form data to Netlify Server')
        }
    })
    const onSubmit = (data) => netlify.handleSubmit(null, data)
    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i

    return (
        <div className='form-container'>
            <div className='form-content'>
                <NetlifyFormProvider {...netlify}>
                    <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
                        <Honeypot />
                        {netlify.success && (
                            <p sx={{ variant: 'alerts.success', p: 3 }}>
                                Thanks for contacting us!
                            </p>
                        )}
                        {netlify.error && (
                            <p sx={{ variant: 'alerts.muted', p: 3 }}>
                                Sorry, we could not reach servers. Because it only works on Netlify,
                                our GitHub demo does not provide a response.
                            </p>
                        )}
                        <input type="hidden" name="form-name" value="contact" />
                        <h1> Get in Touch</h1>
                        <p>Feel free to contact me</p>
                        <div className='form-inputs'>
                            <label className='form-label'>Name</label>
                            <input className='form-input' type="text" placeholder="Enter your name" name="Name" ref={register({ required: true })} />
                            <p>{errors.Name && 'Last name is required.'}</p>
                            <label className='form-label'>Email</label>
                            <input className='form-input' type="email" placeholder="Enter your email" name="Email" ref={register({ required: true })} />
                            <p>{errors.Name && 'Last name is required.'}</p>
                            <label className='form-label'>Subject</label>
                            <input className='form-input' type="text" placeholder="Enter your subject" name="Subject" ref={register({ required: true })} />
                            <p>{errors.Name && 'Last name is required.'}</p>
                            <label className='form-label'>Message</label>
                            <input className='form-input-message' type="text" placeholder="Enter your message" name="Message" ref={register({ required: true })} />
                            <p>{errors.Name && 'Last name is required.'}</p>
                            <button className='form-input-btn' type="submit" sx={{ variant: 'buttons.success' }} />
                        </div>
                    </NetlifyFormComponent>
                </NetlifyFormProvider>
            </div>
        </div>
    );
}

export default Contact
