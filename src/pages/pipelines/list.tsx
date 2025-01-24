import React from "react";
import {
  useDataGrid,
  EditButton,
  ShowButton,
  DeleteButton,
  List,
  TagField,
} from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useMany } from "@refinedev/core";
import { Checkbox } from "@mui/material";

export const PipelineList = () => {
  const { dataGridProps } = useDataGrid();

  const { data: projectData, isLoading: projectIsLoading } = useMany({
    resource: "projects",
    ids: dataGridProps?.rows?.map((item: any) => item?.project_id) ?? [],
    queryOptions: {
      enabled: !!dataGridProps?.rows,
    },
  });

  const { data: eventData, isLoading: eventIsLoading } = useMany({
    resource: "events",
    ids: [].concat(
      ...(dataGridProps?.rows?.map((item: any) => item?.event_ids) ?? []),
    ),
    queryOptions: {
      enabled: !!dataGridProps?.rows,
    },
  });

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "enabled",
        headerName: "Enabled",
        minWidth: 50,
        renderCell: function render({ value }) {
          return <Checkbox checked={!!value} disabled={true} />;
        },
      },
      {
        field: "id",
        headerName: "Id",
        minWidth: 50,
      },
      {
        field: "description",
        headerName: "Description",
        flex: 1,
      },
      {
        field: "event_ids",
        headerName: "Event",
        minWidth: 100,
        renderCell: function render({ value }) {
          return eventIsLoading ? (
            <>Loading...</>
          ) : (
            <>
              {value?.map((item: any, index: number) => (
                <TagField
                  key={index}
                  value={
                    eventData?.data?.find(
                      (resourceItems) => resourceItems.id === item,
                    )?.name
                  }
                />
              ))}
            </>
          );
        },
      },
      {
        field: "project_id",
        headerName: "Project",
        minWidth: 150,
        renderCell: function render({ value }) {
          return projectIsLoading ? (
            <>Loading...</>
          ) : (
            projectData?.data?.find((item) => item.id === value)?.description
          );
        },
      },
      {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <EditButton hideText recordItemId={row.id} />
              <ShowButton hideText recordItemId={row.id} />
              <DeleteButton hideText recordItemId={row.id} />
            </>
          );
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
    ],
    [projectData?.data, eventData?.data],
  );

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};
