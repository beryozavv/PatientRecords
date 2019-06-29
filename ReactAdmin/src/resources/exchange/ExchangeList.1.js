import React from "react";
import {
  ArrayField,
  ChipField,
  Datagrid,
  DateField,
  List,
  TextField
} from "react-admin";
export const ExchangeList = props => (
  <List {...props}>
    <Datagrid>
      <DateField source="fromDate" />
      <TextField source="title" />
      <ArrayField source="currencies">
        <Datagrid>
          <ChipField source="currencyCode" />
          <TextField source="course" />
        </Datagrid>
      </ArrayField>
    </Datagrid>
  </List>
);
