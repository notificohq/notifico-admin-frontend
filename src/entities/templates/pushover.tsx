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

export const TemplatesPushoverList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <TextField source="template.title" />
      <TextField source="template.text" />
      <ReferenceField source="project_id" reference="projects" />
    </Datagrid>
  </List>
);

export const TemplatesPushoverShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField source="project_id" reference="projects" />
      <TextField source="channel" />
      <TextField source="name" />
      <TextField source="template.title" />
      <TextField source="template.text" />
    </SimpleShowLayout>
  </Show>
);

export const TemplatesPushoverEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" readOnly={true} />
      <ReferenceInput source="project_id" reference="projects" />
      <TextInput source="channel" defaultValue={"pushover"} readOnly={true} />
      <TextInput source="name" />
      <TextInput source="template.title" />
      <TextInput source="template.text" multiline={true} />
    </SimpleForm>
  </Edit>
);

export const TemplatesPushoverCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="project_id" reference="projects" />
      <TextInput source="channel" defaultValue={"pushover"} readOnly={true} />
      <TextInput source="name" />
      <TextInput source="template.title" />
      <TextInput source="template.text" multiline={true} />
    </SimpleForm>
  </Create>
);
