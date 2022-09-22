export const getError = (errorMessage: string | undefined, locationMessageError: string) => {
  if (locationMessageError) {
    return locationMessageError;
  }
  return errorMessage;
};
