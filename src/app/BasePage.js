import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { MyPage } from "./pages/MyPage";

export default function BasePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        <Redirect exact from="/" to="/mypage" />
        <ContentRoute path="/mypage" component={MyPage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
