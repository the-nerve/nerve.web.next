export const bindFieldsToFieldset = (fieldsetName: string, fields: any) =>
  fields.map((field: any) => {
    // eslint-disable-next-line no-param-reassign
    field.fieldset = fieldsetName;
    return field;
  });

export const bindFieldsToGroup = (groupName: string, fields: any) =>
  fields.map((field: any) => {
    // eslint-disable-next-line no-param-reassign
    field.group = groupName;
    return field;
  });
