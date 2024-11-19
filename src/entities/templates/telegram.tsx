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

export const TemplatesTelegramList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <TextField source="template.body" />
      <ReferenceField source="project_id" reference="projects" />
    </Datagrid>
  </List>
);

export const TemplatesTelegramShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField source="project_id" reference="projects" />
      <TextField source="channel" />
      <TextField source="name" />
      <TextField source="template.body" />
    </SimpleShowLayout>
  </Show>
);

export const TemplatesTelegramEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" readOnly={true} />
      <ReferenceInput source="project_id" reference="projects" />
      <TextInput source="channel" defaultValue={"telegram"} readOnly={true} />
      <TextInput source="name" />
      <TextInput source="template.body" />
    </SimpleForm>
  </Edit>
);

export const TemplatesTelegramCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="project_id" reference="projects" />
      <TextInput source="channel" defaultValue={"telegram"} readOnly={true} />
      <TextInput source="name" />
      <TextInput source="template.body" />
    </SimpleForm>
  </Create>
);
