import { Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  RefineSnackbarProvider,
  ThemedLayoutV2,
  useNotificationProvider,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { AppIcon } from "./components/app-icon";
import { Header } from "./components";
import { ColorModeContextProvider } from "./contexts/color-mode";
import {
  ProjectCreate,
  ProjectEdit,
  ProjectList,
  ProjectShow,
} from "./pages/projects";
import { EventCreate, EventEdit, EventList, EventShow } from "./pages/events";
import {
  PipelineCreate,
  PipelineEdit,
  PipelineList,
  PipelineShow,
} from "./pages/pipelines";
import {
  RecipientCreate,
  RecipientEdit,
  RecipientList,
  RecipientShow,
} from "./pages/recipients";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import RouteIcon from "@mui/icons-material/Route";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { GroupCreate, GroupEdit, GroupList, GroupShow } from "./pages/groups";
import {
  TemplateCreate,
  TemplateEdit,
  TemplateList,
  TemplateShow,
} from "./pages/templates";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider(
                  import.meta.env.VITE_NOTIFICO_UI_API_BASE,
                )}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                resources={[
                  {
                    name: "projects",
                    list: "/projects",
                    create: "/projects/create",
                    edit: "/projects/edit/:id",
                    show: "/projects/show/:id",
                    meta: {
                      canDelete: true,
                      icon: <ArchitectureIcon />,
                    },
                  },
                  {
                    name: "events",
                    list: "/events",
                    create: "/events/create",
                    edit: "/events/edit/:id",
                    show: "/events/show/:id",
                    meta: {
                      canDelete: true,
                      icon: <NotificationsActiveIcon />,
                    },
                  },
                  {
                    name: "pipelines",
                    list: "/pipelines",
                    create: "/pipelines/create",
                    edit: "/pipelines/edit/:id",
                    show: "/pipelines/show/:id",
                    meta: {
                      canDelete: true,
                      icon: <RouteIcon />,
                    },
                  },
                  {
                    name: "recipients",
                    list: "/recipients",
                    create: "/recipients/create",
                    edit: "/recipients/edit/:id",
                    show: "/recipients/show/:id",
                    meta: {
                      canDelete: true,
                      icon: <PersonIcon />,
                    },
                  },
                  {
                    name: "groups",
                    list: "/groups",
                    create: "/groups/create",
                    edit: "/groups/edit/:id",
                    show: "/groups/show/:id",
                    meta: {
                      canDelete: true,
                      icon: <GroupIcon />,
                    },
                  },
                  {
                    name: "templates",
                    list: "/templates",
                    create: "/templates/create",
                    edit: "/templates/edit/:id",
                    show: "templates/show/:id",
                    meta: {
                      canDelete: true,
                      icon: <TextSnippetIcon />,
                    },
                  },
                  {
                    name: "channels",
                    meta: {
                      hide: true,
                    },
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "zkVVTP-xIcIDA-4qej35",
                  title: { text: "Notifico", icon: <AppIcon /> },
                  disableTelemetry: true,
                }}
              >
                <Routes>
                  <Route
                    element={
                      <ThemedLayoutV2 Header={() => <Header sticky />}>
                        <Outlet />
                      </ThemedLayoutV2>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource="projects" />}
                    />
                    <Route path="/projects">
                      <Route index element={<ProjectList />} />
                      <Route path="create" element={<ProjectCreate />} />
                      <Route path="show/:id" element={<ProjectShow />} />
                      <Route path="edit/:id" element={<ProjectEdit />} />
                    </Route>
                    <Route path="/events">
                      <Route index element={<EventList />} />
                      <Route path="create" element={<EventCreate />} />
                      <Route path="show/:id" element={<EventShow />} />
                      <Route path="edit/:id" element={<EventEdit />} />
                    </Route>
                    <Route path="/pipelines">
                      <Route index element={<PipelineList />} />
                      <Route path="create" element={<PipelineCreate />} />
                      <Route path="show/:id" element={<PipelineShow />} />
                      <Route path="edit/:id" element={<PipelineEdit />} />
                    </Route>
                    <Route path="/recipients">
                      <Route index element={<RecipientList />} />
                      <Route path="create" element={<RecipientCreate />} />
                      <Route path="show/:id" element={<RecipientShow />} />
                      <Route path="edit/:id" element={<RecipientEdit />} />
                    </Route>
                    <Route path="/groups">
                      <Route index element={<GroupList />} />
                      <Route path="create" element={<GroupCreate />} />
                      <Route path="show/:id" element={<GroupShow />} />
                      <Route path="edit/:id" element={<GroupEdit />} />
                    </Route>
                    <Route path="/templates">
                      <Route index element={<TemplateList />} />
                      <Route path="create" element={<TemplateCreate />} />
                      <Route path="show/:id" element={<TemplateShow />} />
                      <Route path="edit/:id" element={<TemplateEdit />} />
                    </Route>
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
