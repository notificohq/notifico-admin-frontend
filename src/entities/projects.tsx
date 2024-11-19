import { Datagrid, List, TextField, Show, SimpleShowLayout, Edit, SimpleForm, TextInput, Create } from "react-admin";

export const ProjectList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <TextField source="id" />
    </Datagrid>
  </List>
);

export const ProjectShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
    </SimpleShowLayout>
  </Show>
);

export const ProjectCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export const ProjectEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" readOnly />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);