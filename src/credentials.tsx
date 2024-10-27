import { Datagrid, List, ReferenceField, TextField, Show, SimpleShowLayout, Edit, ReferenceInput, SimpleForm, TextInput, Create } from 'react-admin';
import { JsonField, JsonInput } from "react-admin-json-view";

export const CredentialList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <TextField source="type" />
      <TextField source="project_id" />
      <JsonField source="value" />
    </Datagrid>
  </List>
);

export const CredentialShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="project_id" />
      <TextField source="type" />
      <TextField source="name" />
      <JsonField source="value" />
    </SimpleShowLayout>
  </Show>
);


export const CredentialEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" readOnly={true} />
      <TextInput source="project_id" />
      <TextInput source="type" />
      <TextInput source="name" />
      <JsonInput source="value" />
    </SimpleForm>
  </Edit>
);

export const CredentialCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" readOnly={true} />
      <TextInput source="project_id" />
      <TextInput source="type" />
      <TextInput source="name" />
      <JsonInput source="value" />
    </SimpleForm>
  </Create>
);
