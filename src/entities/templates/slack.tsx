import {
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  List,
  Datagrid, Create
} from "react-admin";

export const TemplatesSlackList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <TextField source="template.text" />
      <ReferenceField source="project_id" reference="projects" />
    </Datagrid>
  </List>
);

export const TemplatesSlackShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField source="project_id" reference="projects" />
      <TextField source="channel" />
      <TextField source="name" />
      <TextField source="template.text" />
    </SimpleShowLayout>
  </Show>
);

export const TemplatesSlackEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" readOnly={true} />
      <ReferenceInput source="project_id" reference="projects" />
      <TextInput source="channel" defaultValue={"telegram"} readOnly={true} />
      <TextInput source="name" />
      <TextInput source="template.text" />
    </SimpleForm>
  </Edit>
);

export const TemplatesSlackCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="project_id" reference="projects" />
      <TextInput source="channel" defaultValue={"telegram"} readOnly={true} />
      <TextInput source="name" />
      <TextInput source="template.text" />
    </SimpleForm>
  </Create>
);
