import { Datagrid, List, ReferenceField, TextField, Edit, ReferenceInput, SimpleForm, TextInput, Create, Show, SimpleShowLayout } from "react-admin";

export const EventList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <ReferenceField source="project_id" reference="projects" />
    </Datagrid>
  </List>
);

export const EventShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <ReferenceField source="project_id" reference="projects" />
    </SimpleShowLayout>
  </Show>
);

export const EventEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const EventCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceInput source="project_id" reference="projects" />
    </SimpleForm>
  </Create>
);
