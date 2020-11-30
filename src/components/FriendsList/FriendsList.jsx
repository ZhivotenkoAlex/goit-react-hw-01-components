import PropTypes from 'prop-types';
import Friends from './Friend'


const FriendsList = ({ friends }) => (
    <ul>
        {friends.map(({id,avatar, name, isOnline }) => (
            <Friends
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            
        ))}
    </ul>
)

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
         id:PropTypes.number.isRequired})).isRequired

}
export default FriendsList;