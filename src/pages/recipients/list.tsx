import React from "react";
import {
	useDataGrid,
	EditButton,
	ShowButton,
	DeleteButton,
	List,
	TagField,
} from "@refinedev/mui";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {useMany} from "@refinedev/core";

export const RecipientList = () => {
	const {dataGridProps} = useDataGrid();

	const {data: projectData, isLoading: projectIsLoading} = useMany({
		resource: "projects",
		ids: dataGridProps?.rows?.map((item: any) => item?.project_id) ?? [],
		queryOptions: {
			enabled: !!dataGridProps?.rows,
		},
	});

	const {data: groupData, isLoading: groupIsLoading} = useMany({
		resource: "groups",
		ids: [].concat(
			...(dataGridProps?.rows?.map((item: any) => item?.group_ids) ?? []),
		),
		queryOptions: {
			enabled: !!dataGridProps?.rows,
		},
	});

	const columns = React.useMemo<GridColDef[]>(
		() => [
			{
				field: "id",
				headerName: "Id",
				minWidth: 50,
			},
			{
				field: "extras",
				flex: 1,
				headerName: "Extras",
				minWidth: 200,
			},
			{
				field: "group_ids",
				flex: 1,
				headerName: "Group",
				minWidth: 100,
				renderCell: function render({value}) {
					return groupIsLoading ? (
						<>Loading...</>
					) : (
						<>
							{value?.map((item: any, index: number) => (
								<TagField
									key={index}
									value={
										groupData?.data?.find(
											(resourceItems) =>
												resourceItems.id === item,
										)?.name
									}
								/>
							))}
						</>
					);
				},
			},
			{
				field: "contacts",
				flex: 1,
				headerName: "Contacts",
				minWidth: 200,
				renderCell: function render({row}) {
					return (
						<>
							{row?.contacts?.map((item: any) => (
								<TagField value={item} key={item}/>
							))}
						</>
					);
				},
			},
			{
				field: "project_id",
				flex: 1,
				headerName: "Project",
				minWidth: 100,
				renderCell: function render({value}) {
					return projectIsLoading ? (
						<>Loading...</>
					) : (
						projectData?.data?.find((item) => item.id === value)
							?.name
					);
				},
			},
			{
				field: "actions",
				headerName: "Actions",
				sortable: false,
				renderCell: function render({row}) {
					return (
						<>
							<EditButton hideText recordItemId={row.id}/>
							<ShowButton hideText recordItemId={row.id}/>
							<DeleteButton hideText recordItemId={row.id}/>
						</>
					);
				},
				align: "center",
				headerAlign: "center",
				minWidth: 80,
			},
		],
		[projectData?.data, groupData?.data],
	);

	return (
		<List>
			<DataGrid {...dataGridProps} columns={columns} autoHeight/>
		</List>
	);
};
