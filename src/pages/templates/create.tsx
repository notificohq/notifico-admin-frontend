import { Create, useAutocomplete } from "@refinedev/mui";
import { Box, Autocomplete, TextField } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
import { Controller, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { TemplateEditor } from "./TemplateEditor";

export const TemplateCreate = () => {
  const methods = useForm();
  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    control,
    formState: { errors },
    getValues,
  } = methods;

  const { autocompleteProps: projectAutocompleteProps } = useAutocomplete({
    resource: "projects",
  });

  const { autocompleteProps: channelAutocompleteProps } = useAutocomplete({
    resource: "channels",
  });

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <FormProvider {...methods}>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column" }}
          autoComplete="off"
        >
          <Controller
            control={control}
            name="project_id"
            rules={{ required: "This field is required" }}
            // eslint-disable-next-line
            defaultValue={null as any}
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
                      (p) =>
                        p?.id?.toString() === (item?.id ?? item)?.toString(),
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
            {...register("name", {
              required: "This field is required",
            })}
            error={!!(errors as any)?.name}
            helperText={(errors as any)?.name?.message}
            margin="normal"
            fullWidth
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            type="text"
            label="Name"
            name="name"
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
            name="channel"
            rules={{ required: "This field is required" }}
            // eslint-disable-next-line
            defaultValue={null as any}
            render={({ field }) => (
              <Autocomplete
                {...channelAutocompleteProps}
                {...field}
                onChange={(_, value) => {
                  field.onChange(value);
                }}
                getOptionLabel={(item) => {
                  return item;
                }}
                isOptionEqualToValue={(option, value) =>
                  value === undefined ||
                  option?.toString() === value?.toString()
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Channel"
                    margin="normal"
                    variant="outlined"
                    error={!!(errors as any)?.channel}
                    helperText={(errors as any)?.channel?.message}
                    required
                  />
                )}
              />
            )}
          />
          <TemplateEditor
            channel={getValues("channel")}
            shouldUnregister={true}
          />
        </Box>
      </FormProvider>
      <DevTool control={control} />
    </Create>
  );
};
