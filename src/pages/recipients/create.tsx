import { Create, useAutocomplete } from "@refinedev/mui";
import {
  Box,
  Autocomplete,
  TextField,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
import { Controller, useFieldArray } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export const RecipientCreate = () => {
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

  const { autocompleteProps: groupAutocompleteProps } = useAutocomplete({
    resource: "groups",
  });

  const {
    fields: contactFields,
    append: contactAppend,
    remove: contactRemove,
  } = useFieldArray({
    control,
    name: "contacts",
  });

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
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
          {...register("extras", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.extras}
          helperText={(errors as any)?.extras?.message}
          margin="normal"
          fullWidth
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          type="text"
          label="Extras"
          name="extras"
        />
        <Controller
          control={control}
          name="group_ids"
          rules={{ required: "This field is required" }}
          // eslint-disable-next-line
          defaultValue={[] as any}
          render={({ field }) => (
            <Autocomplete
              {...groupAutocompleteProps}
              {...field}
              multiple
              onChange={(_, value) => {
                field.onChange(value?.map((item: any) => item?.id ?? item));
              }}
              getOptionLabel={(item) => {
                return (
                  groupAutocompleteProps?.options?.find(
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
                  label="Group"
                  margin="normal"
                  variant="outlined"
                  error={!!(errors as any)?.group_ids}
                  helperText={(errors as any)?.group_ids?.message}
                  required
                />
              )}
            />
          )}
        />
        <Typography variant="body1" fontWeight="bold">
          Contacts
        </Typography>
        <Stack>
          {contactFields.map((item: any, index: number) => (
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <TextField
                key={index}
                {...register(`contacts.${index}`, {
                  required: "This field is required",
                })}
                error={!!(errors as any)?.contacts?.[index]}
                helperText={
                  (errors as any)?.contacts?.[index]?.message as string
                }
                margin="normal"
                fullWidth
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                type="text"
                label="Contact"
                name={`contacts.${index}`}
              />
              <IconButton
                onClick={() => {
                  contactRemove(index);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </Stack>
        <Button
          variant="outlined"
          fullWidth
          onClick={() => {
            contactAppend("");
          }}
        >
          Add contact
        </Button>
      </Box>
    </Create>
  );
};
