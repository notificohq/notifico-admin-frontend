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

export const TemplatesList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <TextField source="channel" />
      <TextField source="template.parts.body" />
      <ReferenceField source="project_id" reference="projects" />
    </Datagrid>
  </List>
);

export const TemplatesShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField source="project_id" reference="projects" />
      <TextField source="channel" />
      <TextField source="name" />
      <TextField source="template" />
    </SimpleShowLayout>
  </Show>
);

export const TemplatesEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" readOnly={true} />
      <ReferenceInput source="project_id" reference="projects" />
      <TextInput source="channel" defaultValue={"telegram"} readOnly={true} />
      <TextInput source="name" />
      <TextInput source="template" multiline={true} />
    </SimpleForm>
  </Edit>
);

export const TemplatesCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="project_id" reference="projects" />
      <TextInput source="channel" defaultValue={"telegram"} readOnly={true} />
      <TextInput source="name" />
      <TextInput source="template" multiline={true} />
    </SimpleForm>
  </Create>
);
