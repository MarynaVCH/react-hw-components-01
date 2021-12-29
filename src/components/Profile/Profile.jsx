import PropTypes from 'prop-types';
import {
  ProfileCard,
  Image,
  Username,
  Description,
  Stats,
  Items,
  Quantity,
} from './Profile.styled';

export default function Profile(props) {
  const {
    avatar,
    username,
    location,
    tag,
    stats: { followers, views, likes },
  } = props;
  return (
    <ProfileCard class="profile">
      <Description class="description">
        <Image src={avatar} alt="User avatar" class="avatar" width="200" />
        <Username class="name">{username}</Username>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </Description>

      <Stats class="stats">
        <Items>
          <Quantity class="label">Followers</Quantity>
          <Quantity class="quantity">{followers}</Quantity>
        </Items>
        <Items>
          <Quantity class="label">Views</Quantity>
          <Quantity class="quantity">{views}</Quantity>
        </Items>
        <Items>
          <Quantity class="label">Likes</Quantity>
          <Quantity class="quantity">{likes}</Quantity>
        </Items>
      </Stats>
    </ProfileCard>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
