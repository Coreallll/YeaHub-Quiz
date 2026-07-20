export function replaceQueryParams(searchParams, key, value) {
  const params = Object.fromEntries(searchParams);

  if (value) {
    params[key] = value;
  } else {
    delete params[key];
  }

  return params;
}