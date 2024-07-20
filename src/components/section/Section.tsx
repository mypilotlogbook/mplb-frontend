import React from 'react';
import './Section.scss';
import { SectionProps } from '../../typescript/types/type';

const Section = (props: SectionProps) => {

  return (
    <div className='test' style={{
        marginTop: props.marginTop,
        marginBottom: props.marginBottom
    }}>
      { props.children }
    </div>
  );

}

export default Section;