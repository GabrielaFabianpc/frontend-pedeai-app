import { JSX } from "react";

export interface TabBarAdminProps {
  items: TabItem[];
}

interface TabItem {
  label: string;
  icon: JSX.Element;
  onclick?: () => void;
  active: boolean
}