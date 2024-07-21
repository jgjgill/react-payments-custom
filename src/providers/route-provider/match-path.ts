type MatchPathProps = {
  path: string;
  currentPath: string;
};

export function matchPath({ path, currentPath }: MatchPathProps) {
  const pathParts = path.split("/");
  const currentPathParts = currentPath.split("/");
  const params: Record<string, string> = {};

  if (pathParts.length !== currentPathParts.length) {
    return null;
  }

  for (let i = 0; i < pathParts.length; i++) {
    if (pathParts[i].startsWith(":")) {
      params[pathParts[i].slice(1)] = currentPathParts[i];
    } else if (pathParts[i] !== currentPathParts[i]) {
      return null;
    }
  }

  return params;
}
