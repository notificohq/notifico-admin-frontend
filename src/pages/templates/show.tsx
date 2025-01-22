import { useShow, useOne } from "@refinedev/core";
import { Show, TextFieldComponent as TextField } from "@refinedev/mui";
import {
  Typography,
  Stack,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Box,
} from "@mui/material";

export const TemplateShow = () => {
  const { query } = useShow();
  const { data, isLoading } = query;

  const record = data?.data;

  const { data: projectData, isLoading: projectIsLoading } = useOne({
    resource: "projects",
    id: record?.project_id || "",
    queryOptions: {
      enabled: !!record,
    },
  });

  const template = JSON.parse(record?.template ?? "{}");
  const parts = template.parts ?? {};

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          Id
        </Typography>
        <TextField value={record?.id} />
        <Typography variant="body1" fontWeight="bold">
          Project
        </Typography>

        {projectIsLoading ? <>Loading...</> : <>{projectData?.data?.name}</>}
        <Typography variant="body1" fontWeight="bold">
          Channel
        </Typography>
        <TextField value={record?.channel} />
        <Typography variant="body1" fontWeight="bold">
          Name
        </Typography>
        <TextField value={record?.name} />
        <Typography variant="body1" fontWeight="bold">
          Template Parts
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell width={120}>Part name</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(parts).map(([key, value]) => (
                <TableRow sx={{ fontFamily: "monospace" }}>
                  <TableCell>{key}</TableCell>
                  <TableCell>
                    <pre>{value?.toString()}</pre>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Show>
  );
};
