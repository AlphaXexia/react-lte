import { user1, user3, user8 } from './images';

const messageNavData = [
  {
    id: 1,
    href: '#',
    avatar: user1,
    user: 'Brad Diesel',
    message: 'Call me whenever you can...',
    date: '4 Hours Ago',
    color: 'danger',
  },
  {
    id: 2,
    href: '#',
    avatar: user8,
    user: 'John Pierce',
    message: 'I got your message bro',
    date: '4 Hours Ago',
    color: 'muted',
  },
  {
    id: 3,
    href: '#',
    avatar: user3,
    user: 'Nora Silvester',
    message: 'The subject goes here',
    date: '4 Hours Ago',
    color: 'warning',
  },
];

const notifNavData = [
  {
    id: 1,
    href: '#',
    message: '4 new messages',
    date: '3 mins',
  },
  {
    id: 2,
    href: '#',
    message: '8 friend requests',
    date: '12 hours',
  },
  {
    id: 3,
    href: '#',
    message: '3 new reports',
    date: '2 days',
  },
];

export { messageNavData, notifNavData };
