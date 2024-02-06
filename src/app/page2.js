import React from 'react';

const UserForm = ({ usernameLabel, passwordLabel }) => {
  return (
    <form>
      <div>
        <label htmlFor="username">{usernameLabel}:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">{passwordLabel}:</label>
        <input type="password" id="password" name="password" />
      </div>
    </form>
  );
};

export default UserForm;
