import SettingNotification from "../../Components/SettingNotification";
import SettingPersonal from "../../Components/SettingPersonal";
import SettingProfile from "../../Components/SettingProfile";
import LayoutSetting from "../../Layout/LayoutSetting";

export default function Setting() {
  return (
    <>
      <LayoutSetting>
        <SettingProfile />
        <SettingPersonal />
        <SettingNotification />
      </LayoutSetting>
    </>
  );
}
