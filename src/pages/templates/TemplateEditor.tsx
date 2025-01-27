import { Controller, useFormContext } from "react-hook-form";
import { Box, Tab, TextField } from "@mui/material";
import { Editor } from "@monaco-editor/react";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../contexts/color-mode";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Stack from "@mui/material/Stack";
import CodeIcon from "@mui/icons-material/Code";
import NotesIcon from "@mui/icons-material/Notes";

interface TemplateEditorProps {
  channel: string;
  shouldUnregister: boolean;
}

export const TemplateEditor = ({
  channel,
  shouldUnregister,
}: TemplateEditorProps) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const theme = useContext(ColorModeContext);
  const [activeTab, setActiveTab] = useState("1");

  if (channel == "email") {
    return (
      <Stack>
        <TextField
          {...register("template.parts.from", {
            shouldUnregister: shouldUnregister,
          })}
          error={!!(errors as any)?.template?.parts?.from}
          helperText={(errors as any)?.template?.parts?.from}
          margin="normal"
          fullWidth
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          type="text"
          label="From"
          name="template.parts.from"
        />
        <TextField
          {...register("template.parts.subject", {
            shouldUnregister: shouldUnregister,
          })}
          error={!!(errors as any)?.template?.parts?.subject}
          helperText={(errors as any)?.template?.parts?.subject}
          margin="normal"
          fullWidth
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          type="text"
          label="Subject"
          name="template.parts.subject"
        />
        <TabContext value={activeTab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={(_, value) => {
                setActiveTab(value);
              }}
              aria-label="lab API tabs example"
            >
              <Tab
                label="HTML"
                value="1"
                icon={<CodeIcon />}
                iconPosition={"start"}
              />
              <Tab
                label="Plaintext"
                value="2"
                icon={<NotesIcon />}
                iconPosition={"start"}
              />
            </TabList>
          </Box>
          <TabPanel value="1" keepMounted={true}>
            <Controller
              control={control}
              name="template.parts.body_html"
              defaultValue={null as any}
              shouldUnregister={shouldUnregister}
              render={({ field }) => (
                <Editor
                  {...field}
                  height="30vh"
                  defaultLanguage="html"
                  language="html"
                  theme={theme.mode === "light" ? "light" : "vs-dark"}
                />
              )}
            />
          </TabPanel>
          <TabPanel value="2" keepMounted={true}>
            <Controller
              control={control}
              name="template.parts.body"
              defaultValue={null as any}
              shouldUnregister={shouldUnregister}
              render={({ field }) => (
                <Editor
                  {...field}
                  height="30vh"
                  theme={theme.mode === "light" ? "light" : "vs-dark"}
                />
              )}
            />
          </TabPanel>
        </TabContext>
      </Stack>
    );
  } else {
    return (
      <>
        <Controller
          control={control}
          defaultValue={null as any}
          name="template.parts.body"
          shouldUnregister={shouldUnregister}
          render={({ field }) => (
            <Editor
              {...field}
              height="30vh"
              theme={theme.mode === "light" ? "light" : "vs-dark"}
            />
          )}
        />
      </>
    );
  }
};
