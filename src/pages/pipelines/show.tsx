import {useShow, useOne, useMany} from "@refinedev/core";
import {
	Show,
	TextFieldComponent as TextField,
	TagField,
	BooleanField,
} from "@refinedev/mui";
import {Typography, Stack} from "@mui/material";

export const PipelineShow = () => {
	const {query} = useShow();
	const {data, isLoading} = query;

	const record = data?.data;

	const {data: projectData, isLoading: projectIsLoading} = useOne({
		resource: "projects",
		id: record?.project_id || "",
		queryOptions: {
			enabled: !!record,
		},
	});

	const {data: eventData, isLoading: eventIsLoading} = useMany({
		resource: "events",
		ids: record?.event_ids || [],
		queryOptions: {
			enabled: !!record && !!record?.event_ids?.length,
		},
	});

	return (
		<Show isLoading={isLoading}>
			<Stack gap={1}>
				<Typography variant="body1" fontWeight="bold">
					Id
				</Typography>
				<TextField value={record?.id}/>
				<Typography variant="body1" fontWeight="bold">
					Project
				</Typography>

				{projectIsLoading ? (
					<>Loading...</>
				) : (
					<>{projectData?.data?.name}</>
				)}

				<Typography variant="body1" fontWeight="bold">
					Steps
				</Typography>
				<pre>
					{record?.steps}
				</pre>
				
				<Typography variant="body1" fontWeight="bold">
					Event
				</Typography>
				{eventIsLoading && record?.event_ids?.length ? (
					<>Loading...</>
				) : (
					<>
						{record?.event_ids?.length ? (
							<Stack direction="row" spacing={1}>
								{eventData?.data?.map((event: any) => (
									<TagField
										key={event?.name}
										value={event?.name}
									/>
								))}
							</Stack>
						) : (
							<></>
						)}
					</>
				)}
				<Typography variant="body1" fontWeight="bold">
					Enabled
				</Typography>
				<BooleanField value={record?.enabled}/>
			</Stack>
		</Show>
	);
};
