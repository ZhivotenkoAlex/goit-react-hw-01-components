import defaultImage from "../images/default.jpg";
import PropTypes from 'prop-types'
import s from './FriendList.module.css'

const Friend = ({ avatar, name, isOnline, id}) => (
    <li className={s.item}
        key={id}>
        <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
    </li>
);

Friend.defaultProps = {
   avatar: defaultImage
};

Friend.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
    
}
        
export default Friend;