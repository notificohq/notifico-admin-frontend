import React from "react";
import { useDataGrid, List } from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useMany } from "@refinedev/core";
import { Box, Tooltip, Alert } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";

export const CredentialList = () => {
  const { dataGridProps } = useDataGrid();

  const { data: projectData, isLoading: projectIsLoading } = useMany({
    resource: "projects",
    ids: dataGridProps?.rows?.map((item) => item?.project_id) ?? [],
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
        flex: 1,
      },
      {
        field: "type",
        headerName: "Type",
        minWidth: 200,
      },
      {
        field: "source",
        headerName: "Source",
        minWidth: 60,
        renderCell: function render() {
          return (
            <Box display="flex" alignItems="center" height="100%">
              <Tooltip title={"Environment variable"}>
                <TerminalIcon />
              </Tooltip>
            </Box>
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
    ],
    [projectData?.data],
  );

  return (
    <List>
      <Alert severity="info">
        You can add new transport credentials with environment variables with
        the following format:
        <br />
        <code>NOTIFICO_CRED_[CREDENTIAL_NAME]=value</code>
      </Alert>
      <DataGrid
        {...dataGridProps}
        columns={columns}
        disableColumnFilter={true}
        disableColumnSorting={true}
        paginationMode={"client"}
      />
    </List>
  );
};
