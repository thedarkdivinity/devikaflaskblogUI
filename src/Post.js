import React from 'react';
import PostData from "./PostData";
import Card from "./Card";
const Post = () => {
    return (
        <>
        {PostData.map((data)=>{
            return(
                <Card key={data.id} title={data.title} tagline={data.tagline} description={data.descripttion} imgsrc={data.imgsrc}/>
            )
        })}
        </>
        
    )
}

export default Post
