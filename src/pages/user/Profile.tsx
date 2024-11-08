import { ProfileActions } from "@/components/page-components/ProfileActions";
import { ProfileData } from "@/components/page-components/ProfileData";

const Profile = () => {
  return (
    <>
      <div>
        <ProfileData />
      </div>
      <div>
        <ProfileActions />
      </div>
    </>
  );
};

export default Profile;
