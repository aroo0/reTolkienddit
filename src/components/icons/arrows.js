import { ReactComponent as Arrow } from '../../data/icons/up-long-solid.svg'



export const DownArrow = () => {
    return (
        <div>
          <Arrow strokeWidth="40" width='15' stroke='#2f2021' fillOpacity='0' style={{transform: 'rotate(180deg)'}}/>
        </div>
      );
}



export const UpArrow = () => {
  return (
      <div>
        <Arrow  strokeWidth="40" width='15' stroke='#2f2021' fillOpacity='0'/>
      </div>
    );
}

