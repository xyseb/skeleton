import { useEffect, useState } from 'react';
import SubComponentChild from './SubComponentChild/SubComponentChild';

import './SubComponent.scss';

const SubComponent:React.FC = () => {
  
  useEffect(() => {
    console.log("SubComponent::render::first");

    // const intervalId = setInterval(() => {
    //   setTimer(timer => timer + 1);
    // }, 2000);

    return () => {
      console.log("SubComponent::cleanup");
      // clearInterval(intervalId);
    };
  }, []);

  console.log("SubComponent::render");
  

  return (
    <div className="sub-component">
        <p className='left indent4'>&lt;SubComponent&gt;</p>
        <SubComponentChild/>
        <p className='left indent4'>&lt;SubComponent/&gt;</p>
    </div>
  );
}

export default SubComponent;
