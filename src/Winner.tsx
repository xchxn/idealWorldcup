import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Winner = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const winnerName : string | null = searchParams.get('winnerName');

    //이미지는 추후에 db로 교체
    const imgsrc : any = searchParams.get('imgsrc');

    return(
        <div>
            <h2>Winner Page</h2>
            <p>Winner Name: {winnerName}</p>
            <img src={imgsrc} alt="Winner" />
        </div>
    )
}

export default Winner;
