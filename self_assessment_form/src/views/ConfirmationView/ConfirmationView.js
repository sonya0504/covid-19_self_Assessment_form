import React from 'react';
import SectionMessage from '../../components/SectionMessage';
import ResponseSection from '../../components/ResponseSection';
import { useParams } from 'react-router';

const confirmationMessage = {
    id: 1,
    title: "Thank you! We’ll be in touch",
    appearance: "confirmation",
    paragraf: 'Our team will review your submittion and contact you directly in case of any issues. Please review your responses in reach out to us if you’d like to make any changes. You’ll be hearing from us again in the next 1-3 working days. In the meantime, be careful and watch out for your and your family’s well-being.'
}

const ConfirmationView = () => {
    return (
        <>
            <SectionMessage 
                title={confirmationMessage.title}
                appearance={confirmationMessage.appearance}
                paragraf={confirmationMessage.paragraf}
                key={`${confirmationMessage.id}-${confirmationMessage.appearance}`}
            />
            <ResponseSection />            
        </>
    )
}

export default ConfirmationView;
