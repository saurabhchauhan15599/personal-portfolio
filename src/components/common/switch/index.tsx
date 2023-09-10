import Switch from '@mui/joy/Switch';
import DarkMode from '../../../assets/icons/Darkmode';
import DarkmodeOutlined from '../../../assets/icons/DarkmodeOutlined';

interface ISwitch {
  checked: boolean;
  onChange: (event: React.ChangeEvent) => void;
}

const ThemeToggler = (props: ISwitch) => {
  const { checked, onChange } = props;

  return (
    <Switch
      checked={checked}
      onChange={onChange}
      slotProps={{
        input: { 'aria-label': 'Dark mode' },
        thumb: {
          children: checked ? <DarkMode /> : <DarkmodeOutlined />
        }
      }}
      sx={{
        '--Switch-thumbSize': '28px'
      }}
    />
  );
};

export default ThemeToggler;
