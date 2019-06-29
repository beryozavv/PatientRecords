import React from "react";
import { Filter, ReferenceInput, SelectInput } from "react-admin";

export const NewsFilter = props => (
  <Filter {...props}>
    {/* <TextInput label="Поиск" source="q" alwaysOn /> */}
    <ReferenceInput
      label="Категория"
      source="category.id"
      reference="Category"
      allowEmpty
      alwaysOn
    >
      <SelectInput optionText="name" />
    </ReferenceInput>
    <ReferenceInput label="Город" source="city.id" reference="City" allowEmpty>
      <SelectInput optionText="title" />
    </ReferenceInput>
  </Filter>
);
