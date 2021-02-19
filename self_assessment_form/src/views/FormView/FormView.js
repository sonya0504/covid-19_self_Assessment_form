import React from 'react';
import SectionMessage from '../../components/SectionMessage';
import FormSection from '../../components/FormSection';

const warningMessage = {
    title: "Call 911 if you’re experincing any severe symptoms",
    appearance: "error",
    actions: {
        key: '1',
        href: '#',
        text: 'Learn more',
      },
    paragraf: 'This form was designed to help you get a general overview of your health. If you’re experiencing severe difficulty breathing, chest pain, feeling of confusion or losing conciousness, please reach out to a medical professional.'
}

const FormView = () => {
    return (
        <>
            <SectionMessage 
                title={warningMessage.title}
                appearance={warningMessage.appearance}
                action={warningMessage.actions}
                paragraf={warningMessage.paragraf}
            />
            <FormSection /> 
        </>
    )
}

export default FormView;
