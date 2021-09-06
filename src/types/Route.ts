export enum Route {
  Home = "home",
  WorkAndSkills = "work-and-skills",
}

const shouldBeLowercase = ["and"];

const getIcon = (route: Route) => {
  switch (route) {
    case Route.Home:
      return "HomeIcon";
    case Route.WorkAndSkills:
      return "WorkIcon";
    default:
      return "HomeIcon";
  }
};

interface IRouteMap {
  key: string;
  value: Route;
}

export const routeLabels: IRouteMap[] = Object.keys(Route).map(
  (route, index) => {
    var routeName = route
      .split(/(?=[A-Z])/)
      .map((route) => {
        const routePart = route.toLowerCase();
        return shouldBeLowercase.indexOf(routePart) >= 0 ? routePart : route;
      })
      .join(" ")
      .trim();
    var routeVal = Object.values(Route)[index] as Route;
    return { key: routeName, value: routeVal, Icon: getIcon(routeVal) };
  }
);
