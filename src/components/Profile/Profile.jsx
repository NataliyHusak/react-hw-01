import React from 'react';
import PropTypes from 'prop-types';

import styles from './profile.module.css';

const Profile = ({
  user: {
    userName,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => (
  <div className={styles.container}>
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={userName} className={styles.avatar} />
        <p className={styles.name}>{userName}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}> {followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}> {views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}> {likes}</span>
        </li>
      </ul>
    </div>
  </div>
);

Profile.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};

export default Profile;
