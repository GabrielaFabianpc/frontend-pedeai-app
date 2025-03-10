export interface IUserTabBarProps {
    pageActive: string;
    onNavigate: (page: string) => void;
    itemCount?: number;
  }