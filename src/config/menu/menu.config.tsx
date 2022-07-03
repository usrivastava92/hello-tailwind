import HomeIcon from '@mui/icons-material/Home';
import BentoIcon from '@mui/icons-material/Bento';
import BoltIcon from '@mui/icons-material/Bolt';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FolderIcon from '@mui/icons-material/Folder';
import DraftsIcon from '@mui/icons-material/Drafts';
import GroupIcon from '@mui/icons-material/Group';
import BadgeIcon from '@mui/icons-material/Badge';
import MoneyIcon from '@mui/icons-material/Money';
import MessageIcon from '@mui/icons-material/Message';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import AddCommentIcon from '@mui/icons-material/AddComment';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import InputIcon from '@mui/icons-material/Input';
import InboxIcon from '@mui/icons-material/Inbox';
import WidgetsIcon from '@mui/icons-material/Widgets';
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';
import AppsIcon from '@mui/icons-material/Apps';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export interface IMenuItem {
  id: string;
  isOpen: boolean;
  icon: JSX.Element;
  displayName: string;
  routerLink?: string;
  isActive?: boolean;
  nesterItems?: IMenuItem[];
}

export const MENU_ITEMS: IMenuItem[] = [
  {
    displayName: 'Dashboard',
    isOpen: false,
    id: 'dashboard',
    icon: <HomeIcon />,
    routerLink: '/',
    isActive: true
  },
  {
    displayName: 'Menu Layout',
    isOpen: false,
    id: 'menuLayout',
    icon: <BentoIcon />,
    nesterItems: [
      {
        displayName: 'Side Menu',
        isOpen: false,
        id: 'sideMenu',
        icon: <BoltIcon />,
        routerLink: '/side'
      },
      {
        displayName: 'Simple Menu',
        isOpen: false,
        id: 'simpleMenu',
        icon: <BoltIcon />,
        routerLink: '/simple'
      },
      {
        displayName: 'TopMenu',
        isOpen: false,
        id: 'topMenu',
        icon: <BoltIcon />,
        routerLink: '/top'
      }
    ]
  },
  {
    displayName: 'Apps',
    isOpen: false,
    id: 'apps',
    icon: <AppsIcon />,
    nesterItems: [
      {
        displayName: 'Users',
        isOpen: false,
        id: 'apps/users',
        icon: <GroupIcon />,
        nesterItems: [
          {
            displayName: 'Layout 1',
            isOpen: false,
            id: 'apps/users/layout1',
            routerLink: 'usersLayout1',
            icon: <FlashOnIcon />
          },
          {
            displayName: 'Layout 2',
            isOpen: false,
            id: 'apps/users/layout2',
            routerLink: 'usersLayout2',
            icon: <FlashOnIcon />
          },
          {
            displayName: 'Layout 3',
            isOpen: false,
            id: 'apps/users/layout3',
            routerLink: 'usersLayout3',
            icon: <FlashOnIcon />
          }
        ]
      },
      {
        displayName: 'Profile',
        isOpen: false,
        id: 'profile',
        icon: <BadgeIcon />,
        nesterItems: [
          {
            displayName: 'Overview 1',
            isOpen: false,
            id: 'apps/profile/overview1',
            routerLink: 'profileOverview1',
            icon: <FlashOnIcon />
          },
          {
            displayName: 'Overview 2',
            isOpen: false,
            id: 'apps/profile/overview2',
            routerLink: 'profileOverview2',
            icon: <FlashOnIcon />
          },
          {
            displayName: 'Overview 3',
            isOpen: false,
            id: 'apps/profile/overview3',
            routerLink: 'profileOverview3',
            icon: <FlashOnIcon />
          }
        ]
      },
      {
        displayName: 'Inbox',
        isOpen: false,
        id: 'inbox',
        icon: <DraftsIcon />,
        nesterItems: [],
        routerLink: 'inbox'
      },
      {
        displayName: 'File Manager',
        isOpen: false,
        id: 'fileManager',
        nesterItems: [],
        routerLink: 'fileManager',
        icon: <FolderIcon />
      },
      {
        displayName: 'Point of Sale',
        isOpen: false,
        id: 'pointOfSale',
        nesterItems: [],
        routerLink: 'pointOfSale',
        icon: <MoneyIcon />
      },
      {
        displayName: 'Chat',
        isOpen: false,
        id: 'chat',
        icon: <MessageIcon />,
        nesterItems: [],
        routerLink: 'chat'
      },
      {
        displayName: 'Post',
        isOpen: false,
        id: 'post',
        icon: <AddCommentIcon />,
        nesterItems: [],
        routerLink: 'post'
      },
      {
        displayName: 'Crud',
        isOpen: false,
        id: 'crud',
        icon: <KeyboardIcon />,
        nesterItems: [
          {
            displayName: 'Data List',
            isOpen: false,
            icon: <FormatListBulletedIcon />,
            id: 'apps/crud/datalist',
            routerLink: 'curdDataList'
          },
          {
            displayName: 'Form',
            isOpen: false,
            id: 'apps/crud/form',
            routerLink: 'crudForm',
            icon: <InputIcon />
          }
        ]
      }
    ]
  },
  {
    displayName: 'Pages',
    isOpen: false,
    id: 'pages',
    icon: <AutoStoriesIcon />,
    nesterItems: [
      {
        displayName: 'Wizards',
        isOpen: false,
        id: 'pages/wizards',
        icon: <BoltIcon />,
        nesterItems: [
          {
            displayName: 'Layout 1',
            isOpen: false,
            id: 'pages/wizards/layout1',
            routerLink: 'wizardLayout1',
            icon: <FlashOnIcon />
          },
          {
            displayName: 'Layout 2',
            isOpen: false,
            id: 'pages/wizards/layout2',
            routerLink: 'wizardLayout2',
            icon: <FlashOnIcon />
          },
          {
            displayName: 'Layout 3',
            isOpen: false,
            id: 'pages/wizards/layout3',
            routerLink: 'wizardLayout3',
            icon: <FlashOnIcon />
          }
        ]
      },
      {
        displayName: 'Blog',
        isOpen: false,
        id: 'blog',
        icon: <BoltIcon />,
        nesterItems: [
          {
            displayName: 'Layout 1',
            isOpen: false,
            id: 'pages/blog/layout1',
            routerLink: 'blogLayout1',
            icon: <FlashOnIcon />
          },
          {
            displayName: 'Layout 2',
            isOpen: false,
            id: 'pages/blog/layout2',
            routerLink: 'blogLayout2',
            icon: <FlashOnIcon />
          },
          {
            displayName: 'Layout 3',
            isOpen: false,
            id: 'pages/blog/layout3',
            routerLink: 'blogLayout3',
            icon: <FlashOnIcon />
          }
        ]
      },
      {
        displayName: 'Pricing',
        isOpen: false,
        id: 'pricing',
        icon: <BoltIcon />,
        nesterItems: [
          {
            displayName: 'Layout 1',
            isOpen: false,
            id: 'pages/pricing/layout1',
            routerLink: 'pricingLayout1',
            icon: <FlashOnIcon />
          },
          {
            displayName: 'Layout 2',
            isOpen: false,
            id: 'pages/pricing/layout2',
            routerLink: 'pricingLayout2',
            icon: <FlashOnIcon />
          }
        ]
      },
      {
        displayName: 'Invoice',
        isOpen: false,
        id: 'invoice',
        icon: <BoltIcon />,
        nesterItems: [
          {
            displayName: 'Layout 1',
            isOpen: false,
            id: 'pages/invoice/layout1',
            routerLink: 'invoiceLayout1',
            icon: <FlashOnIcon />
          },
          {
            displayName: 'Layout 2',
            isOpen: false,
            id: 'pages/invoice/layout2',
            routerLink: 'invoiceLayout2',
            icon: <FlashOnIcon />
          }
        ]
      },
      {
        displayName: 'FAQ',
        isOpen: false,
        id: 'faq',
        icon: <BoltIcon />,
        nesterItems: [
          {
            displayName: 'Layout 1',
            isOpen: false,
            id: 'pages/faq/layout1',
            routerLink: 'faqLayout1',
            icon: <FlashOnIcon />
          },
          {
            displayName: 'Layout 2',
            isOpen: false,
            id: 'pages/faq/layout2',
            routerLink: 'faqLayout2',
            icon: <FlashOnIcon />
          },
          {
            displayName: 'Layout 3',
            isOpen: false,
            id: 'pages/faq/layout3',
            routerLink: 'faqLayout3',
            icon: <FlashOnIcon />
          }
        ]
      },
      {
        displayName: 'Login',
        isOpen: false,
        id: 'login',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: '/login'
      },
      {
        displayName: 'Register',
        id: 'register',
        isOpen: false,
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: '/register'
      },
      {
        displayName: 'Error Page',
        isOpen: false,
        id: 'errorPage',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: '/error'
      },
      {
        displayName: 'Update Profile',
        isOpen: false,
        id: 'updateProfile',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'updateProfile'
      },
      {
        displayName: 'Change Password',
        isOpen: false,
        id: 'changePassword',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'changePassword'
      }
    ]
  },
  {
    displayName: 'Components',
    isOpen: false,
    id: 'components',
    icon: <InboxIcon />,
    nesterItems: [
      {
        displayName: 'Grid',
        isOpen: false,
        id: 'components/grid',
        icon: <BoltIcon />,
        nesterItems: [
          {
            displayName: 'Regular Table',
            isOpen: false,
            id: 'components/regularTable',
            icon: <FlashOnIcon />,
            routerLink: 'regularTable'
          },
          {
            displayName: 'Tabulator',
            isOpen: false,
            id: 'components/tabulator',
            icon: <FlashOnIcon />,
            routerLink: 'tabulator'
          }
        ]
      },
      {
        displayName: 'Accordion',
        isOpen: false,
        id: 'components/accordion',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'accordion'
      },
      {
        displayName: 'Button',
        isOpen: false,
        id: 'components/button',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'buttons'
      },
      {
        displayName: 'Modal',
        isOpen: false,
        id: 'components/modal',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'modal'
      },
      {
        displayName: 'Alert',
        isOpen: false,
        id: 'components/alert',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'alerts'
      },
      {
        displayName: 'Chip',
        isOpen: false,
        id: 'components/chips',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'chips'
      },
      {
        displayName: 'Progress Bar',
        isOpen: false,
        id: 'components/progressbar',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'progressbar'
      },
      {
        displayName: 'Tooltip',
        isOpen: false,
        id: 'components/tooltip',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'tooltips'
      },
      {
        displayName: 'Dropdown',
        isOpen: false,
        id: 'components/dropdown',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'dropdown'
      },
      {
        displayName: 'Toast',
        isOpen: false,
        id: 'components/toast',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'toast'
      },
      {
        displayName: 'Typography',
        isOpen: false,
        id: 'components/typography',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'typography'
      },
      {
        displayName: 'Icon',
        isOpen: false,
        id: 'components/icon',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'icon'
      },
      {
        displayName: 'Loading Icon',
        isOpen: false,
        id: 'components/loadingIcon',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'loadingIcon'
      }
    ]
  },
  {
    displayName: 'Forms',
    isOpen: false,
    id: 'forms',
    icon: <RemoveFromQueueIcon />,
    nesterItems: [
      {
        displayName: 'Regular Form',
        isOpen: false,
        id: 'forms/regularForm',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'regularForm'
      },
      {
        displayName: 'Datepicker',
        isOpen: false,
        id: 'forms/datePicker',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'datepicker'
      },
      {
        displayName: 'Tail Select',
        isOpen: false,
        id: 'forms/tailSelect',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'tailSelect'
      },
      {
        displayName: 'File Upload',
        isOpen: false,
        id: 'forms/fileUpload',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'fileUpload'
      },
      {
        displayName: 'Wysiwyg Editor',
        isOpen: false,
        id: 'forms/wysiwygEditor',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'wysiwygEditor'
      },
      {
        displayName: 'Validation',
        isOpen: false,
        id: 'forms/validation',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'validation'
      }
    ]
  },
  {
    displayName: 'Widgets',
    id: 'widgets',
    isOpen: false,
    icon: <WidgetsIcon />,
    nesterItems: [
      {
        displayName: 'Chart',
        isOpen: false,
        id: 'widgets/chart',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'chart'
      },
      {
        displayName: 'Slider',
        isOpen: false,
        id: 'widgets/slider',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'slider'
      },
      {
        displayName: 'Image Zoom',
        isOpen: false,
        id: 'widgets/imageZoom',
        icon: <BoltIcon />,
        nesterItems: [],
        routerLink: 'imageZoom'
      }
    ]
  }
];
