import React from "react";
import ListItem from './ListItem';

const ListGroup = props => {
  console.log(props);    
  return (
    <div className="list-group">
      {props.tokens.map((token) => {
          return (
            <ListItem key={token.id} id={token.id} time={token.created_at} active={token.active} token={token.token} />
          )
      })}
    </div>
  );
};

export default ListGroup;
