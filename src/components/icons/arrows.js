import { ReactComponent as Arrow } from '../../data/icons/up-long-solid.svg'



export const DownArrow = ({handleDownClick, votedDown}) => {

  
    return (

          <Arrow onClick={handleDownClick} className={`arrow arrow-down ${votedDown ? 'voted-down' : ''}`} strokeWidth="40" stroke='#2f2021' fillOpacity='0' style={{transform: 'rotate(180deg)'}}/>
      );
}



export const UpArrow = ({handleUpClick, votedUp}) => {



  return (
        <Arrow  onClick={handleUpClick} className={`arrow arrow-up ${votedUp ? 'voted-up' : ''}`} strokeWidth="40" stroke='#2f2021' fillOpacity='0'/>
    );
}

