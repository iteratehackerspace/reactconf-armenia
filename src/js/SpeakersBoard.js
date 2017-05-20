
import React from 'react';
import Speaker from './Speaker';
const speakers = [
    {image: "https://s-media-cache-ak0.pinimg.com/originals/5a/fb/73/5afb73e7709963d04df4bd3747ae2d0c.jpg", text: "Name Surname1"},
    {image: "http://s7d2.scene7.com/is/image/PetSmart/SV0401_CATEGORY_HERO-Dog-Dog-20160818?$SV0401$", text: "Name Surname2"},
    {image: "https://s-media-cache-ak0.pinimg.com/236x/c4/0f/a6/c40fa61201fc581034bcaee5235980a0.jpg", text: "Name Surname3"}
];


export default class SpeakersBoard extends React.Component {
    render() {
        return (
            <div className="App-SpeakersBoard">
                {
                    speakers.map((item, i)=> <Speaker 
                        key={i} 
                        image={item.image} 
                        text={item.text}/>)
                }
            </div>
        );
    }
}
