import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";

export enum Route {
  Home = "home",
  SampleWorkAndSkills = "work-and-skills",
}

const shouldBeLowercase = ["and"];

const getIcon = (route: Route) => {
  switch (route) {
    case Route.Home:
      return HomeIcon;
    case Route.SampleWorkAndSkills:
      return WorkIcon;
    default:
      return HomeIcon;
  }
};

interface IRouteMap {
  key: string;
  value: Route;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export const routeLabels: IRouteMap[] = Object.keys(Route).map(
  (route, index) => {
    var routeName = route
      .split(/(?=[A-Z])/)
      .map((route) =>
        shouldBeLowercase.indexOf(route.toLowerCase()) >= 0
          ? route.toLowerCase()
          : route
      )
      .join(" ")
      .trim();
    var routeVal = Object.values(Route)[index] as Route;
    return { key: routeName, value: routeVal, Icon: getIcon(routeVal) };
  }
);
