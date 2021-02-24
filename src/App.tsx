import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import { Route as Routes, routeLabels } from "./types/Route";
import { LandingRoute } from "./routes/LandingRoute";
import { SampleWorkAndSkillsRoute } from "./routes/SampleWorkAndSkillsRoute";
import { AppContainer } from "./state/AppState";
import { useStyles } from "./styles/Styles";

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const { appState, toggleDrawer } = AppContainer.useContainer();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: appState.drawer,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => toggleDrawer(true)}
            edge="start"
            className={clsx(
              classes.menuButton,
              appState.drawer && classes.hide
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap>
            Harry Gillingham
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={appState.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => toggleDrawer(false)}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {routeLabels.map((route) => (
            <Link
              to={route.value}
              style={{ textDecoration: "none", color: "black" }}
              key={route.key}
            >
              <ListItem button>
                <ListItemIcon>
                  <route.Icon />
                </ListItemIcon>
                <ListItemText primary={route.key} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: appState.drawer,
        })}
      >
        <div className={classes.drawerHeader} />
        <Switch>
          <Route path={Routes.Home}>
            <LandingRoute />
          </Route>
          <Route path={Routes.SampleWorkAndSkills}>
            <SampleWorkAndSkillsRoute />
          </Route>
          <Route>
            <Redirect to={Routes.Home} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
