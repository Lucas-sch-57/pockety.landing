import type { MenuItemType } from '../types/menu';

type MenuItemProps = {
  item: MenuItemType;
  variant?: 'light' | 'dark';
  isActive?: boolean;
};
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { item, variant = 'light', isActive = false } = props;

  const activeClass =
    variant === 'dark' ? 'text-primary font-semibold' : 'text-white font-semibold';

  const inactiveClass =
    variant === 'dark'
      ? 'text-gray-700 hover:text-primary'
      : 'text-white/70 hover:text-white';

  return (
    <li
      className={`cursor-pointer transition-all duration-200 ${isActive ? activeClass : inactiveClass}`}
    >
      <a href={item.link}>{item.title}</a>
    </li>
  );
};
export default MenuItem;
