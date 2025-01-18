import {Edit, useAutocomplete} from "@refinedev/mui";
import {Box, TextField, Autocomplete} from "@mui/material";
import {useForm} from "@refinedev/react-hook-form";
import {Controller} from "react-hook-form";

export const GroupEdit = () => {
	const {
		saveButtonProps,
		refineCore: {query},
		register,
		control,
		formState: {errors},
	} = useForm();

	const groupsData = query?.data?.data;

	const {autocompleteProps: projectAutocompleteProps} = useAutocomplete({
		resource: "projects",
		defaultValue: groupsData?.project_id,
	});

	return (
		<Edit saveButtonProps={saveButtonProps}>
			<Box
				component="form"
				sx={{display: "flex", flexDirection: "column"}}
				autoComplete="off"
			>
				<TextField
					{...register("id", {
						required: "This field is required",
					})}
					error={!!(errors as any)?.id}
					helperText={(errors as any)?.id?.message}
					margin="normal"
					fullWidth
					slotProps={{
						inputLabel: {
							shrink: true,
						},
					}}
					type="text"
					label="Id"
					name="id"
					disabled
				/>
				<Controller
					control={control}
					name="project_id"
					rules={{required: "This field is required"}}
					// eslint-disable-next-line
					defaultValue={null as any}
					render={({field}) => (
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
											p?.id?.toString() ===
											(item?.id ?? item)?.toString(),
									)?.name ?? ""
								);
							}}
							isOptionEqualToValue={(option, value) =>
								value === undefined ||
								option?.id?.toString() ===
								(value?.id ?? value)?.toString()
							}
							renderInput={(params) => (
								<TextField
									{...params}
									label="Project"
									margin="normal"
									variant="outlined"
									error={!!(errors as any)?.project_id}
									helperText={
										(errors as any)?.project_id?.message
									}
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
			</Box>
		</Edit>
	);
};
