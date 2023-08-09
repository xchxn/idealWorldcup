import React, { useEffect, useState } from 'react';
import './Tournament1.css';
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";


/*
사진을 선택하면 다음 대결로 넘어가는 페이지
최상단 중앙에 32강, 16강, 8강, 준결승, 결승임을 나타내는 상태변수필요
이미지 두개를 좌우로 배치, 하단에 간단한 설명
배열 중에서 랜덤으로 두개를 뽑아서 대결시키고 
선택된 것과 선택되지 않은 것의 불값을 변경
패배한 것은 다음 대결에 나타나지 않도록 설정 or 새 배열 생성 
결승이 끝나면 초기화
부전승 처리
*/

// 선택된 것을 새로운 그룹에 넣기 vs 선택되지 못한 것 bool값을 0으로 변경 후 0이면 다음 토너먼트 못나옴
// 배열을 계속해서 초기화하며 길이 리턴
// or 값이 1인것들만 새로 배열에 집어넣기


function Tournament1() {
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);
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

    const groupedImages: any[] = [];
    for (let i: number = 0; i < images.length; i+=2) {
        groupedImages.push(images.slice(i,i+1));
    }


    function click() {
        console.log("click");
        setIndex(index => index + 2);
        if(index > groupedImages.length){
            setIndex(0);
        }
    }

    return (
        <div>
            <img src={images[index]} alt={`Image ${index}`} style={{ width: '200px' }} onClick={click} />
            <img src={images[index + 1]} alt={`Image ${index + 1}`} style={{ width: '200px' }} onClick={click} />
        </div>

    )
}

export default Tournament1;