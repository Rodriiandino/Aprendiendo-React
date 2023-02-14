import React from 'react';

const user = {
  name: 'Rodrigo Andino',
  imageUrl: 'https://unavatar.io/Rodriiandino',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <h4
        style={{
          display: 'inline',
        }}
      >
        {user.name}
      </h4>
    </>
  );
}
