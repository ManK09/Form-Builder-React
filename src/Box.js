import React from "react";
import { useDrag } from "react-dnd";
import Itemtype from './Itemtype'

const style = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginLeft:"0.5rem",
  marginTop:"1rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
  minWidth:"150px"
};

const Box = ({ name, type, id }) => {

  const [{ isDragging }, drag] = useDrag({
    item: { name,type,id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  //console.log({name})

  return (
    <div ref={drag}  style={{ ...style }}>
      {name}
    </div>
  );
};
export default Box;
