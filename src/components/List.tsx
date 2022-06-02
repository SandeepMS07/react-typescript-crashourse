import React from "react";
import {Istate as IProps} from "../App"
 
// const List = ({ people }: IProps) => {
//   return <div>I am a List</div>;
// };

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img src={person.img} alt="" className="List-img" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };
  return (
    <ul>
      {renderList()}
    </ul>
  )
};

export default List;
