import React from 'react';

export const ObjectField = ({ record = {}, source, path }) => (
    <span>{record[source][path]}</span>
  );
  