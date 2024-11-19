import {
  BooleanField,
  Datagrid,
  List,
  TextField,
  Show,
  SimpleShowLayout,
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  ReferenceField,
} from "react-admin";

export const SubscriptionList = () => (
  <List>
    <Datagrid>
      <TextField source="recipient_id" />
      <TextField source="event" />
      <TextField source="channel" />
      <ReferenceField source="project_id" reference="projects" />
      <BooleanField source="is_subscribed" />
    </Datagrid>
  </List>
);

export const SubscriptionShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="recipient_id" />
      <TextField source="event" />
      <TextField source="channel" />
      <ReferenceField source="project_id" reference="projects" />
      <BooleanField source="is_subscribed" />
    </SimpleShowLayout>
  </Show>
);

export const SubscriptionEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="channel" readOnly />
      <TextInput source="event" readOnly />
      <BooleanInput source="is_subscribed" />
      <TextInput source="project_id" readOnly />
      <TextInput source="recipient_id" readOnly />
    </SimpleForm>
  </Edit>
);
