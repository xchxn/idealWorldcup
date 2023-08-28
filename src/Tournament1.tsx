import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tournament1.css';
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";

//타입선언
type Match = {
    player1: any;
    player1Img: any;
    player2: any;
    player2Img: any;
    winner: any | null;
    winnerImg: any | null;
};

function Tournament1() {
    const [count, setCount] = useState(4);
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    //이미지 배열
    const images: string[] = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8
    ];

    //대진 초기화
    const initialMatches: Match[] = [
        { player1: 'Player A', player1Img: image1, player2: 'Player B', player2Img: image2, winner: null , winnerImg: null},
        { player1: 'Player C', player1Img: image3, player2: 'Player D', player2Img: image4, winner: null , winnerImg: null},
        { player1: 'Player E', player1Img: image5, player2: 'Player F', player2Img: image6, winner: null , winnerImg: null},
        { player1: 'Player G', player1Img: image7, player2: 'Player H', player2Img: image8, winner: null , winnerImg: null},
    ];
    const [matches, setMatches] = useState(initialMatches);

    //대진관리
    const handleMatchWinner = (currentIndex: number, winner: string, img: any) => {
        const updatedMatches = [...matches];
        updatedMatches[currentIndex].winner = winner;
        updatedMatches[currentIndex].winnerImg = img;
        setMatches(updatedMatches);

        //결승일때
        if ( count === 1){
            //우승자를 매개로 새로운 화면 호출
            //이미지는 추후에 데이터베이스 이용..?
            navigate(`/Winner?winnerName=${winner}&?imgsrc=${`./images/image8.jpg`}`);
        }

        if (index % 2 === 0) { //매치 인데스가 짝수일 때
            const nextMatchIndex = currentIndex / 2;
            if (updatedMatches[currentIndex].winner) {
                updatedMatches[nextMatchIndex].player1 = updatedMatches[currentIndex].winner!;
                updatedMatches[nextMatchIndex].player1Img = updatedMatches[currentIndex].winnerImg!;
            }
        } else { //매치 인덱스가 홀수일 때
            const prevMatchIndex = (currentIndex - 1) / 2;
            if (updatedMatches[currentIndex].winner) {
                updatedMatches[prevMatchIndex].player2 = updatedMatches[currentIndex].winner!;
                updatedMatches[prevMatchIndex].player2Img = updatedMatches[currentIndex].winnerImg!;
            }
        }
        setMatches(updatedMatches);
        //토너먼트 길이에 따른 분기
        if(index === (count-1)){
            setCount(count/2);
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                    <img src={matches[index].player1Img} alt={`Player 1`} style={{ width: '200px' }} onClick={() => handleMatchWinner(index, matches[index].player1, matches[index].player1Img)} />
                    <p>{matches[index].player1}</p>
                </div>
                <div>
                    <img src={matches[index].player2Img} alt={`Player 2`} style={{ width: '200px' }} onClick={() => handleMatchWinner(index, matches[index].player2, matches[index].player2Img)} />
                    <p>{matches[index].player2}</p>
                </div>
            </div>
        </div>
    )
}

export default Tournament1;