
// taken from https://stackoverflow.com/a/60818105/2900170
export const areEqual = (first, second) =>
  first.length === second.length && first.every((value, index) => value === second[index]);
