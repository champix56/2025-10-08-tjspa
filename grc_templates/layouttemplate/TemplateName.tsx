import React from 'react';
import styles from './TemplateName.module.css';

interface ITemplateNameProps {
  children:string|React.ReactElement|Array<React.ReactElement|string>
}

const TemplateName: React.FC<ITemplateNameProps> = ({children}) => (
  <div className={styles.TemplateName} data-testid="TemplateName">
    {children}
  </div>
);

export default TemplateName;
