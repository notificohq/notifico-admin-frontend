import {
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  RichTextField,
  List,
  Datagrid, Create
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

export const TemplatesEmailList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <TextField source="template.from" />
      <TextField source="template.subject" />
      <ReferenceField source="project_id" reference="projects" />
    </Datagrid>
  </List>
);

export const TemplatesEmailShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField source="project_id" reference="projects" />
      <TextField source="channel" />
      <TextField source="name" />
      <TextField source="template.from" />
      <TextField source="template.subject" />
      <TextField source="template.body_plaintext" />
      <RichTextField source="template.body_html" />
    </SimpleShowLayout>
  </Show>
);

export const TemplatesEmailEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" readOnly={true} />
      <ReferenceInput source="project_id" reference="projects" />
      <TextInput source="channel" defaultValue={"email"} readOnly={true} />
      <TextInput source="name" />
      <TextInput source="template.from" />
      <TextInput source="template.subject" />
      <TextInput source="template.body_plaintext" />
      <TextField source="template.body_html" />
    </SimpleForm>
  </Edit>
);

export const TemplatesEmailCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="project_id" reference="projects" />
      <TextInput source="channel" defaultValue={"email"} readOnly={true} />
      <TextInput source="name" />
      <TextInput source="template.from" />
      <TextInput source="template.subject" />
      <TextInput source="template.body_plaintext" />
      <TextField source="template.body_html" />
    </SimpleForm>
  </Create>
);
