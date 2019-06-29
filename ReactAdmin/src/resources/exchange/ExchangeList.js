import React from "react";
import {
  ArrayField,
  ChipField,
  Datagrid,
  DateField,
  List,
  TextField
} from "react-admin";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

export const ObjectField = ({ record = {} }) => (
    <span>{record.currencyCode} {record.course}</span>
  );
  

const cardStyle = {
  width: 300,
  minHeight: 300,
  margin: "0.5em",
  display: "inline-block",
  verticalAlign: "top"
};
const ExchangeGrid = ({ ids, data, basePath }) => (
  <div style={{ margin: "1em" }}>
    {ids.map(id => (
      <Card key={id} style={cardStyle}>
        <CardHeader
          title={<TextField record={data[id]} source="title" />}
          subheader={<DateField record={data[id]} source="fromDate" />}
          // avatar={<Avatar icon={<PersonIcon />} />}
        />
        {data[id].currencies.map(el => (
          <>
            <CardContent key={el.currencyCode}>
              <ObjectField record={el} source="currencyCode" />
            </CardContent>
          </>
        ))}

        {/* <CardContent>
                about&nbsp;
                <ReferenceField label="Post" resource="comments" record={data[id]} source="post_id" reference="posts" basePath={basePath}>
                    <TextField source="title" />
                </ReferenceField>
            </CardContent> */}
        {/* <CardActions style={{ textAlign: 'right' }}>
                <EditButton resource="posts" basePath={basePath} record={data[id]} />
            </CardActions> */}
      </Card>
    ))}
  </div>
);
ExchangeGrid.defaultProps = {
  data: {},
  ids: []
};

export const ExchangeList = props => (
  <List title="All comments" {...props}>
    <ExchangeGrid />
  </List>
);
