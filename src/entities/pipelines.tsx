import {
  ArrayField,
  ChipField,
  Datagrid,
  List,
  ReferenceArrayField,
  ReferenceField,
  SingleFieldList,
  Show,
  SimpleShowLayout,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  ReferenceArrayInput, Create
} from "react-admin";
import { JsonField, JsonInput } from "@bavix/react-admin-json-view";

export const PipelineList = () => (
  <List>
    <Datagrid>
      <TextField source="channel" />
      <ReferenceArrayField source="event_ids" reference="events" />
      <ArrayField source="steps"><SingleFieldList><ChipField source="step" /></SingleFieldList></ArrayField>
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
      <JsonField source="steps" />
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
      <JsonInput source="steps" />
      <TextInput source="channel" />
    </SimpleForm>
  </Edit>
);


export const PipelineCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="project_id" reference="projects" />
      <ReferenceArrayInput source="event_ids" reference="events"/>
      <JsonInput source="steps" defaultValue={[]}/>
      <TextInput source="channel" />
    </SimpleForm>
  </Create>
);
