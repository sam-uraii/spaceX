import { Redirect } from "expo-router";
import { HOME_SCREEN } from "../Constants/ScreensConstant";

export default function Page() {
  return <Redirect href={HOME_SCREEN} />;
}
