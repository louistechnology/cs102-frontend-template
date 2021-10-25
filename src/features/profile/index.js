import Button from "../../components/button";
import TextInput from "../../components/textInput";
import { useEffect, useState } from "react";
import Container from "../../components/container";

const ProfilePage = () => {
  const [profile, setProfile] = useState({});

  const [isModified, setIsModified] = useState(false);

  // On Component Loaded
  useEffect(() => {
    fetchCurrentProfile();
  }, []);

  const fetchCurrentProfile = () => {
    // profile = apiService.getProfile()
    const profile = {
      email: "abc@gmail.com",
      name: "",
      age: 10,
      photo: ""
    };
    // Set initial state
    setProfile(profile);
    setIsModified(false);
  };

  const updateFormData = (key, value) => {
    if (profile[key] !== value) {
      setIsModified(true);
    }

    setProfile({
      ...profile,
      [key]: value
    });
  };

  const onUpdateBtnClick = () => {
    // apiService.updateProfile({profile})
    alert("Updating profile...");
  };

  const onResetBtnClick = () => {
    // reload current profile
    fetchCurrentProfile();
  };

  return (
    <Container title="Profile Page">
      <TextInput
        label="Email"
        type="text"
        value={profile["email"]}
        onValueChange={(val) => updateFormData("email", val)}
      />
      <TextInput
        label="Name"
        type="text"
        value={profile["name"]}
        onValueChange={(val) => updateFormData("name", val)}
      />
      <TextInput
        label="New Password"
        type="password"
        value={profile["password"]}
        onValueChange={(val) => updateFormData("password", val)}
      />
      <Button disabled={!isModified} onClick={() => onUpdateBtnClick()}>
        Update
      </Button>{" "}
      <Button disabled={!isModified} onClick={() => onResetBtnClick()}>
        Reset
      </Button>
    </Container>
  );
};

export default ProfilePage;
