import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import GroupIcon from '@mui/icons-material/Group';
import {
  SubscriptionEdit,
  SubscriptionList,
  SubscriptionShow,
} from "./entities/subscription.tsx";
import {
  ProjectCreate,
  ProjectEdit,
  ProjectList,
  ProjectShow,
} from "./entities/projects.tsx";
import {
  EventCreate,
  EventEdit,
  EventList,
  EventShow,
} from "./entities/events.tsx";
import {
  PipelineCreate,
  PipelineEdit,
  PipelineList,
  PipelineShow,
} from "./entities/pipelines.tsx";
import { RecipientCreate, RecipientEdit, RecipientList, RecipientShow } from "./entities/recipients.tsx";
import { TemplatesCreate, TemplatesEdit, TemplatesList, TemplatesShow } from "./entities/templates/generic.tsx";
import { ContactCreate, ContactEdit, ContactList, ContactShow } from "./entities/contact.tsx";

export const App = () => (
  <Admin disableTelemetry layout={Layout} dataProvider={dataProvider}>
    <Resource
      name="projects"
      list={ProjectList}
      show={ProjectShow}
      edit={ProjectEdit}
      create={ProjectCreate}
      icon={ArchitectureIcon}
    />
    <Resource
      name="events"
      list={EventList}
      show={EventShow}
      edit={EventEdit}
      create={EventCreate}
      icon={NotificationsActiveIcon}
    />
    <Resource
      name="pipelines"
      list={PipelineList}
      show={PipelineShow}
      edit={PipelineEdit}
      create={PipelineCreate}
    />
    <Resource
      name="recipients"
      list={RecipientList}
      show={RecipientShow}
      edit={RecipientEdit}
      create={RecipientCreate}
      icon={PersonIcon}
    />
    <Resource
      name="contacts"
      list={ContactList}
      show={ContactShow}
      edit={ContactEdit}
      create={ContactCreate}
      icon={ContactsIcon}
    />
    <Resource
      name="groups"
      list={ListGuesser}
      show={ShowGuesser}
      edit={EditGuesser}
      icon={GroupIcon}
    />
    <Resource
      name="subscriptions"
      list={SubscriptionList}
      show={SubscriptionShow}
      edit={SubscriptionEdit}
    />
    <Resource
      name="templates"
      list={TemplatesList}
      edit={TemplatesEdit}
      show={TemplatesShow}
      create={TemplatesCreate}
      icon={TextSnippetIcon}
    />
  </Admin>
);
