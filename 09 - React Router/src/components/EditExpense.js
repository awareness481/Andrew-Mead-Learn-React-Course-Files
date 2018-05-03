import React from 'react';

const EditExpense = (props) => {
    return (
      <div>
        Editing {props.match.params.id}
        </div>
    );
  }

export default EditExpense;