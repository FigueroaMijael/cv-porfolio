import React from 'react'
import Icon from './icon'
import './buttom.css'
import { useTranslation } from '../../Context/Languaje-context';

export const ButtomGet = () => {

    const { translate } = useTranslation(); // Usa el contexto
    
    return (
        <button className="cssbuttons-io-button">
            {translate('readmore')}
            <div className="icon">
                <Icon/>
            </div>
        </button>
    )
}

export default ButtomGet