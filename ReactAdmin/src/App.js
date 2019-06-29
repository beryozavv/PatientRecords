import React from "react";
import { Admin, Resource, ListGuesser, EditGuesser, Edit, SimpleForm, TextInput, DateInput, TextField, LongTextInput, ShowGuesser } from "react-admin";
import { SocialStatusList } from "./resources/socialStatus/SocialStatusList";
import dataProviderCreator from "./dataProvider/dataProviderCreator";
// import { NewsEdit } from "./resources/news/NewsEdit";
// import { CityList } from "./resources/cities/CityList";
// import { CategoryList } from "./resources/category/CategoryList";
// import { FirmList } from "./resources/firm/FirmList";

// import { ExchangeList } from "./resources/exchange/ExchangeList";

const dataProvider = dataProviderCreator("api");

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="SocialStatus" options={{ label: 'Социальный статус' }} list={ListGuesser} />
  </Admin>
);
