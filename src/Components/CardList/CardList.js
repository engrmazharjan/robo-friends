import React, { Fragment } from "react";
import Card from "../Card/Card";

const CardList = ({ robots }) => {
  return (
    <Fragment>
      <div>
        {robots.map((user, index) => {
          return (
            <Card
              key={robots[index].id}
              id={robots[index].id}
              name={robots[index].name}
              email={robots[index].email}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default CardList;
