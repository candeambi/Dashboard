import React, { useState } from 'react';

function LineSelector({ lines, onLineSelect }) {
  const handleLineSelect = (event) => {
    const selectedLine = event.target.value;
    onLineSelect(selectedLine);
  }

  return (
    <select onChange={handleLineSelect}>
      <option value="">Selecciona una línea de colectivo</option>
      {lines.map((line) => (
        <option key={line.route_id} value={line.route_id}>
          {line.route_short_name}
        </option>
      ))}
    </select>
  );
}

export default LineSelector;
