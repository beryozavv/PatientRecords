import React from 'react';
import { Datagrid, List, TextField } from "react-admin";
import { ObjectField } from "../../components/ObjectField";
import { NewsFilter } from './NewsFilter';

export const NewsList = props => (
  <List {...props} filters={<NewsFilter />}>
    <Datagrid rowClick="edit">
      <TextField source="title" label="Название" />
      <ObjectField source="city" path="title" label="Город" />
      <ObjectField source="category" path="name" label="Категория" />
    </Datagrid>
  </List>
);
