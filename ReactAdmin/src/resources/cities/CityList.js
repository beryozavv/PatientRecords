import React from "react";
import { Datagrid, List, TextField } from "react-admin";

export const CityList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" sortable={false}/>
      <TextField source="zip" sortable={false}/>
      <TextField source="title" sortable={false}/>
    </Datagrid>
  </List>
);
