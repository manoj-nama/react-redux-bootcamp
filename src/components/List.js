import React from 'react';
import Button from './Button';

const List = ({ items, label, onClick, loading }) => {
  if (loading) {
    return <p>Loading data ...</p>
  }
  return (
    <React.Fragment>
      <ul>
        {
          items.map(item => (
            <li key={item.id}>
              <img src={item.avatar} alt="user avatar" />
              <span>{item.first_name} {item.last_name}</span>
            </li>
          ))
        }
      </ul>
      <Button label={label} onClick={onClick} />
    </React.Fragment>
  )
}

export default List;