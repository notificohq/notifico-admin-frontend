import React from "react";
import {
  useDataGrid,
  EditButton,
  ShowButton,
  DeleteButton,
  List,
} from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useMany } from "@refinedev/core";

export const TemplateList = () => {
  const { dataGridProps } = useDataGrid();

  const { data: projectData, isLoading: projectIsLoading } = useMany({
    resource: "projects",
    ids: dataGridProps?.rows?.map((item: any) => item?.project_id) ?? [],
    queryOptions: {
      enabled: !!dataGridProps?.rows,
    },
  });

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "name",
        headerName: "Name",
        minWidth: 200,
      },
      {
        field: "description",
        headerName: "Description",
        minWidth: 200,
        flex: 1,
      },
      {
        field: "channel",
        headerName: "Channel",
        minWidth: 200,
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
    [projectData?.data],
  );

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};
