import React from 'react';
import { Datagrid, List, TextField } from "react-admin";

export const CategoryList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" sortable={false}/>
            <TextField source="name" sortable={false}/>
        </Datagrid>
    </List>
);