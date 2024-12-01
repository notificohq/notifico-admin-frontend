import {
  Datagrid,
  List,
  ReferenceArrayField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  ReferenceArrayInput, Create
} from "react-admin";
import { JsonField } from "@bavix/react-admin-json-view";

export const PipelineList = () => (
  <List>
    <Datagrid>
      <TextField source="channel" />
      <ReferenceArrayField source="event_ids" reference="events" />
      <ReferenceField source="project_id" reference="projects" />
    </Datagrid>
  </List>
);

export const PipelineShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="project_id" reference="projects" />
      <ReferenceArrayField source="event_ids" reference="events" />
      <JsonField source="steps" jsonString={true} reactJsonOptions={{displayArrayKey: false, displayDataTypes: false}} />
      <TextField source="channel" />
    </SimpleShowLayout>
  </Show>
);

export const PipelineEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput source="project_id" reference="projects" />
      <ReferenceArrayInput source="event_ids" reference="events"/>
      <TextInput source="steps" multiline={true} />
      <TextInput source="channel" />
    </SimpleForm>
  </Edit>
);


export const PipelineCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="project_id" reference="projects" />
      <ReferenceArrayInput source="event_ids" reference="events"/>
      <TextInput source="steps" defaultValue={[]} multiline={true} />
      <TextInput source="channel" />
    </SimpleForm>
  </Create>
);
