import React from "react";
import {
  DateInput,
  Edit,
  LongTextInput,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  ImageInput,
  ImageField
} from "react-admin";
import { NewsTitle } from "./NewsTitle";

export const NewsEdit = props => (
  <Edit {...props} title={<NewsTitle />}>
    <SimpleForm>
      <LongTextInput source="title" />
      <ReferenceInput source="city.id" reference="City" label="Город">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <ReferenceInput source="category.id" reference="Category" label="Категория">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <LongTextInput source="description" />
      {/* <ImageInput source="imagePath"> */}
        <ImageField source="imagePath" title="Image" />
      {/* </ImageInput> */}
      {/* <TextInput source="filePath" /> */}
      {/* <TextInput source="category.id" /> */}
      <DateInput source="createdUtc" />
    </SimpleForm>
  </Edit>
);
