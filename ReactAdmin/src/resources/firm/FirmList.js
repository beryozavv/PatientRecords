import React from "react";
import {
  ArrayField,
  ChipField,
  Datagrid,
  DateField,
  EmailField,
  List,
  NumberField,
  SingleFieldList,
  TextField
} from "react-admin";

export const FirmList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" sortable={false} />
      {/* <ReferenceField source="webId" reference="webs"><TextField source="id" /></ReferenceField> */}
      <TextField source="name" sortable={false} />
      <TextField source="secondName" sortable={false} />
      {/* <TextField source="addressName" />
      <TextField source="description" />
      <TextField source="workHours" />
      <EmailField source="email" />
      <TextField source="site" />
      <TextField source="icq" />
      <TextField source="skype" />
      <TextField source="annualTurnover" />
      <NumberField source="workCount" />
      <DateField source="founded" />
      <TextField source="capital" />
      <TextField source="phone" />
      <TextField source="fax" />
      <TextField source="tagDescription" />
      <TextField source="blacklistDescription" />
      <TextField source="mapCode" />
      <TextField source="socialNetworks.facebookUrl" />
      <DateField source="city.zip" />
      <TextField source="cdTitle" />
      <TextField source="cdDescription" />
      <TextField source="cdPhone" />
      <TextField source="cdSite" />
      <TextField source="photos" />
      <ArrayField source="managers">
        <SingleFieldList>
          <ChipField source="id" />
        </SingleFieldList>
      </ArrayField>
      <ArrayField source="occupations">
        <SingleFieldList>
          <ChipField source="id" />
        </SingleFieldList>
      </ArrayField>
      <NumberField source="bank.id" /> */}
    </Datagrid>
  </List>
);
