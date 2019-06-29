import React from "react";
import { Datagrid, List, TextField } from "react-admin";

export const SocialStatusList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" sortable={false}/>
            <TextField source="name" sortable={false}/>
        </Datagrid>
    </List>
);
