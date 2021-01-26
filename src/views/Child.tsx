import React from 'react';


interface Props{

    number: number;
}

const Child: React.FC<Props> = ({ number }) => {
    return <h2>Soma do número enviado: {number + number} </h2>;
}

export default Child;