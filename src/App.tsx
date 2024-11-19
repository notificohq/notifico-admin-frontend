import {
  Admin,
  Resource,
  // ListGuesser,
  // EditGuesser,
  // ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import { SubscriptionEdit, SubscriptionList, SubscriptionShow } from "./entities/subscription.tsx";
import { ProjectCreate, ProjectEdit, ProjectList, ProjectShow } from "./entities/projects.tsx";
import { EventCreate, EventEdit, EventList, EventShow } from "./entities/events.tsx";
import { PipelineCreate, PipelineEdit, PipelineList, PipelineShow } from "./entities/pipelines.tsx";
import { TemplatesEmailCreate, TemplatesEmailEdit, TemplatesEmailList, TemplatesEmailShow } from "./entities/templates.tsx";
import { TemplatesTelegramCreate, TemplatesTelegramEdit, TemplatesTelegramList, TemplatesTelegramShow } from "./entities/templates/telegram.tsx";
import { TemplatesSlackCreate, TemplatesSlackEdit, TemplatesSlackList, TemplatesSlackShow } from "./entities/templates/slack.tsx";

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
      name="subscriptions"
      list={SubscriptionList}
      edit={SubscriptionEdit}
      show={SubscriptionShow}
    />
    <Resource
      name="templates/email"
      list={TemplatesEmailList}
      edit={TemplatesEmailEdit}
      show={TemplatesEmailShow}
      create={TemplatesEmailCreate}
    />
    <Resource
      name="templates/telegram"
      list={TemplatesTelegramList}
      edit={TemplatesTelegramEdit}
      show={TemplatesTelegramShow}
      create={TemplatesTelegramCreate}
    />
    <Resource
      name="templates/slack"
      list={TemplatesSlackList}
      edit={TemplatesSlackEdit}
      show={TemplatesSlackShow}
      create={TemplatesSlackCreate}
    />
  </Admin>
);
