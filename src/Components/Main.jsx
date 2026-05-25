import React, { useState } from 'react';
const Main = () => {
    const [imgUrl,setUrl] = useState("./images/photo.jpg");
    const callImg = () => {
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res=>res.json())
        .then(data=>setUrl(data[0].url))
    }
    return (<>
        <div className="container">
            <div className="box">
                <h2>Random Images, Endless Possibilities</h2><br />
                <img className="image" src={imgUrl} alt="Random Image"/> <br/>
                <button onClick={()=>callImg()}>Click me</button>
            </div>
        </div>
    </>)
}

export default Main;