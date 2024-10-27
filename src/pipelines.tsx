import { ArrayField, ChipField, Datagrid, Edit, List, ReferenceField, SimpleForm, SingleFieldList, TextField, TextInput } from "react-admin";
import { Show, SimpleShowLayout } from 'react-admin';
import { JsonField, JsonInput } from "react-admin-json-view";

export const PipelineList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="project_id" reference="projects" />
      <TextField source="channel" />
      <ArrayField source="steps"><SingleFieldList><ChipField source="step" /></SingleFieldList></ArrayField>
    </Datagrid>
  </List>
);



export const PipelineShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="project_id" />
      <TextField source="channel" />
      <JsonField source="steps" />
    </SimpleShowLayout>
  </Show>
);

export const PipelineEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" readOnly={true} />
      <TextInput source="project_id" />
      <TextInput source="channel" />
      <JsonInput source="steps" />
    </SimpleForm>
  </Edit>
);
