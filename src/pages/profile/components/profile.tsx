import { useEffect } from 'react';

import { BACKEND_URL } from '../../../const';
import { getUserData } from '../../../store/api-action/get-user-data';
import { store } from '../../../store/store';
import { uploadAvatar } from '../../../store/api-action/uploadAvatar';
import { useAppSelector } from '../../../store/hooks';

export const Profile = (): JSX.Element => {
  useEffect(() => {
    store.dispatch(getUserData());
  }, []);

  const user = useAppSelector((store) => store.user.userData);

  const handleSelectAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      store.dispatch(uploadAvatar(files[0]));
    }
  };

  const iconUrl = user?.avatar
    ? `${BACKEND_URL}/${user.avatar}`
    : './images/avatar-icon.svg';

  return (
    <section className="profile">
      <div className="profile__avatar">
        <img className="profile__avatar__image" alt="avatar" src={iconUrl} />
        <label htmlFor="avatar-input">
          <img
            className="profile__avatar__edit"
            alt="avatar edit icon"
            src="./images/pencil.png"
          />
        </label>
        <input
          id="avatar-input"
          multiple={false}
          className="visually-hidden"
          type="file"
          accept="image/*"
          onChange={handleSelectAvatar}
        />
      </div>
      <p className="profile__name">{user?.name}</p>
    </section>
  );
};
