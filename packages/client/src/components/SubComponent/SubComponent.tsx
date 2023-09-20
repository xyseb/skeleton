import { useEffect, useState } from 'react';
import SubComponentChild from './SubComponentChild/SubComponentChild';

import './SubComponent.scss';

interface ownProps {
  indexPageTestState:boolean;
}

const SubComponent:React.FC<ownProps> = (props) => {
  
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
    <div className="sub-component ml-1">
        <p className='left'>&lt;SubComponent&gt;</p>
        <div className="bl-sub-component">
          <SubComponentChild indexPageTestState={props.indexPageTestState}/>
        </div>
        <p className='left'>&lt;SubComponent/&gt;</p>
    </div>
  );
}

export default SubComponent;
