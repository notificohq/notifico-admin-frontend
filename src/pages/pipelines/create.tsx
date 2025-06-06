import { Create, useAutocomplete } from "@refinedev/mui";
import {
  Box,
  Autocomplete,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Editor } from "@monaco-editor/react";
import { DevTool } from "@hookform/devtools";
import { useContext } from "react";
import { ColorModeContext } from "../../contexts/color-mode";
import { NIL as NIL_UUID } from "uuid";

export const PipelineCreate = () => {
  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    control,
    formState: { errors },
  } = useForm();

  const { autocompleteProps: projectAutocompleteProps } = useAutocomplete({
    resource: "projects",
  });

  const { autocompleteProps: eventAutocompleteProps } = useAutocomplete({
    resource: "events",
  });

  const theme = useContext(ColorModeContext);

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <Controller
          control={control}
          name="enabled"
          defaultValue={true}
          render={({ field }) => (
            <FormControlLabel
              label="Enabled"
              control={
                <Checkbox
                  {...field}
                  checked={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.checked);
                  }}
                />
              }
            />
          )}
        />
        <Controller
          control={control}
          name="project_id"
          rules={{ required: "This field is required" }}
          // eslint-disable-next-line
          defaultValue={NIL_UUID}
          render={({ field }) => (
            <Autocomplete
              {...projectAutocompleteProps}
              {...field}
              onChange={(_, value) => {
                field.onChange(value?.id ?? value);
              }}
              getOptionLabel={(item) => {
                return (
                  projectAutocompleteProps?.options?.find(
                    (p) => p?.id?.toString() === (item?.id ?? item)?.toString(),
                  )?.description ?? ""
                );
              }}
              isOptionEqualToValue={(option, value) =>
                value === undefined ||
                option?.id?.toString() === (value?.id ?? value)?.toString()
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Project"
                  margin="normal"
                  variant="outlined"
                  error={!!(errors as any)?.project_id}
                  helperText={(errors as any)?.project_id?.message}
                  required
                />
              )}
            />
          )}
        />
        <TextField
          {...register("description")}
          error={!!(errors as any)?.description}
          helperText={(errors as any)?.description?.message}
          margin="normal"
          fullWidth
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          type="text"
          label="Description"
          name="description"
        />
        <Controller
          control={control}
          name="event_ids"
          rules={{ required: "This field is required" }}
          // eslint-disable-next-line
          defaultValue={[] as any}
          render={({ field }) => (
            <Autocomplete
              {...eventAutocompleteProps}
              {...field}
              multiple
              onChange={(_, value) => {
                field.onChange(value?.map((item: any) => item?.id ?? item));
              }}
              getOptionLabel={(item) => {
                return (
                  eventAutocompleteProps?.options?.find(
                    (p) => p?.id?.toString() === (item?.id ?? item)?.toString(),
                  )?.name ?? ""
                );
              }}
              isOptionEqualToValue={(option, value) =>
                value === undefined ||
                option?.id?.toString() === (value?.id ?? value)?.toString()
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Event"
                  margin="normal"
                  variant="outlined"
                  error={!!(errors as any)?.event_ids}
                  helperText={(errors as any)?.event_ids?.message}
                />
              )}
            />
          )}
        />
        <Stack gap={1}>
          <Typography variant="body1" fontWeight="bold">
            Steps
          </Typography>
          <Controller
            control={control}
            rules={{ required: "This field is required" }}
            // eslint-disable-next-line
            defaultValue={null as any}
            name="steps"
            render={({ field }) => (
              <Editor
                {...field}
                height="30vh"
                defaultLanguage="json"
                theme={theme.mode === "light" ? "light" : "vs-dark"}
              />
            )}
          />
        </Stack>
      </Box>
      <DevTool control={control} />
    </Create>
  );
};
