/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@/components/shadcn/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/shadcn/ui/dropdown-menu';
import { useMediaQuery } from '@mui/material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AlertSuccess from '../../../assets/icons/AlertSuccess';
import { DARK_MODE_MAP, primaryNavigation, secondaryNavigation } from '../../../helpers/constant';
import { AppContext } from '../../../helpers/hooks/AppContext';
import Divider from '../../base/divider';
import Typography from '../../base/typography';
import ThemeToggler from '../switch';
import css from './index.module.scss';
import { ChevronDown } from 'lucide-react';

interface IHeader {
  theme?: string;
  setTheme?: (theme: string) => void;
}

const Header = (props: IHeader) => {
  const [open, setOpen] = useState(false);
  const { appDispatch } = useContext(AppContext);
  const { theme, setTheme = () => {} } = props;
  const mobileLayout = useMediaQuery('(max-width:480px)');

  return (
    <div className={css.header}>
      <section className={css.title}>
        <Typography variant="h2" className={css.text}>
          {!mobileLayout && <AlertSuccess />} Saurabh Chauhan
        </Typography>
      </section>
      <section className={css.links}>
        <div className={css.primary}>
          {primaryNavigation.map((val, index) => {
            return (
              <Typography key={index} className={css.link}>
                <Link to={val.link}>{val.label}</Link>
              </Typography>
            );
          })}
        </div>
        {!mobileLayout && <Divider className={css.divider} />}
        <div>
          <ThemeToggler
            checked={theme === DARK_MODE_MAP.dark}
            onChange={() => {
              setTheme(theme === DARK_MODE_MAP.light ? DARK_MODE_MAP.dark : DARK_MODE_MAP.light);
              appDispatch({
                type: 'setTheme',
                payload: {
                  theme: theme === DARK_MODE_MAP.light ? DARK_MODE_MAP.dark : DARK_MODE_MAP.light
                }
              });
            }}
          />
        </div>
        {!mobileLayout && <Divider className={css.divider} />}
        {!mobileLayout && (
          <div className={css.secondary}>
            {secondaryNavigation.map((val, index) => {
              return (
                <a href={val.link} target="_blank" rel="noopener noreferrer" key={index}>
                  <val.component
                    className={css.logo}
                    color={theme === DARK_MODE_MAP.dark ? '#fff' : '#000000'}
                  />
                </a>
              );
            })}
          </div>
        )}
      </section>
      {mobileLayout && (
        <DropdownMenu open={open} onOpenChange={() => setOpen(!open)}>
          <DropdownMenuTrigger asChild>
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {secondaryNavigation.map((val, index, array) => {
              return (
                <>
                  <DropdownMenuLabel>
                    <a href={val.link} target="_blank" rel="noopener noreferrer" key={index}>
                      {val.label}
                    </a>
                  </DropdownMenuLabel>
                  {index !== array.length - 1 && <DropdownMenuSeparator />}
                </>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default Header;
