import React, { useEffect, useState } from 'react';
import './Tournament1.css';
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";

/*
사진을 선택하면 다음 대결로 넘어가는 페이지
최상단 중앙에 32강, 16강, 8강, 준결승, 결승임을 나타내는 상태변수필요
이미지 두개를 좌우로 배치, 하단에 간단한 설명
배열 중에서 랜덤으로 두개를 뽑아서 대결시키고 
선택된 것과 선택되지 않은 것의 불값을 변경
패배한 것은 다음 대결에 나타나지 않도록 설정 or 새 배열 생성 
결승이 끝나면 초기화
*/

function Tournament1() {
    const [count, setCount] = useState(0);
    //이미지 배열
    const images: string[] = [
        image1,
        image2,
        image3,
        image4
    ];

    const groupedImages: any[] = [];
    for (let i: number = 0; i < images.length; i += 2) {
        groupedImages.push(images.slice(i, i + 2));
    }

    function click(){
        console.log("click");
    }

    return (
        <div>
            {groupedImages.map((group, index) => (
                <div key={index}>
                    <img src={group[0]} alt={`Image ${index * 2 + 1}`} style={{ width: '200px', height: '200px' }} onClick={click}/>
                    {group[1] && <img src={group[1]} alt={`Image ${index * 2 + 2}`} style={{ width: '200px', height: '200px' }}/>}
                </div>
            ))}
        </div>
    )
}

export default Tournament1;