import React from 'react';
import uuid from 'uuid';
import Note from './Note';
import Editable from './Editable';

export default ({
  notes,
  onDelete=()=>{}, onNoteClick=()=>{}, onEdit=()=>{}}) => (
  <ul>{notes.map(({id, editing, task}) =>
    <li key={id}>
      <Note onClick={onNoteClick.bind(null, id)}>
        <Editable
           editing={editing}
           value={task}
           onEdit={onEdit.bind(null, id)} />
        <button onClick={onDelete.bind(null, id)}>x</button>
      </Note>
    </li>
  )}</ul>
)
