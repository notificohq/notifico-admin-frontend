import { Create, Datagrid, Edit, List, ReferenceField, ReferenceInput, Show, SimpleForm, SimpleShowLayout, TextField, TextInput } from "react-admin";

export const ContactShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="recipient_id" reference="recipients" />
      <TextField source="contact" />
    </SimpleShowLayout>
  </Show>
);

export const ContactList = () => (
  <List>
    <Datagrid>
      <TextField source="contact" />
      <ReferenceField source="recipient_id" reference="recipients" />
    </Datagrid>
  </List>
);

export const ContactEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" readOnly={true}/>
      <ReferenceInput source="recipient_id" reference="recipients" />
      <TextInput source="contact" />
    </SimpleForm>
  </Edit>
);

export const ContactCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="recipient_id" reference="recipients" />
      <TextInput source="contact" />
    </SimpleForm>
  </Create>
);