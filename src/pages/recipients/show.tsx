import { useShow, useMany, useOne } from "@refinedev/core";
import {
  Show,
  TextFieldComponent as TextField,
  TagField,
} from "@refinedev/mui";
import { Typography, Stack } from "@mui/material";

export const RecipientShow = () => {
  const { query } = useShow();
  const { data, isLoading } = query;

  const record = data?.data;

  const { data: groupData, isLoading: groupIsLoading } = useMany({
    resource: "groups",
    ids: record?.group_ids || [],
    queryOptions: {
      enabled: !!record && !!record?.group_ids?.length,
    },
  });

  const { data: projectData, isLoading: projectIsLoading } = useOne({
    resource: "projects",
    id: record?.project_id || "",
    queryOptions: {
      enabled: !!record,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          Contacts
        </Typography>
        <Stack direction="row" spacing={1}>
          {record?.contacts?.map((item: any) => (
            <TagField value={item} key={item} />
          ))}
        </Stack>
        <Typography variant="body1" fontWeight="bold">
          Extras
        </Typography>
        <TextField value={record?.extras} />
        <Typography variant="body1" fontWeight="bold">
          Group
        </Typography>
        {groupIsLoading && record?.group_ids?.length ? (
          <>Loading...</>
        ) : (
          <>
            {record?.group_ids?.length ? (
              <Stack direction="row" spacing={1}>
                {groupData?.data?.map((group: any) => (
                  <TagField key={group?.name} value={group?.name} />
                ))}
              </Stack>
            ) : (
              <></>
            )}
          </>
        )}
        <Typography variant="body1" fontWeight="bold">
          Id
        </Typography>
        <TextField value={record?.id} />
        <Typography variant="body1" fontWeight="bold">
          Project
        </Typography>

        {projectIsLoading ? (
          <>Loading...</>
        ) : (
          <>{projectData?.data?.description}</>
        )}
      </Stack>
    </Show>
  );
};
