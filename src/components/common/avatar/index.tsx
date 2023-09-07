import { ButtonHTMLAttributes, memo } from 'react';
import { Image, ImageProps } from '../../../components/base';
import css from './index.module.scss';

interface AvatarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  alt: string;
  imageProps?: ImageProps;
  size?: 24 | 32 | 40;
}

const Avatar = (props: AvatarProps) => {
  const { src, alt, imageProps, size, style, ...otherProps } = props;
  return (
    <button {...otherProps} style={{ width: size, height: size, ...style }} className={css.avatarBtn}>
      <Image {...imageProps} src={src} alt={alt} fallbackText={alt} fallbackClass={css.avatarFallback} />
    </button>
  );
};

Avatar.defaultProps = {
  size: 40,
};

export default memo(Avatar);
export type { AvatarProps };
