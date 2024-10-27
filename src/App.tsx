import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { CredentialCreate, CredentialEdit, CredentialList, CredentialShow } from "./credentials.tsx";
import Key from "@mui/icons-material/Key";
import PolylineIcon from '@mui/icons-material/Polyline';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { PipelineEdit, PipelineList, PipelineShow } from "./pipelines.tsx";

export const App = () => (
  <Admin disableTelemetry layout={Layout} dataProvider={dataProvider}>
    <Resource
      name="events"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={NotificationsActiveIcon}
    />
    <Resource
      name="pipelines"
      list={PipelineList}
      edit={PipelineEdit}
      show={PipelineShow}
      icon={PolylineIcon}
    />
    <Resource
      name="credentials"
      list={CredentialList}
      edit={CredentialEdit}
      show={CredentialShow}
      create={CredentialCreate}
      icon={Key}
    />
  </Admin>
);
