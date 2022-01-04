import PropTypes from 'prop-types';
import { Listfriend, Item, Status, Avatar } from './FriendList.styled';

export default function FriendList(props) {
  const { friends } = props;
  return (
    <Listfriend class="friend-list">
      {friends.map(friend => (
        <Item class="item" key={friend.id}>
          <Status status={friend.isOnline}></Status>
          <Avatar
            class="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p class="name">{friend.name}</p>
        </Item>
      ))}
    </Listfriend>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
