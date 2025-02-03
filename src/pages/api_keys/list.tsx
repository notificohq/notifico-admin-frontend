import React from "react";
import {
  useDataGrid,
  EditButton,
  ShowButton,
  DeleteButton,
  List,
  DateField,
} from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useMany } from "@refinedev/core";
import { Box } from "@mui/material";

export const ApiKeyList = () => {
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
        field: "description",
        flex: 1,
        headerName: "Description",
        minWidth: 200,
      },
      {
        field: "key",
        headerName: "Key",
        minWidth: 300,
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
        field: "created_at",
        headerName: "Created",
        minWidth: 250,
        renderCell: function render({ value }) {
          return (
            <Box display="flex" alignItems="center" height="100%">
              <DateField value={value} format="L LT" />
            </Box>
          );
        },
      },
      {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        filterable: false,
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
