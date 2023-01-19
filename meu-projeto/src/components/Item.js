import React from 'react';
import PropTypes from 'prop-types';

function Item({marca, ano_lancamento}) {
    return (
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
};

Item.prototype = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number,
};
Item.defaultProps= {
    marca: 'faltou a Marca',
    ano_lancamento: '0',
}

export default Item