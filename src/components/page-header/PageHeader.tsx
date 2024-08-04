import React from 'react';
import './PageHeader.scss';
import { PageHeaderProps } from '../../typescript/types/type';

const PageHeader = (props: PageHeaderProps) => {

    return (
        <div className='test page-header'>
            <h2 className="test page-title">{props.title}</h2>
            <h6 className="test page-subtitle">{props.subTitle}</h6>
        </div>
    );
    
}

export default PageHeader;