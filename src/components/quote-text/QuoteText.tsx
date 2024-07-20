import React from 'react';
import './QuoteText.scss';
import { QuoteTextProps } from '../../typescript/types/type';

const QuoteText = (props: QuoteTextProps) => {

  return (
    <h1 className='test quote-text'>{props.quote}</h1>
  );

}

export default QuoteText;