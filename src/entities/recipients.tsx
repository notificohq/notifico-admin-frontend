import {
  BooleanField,
  Datagrid,
  ReferenceField,
  ReferenceManyField,
  Show,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
  Edit, ReferenceInput, SimpleForm, TextInput, List, Create
} from "react-admin";

export const RecipientList = () => (
  <List>
    <Datagrid>
      <ReferenceManyField target="recipient_id" reference="contacts" label="Recipient">
        <SingleFieldList linkType={false}>
          <TextField source="contact" />
        </SingleFieldList>
      </ReferenceManyField>
      <TextField source="extras" />
      <ReferenceField source="project_id" reference="projects" />
    </Datagrid>
  </List>
);

export const RecipientShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="extras" />
      <ReferenceField source="project_id" reference="projects" />
      <ReferenceManyField target="recipient_id" reference="contacts">
        <Datagrid>
          <TextField source="contact" />
        </Datagrid>
      </ReferenceManyField>
      <ReferenceManyField target="recipient_id" reference="subscriptions">
        <Datagrid>
          <TextField source="event" />
          <TextField source="channel" />
          <BooleanField source="is_subscribed" />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);

export const RecipientEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="extras" />
      <TextInput source="id" readOnly={true}/>
      <ReferenceInput source="project_id" reference="projects" />
    </SimpleForm>
  </Edit>
);

export const RecipientCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="extras" />
      <ReferenceInput source="project_id" reference="projects" />
    </SimpleForm>
  </Create>
);
