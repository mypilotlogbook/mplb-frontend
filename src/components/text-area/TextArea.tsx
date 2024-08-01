import React from 'react';
import './TextArea.scss';

type Props = {
    placeholder: string,
    value: string,
    onChange: (value: string) => void,
    isContact?: boolean
}

const TextArea = (props: Props) => {

    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        console.log('Event:', event); // Check the event object
        console.log('Value:', event.target.value); // Check the value being passed
        if (props.onChange) {
          props.onChange(event.target.value);
        }
    }

    return (
        <textarea
            className='test text-field' 
            placeholder={props.placeholder} 
            onChange={handleChange}
            value={props.value}
            style={{
                backgroundColor: props.isContact ? 'white' : '#F0F0F0'
            }}
        />
    );

}

export default TextArea;
