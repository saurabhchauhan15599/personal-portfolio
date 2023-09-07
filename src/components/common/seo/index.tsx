/* eslint-disable import/named */
import { Helmet, HelmetProps } from 'react-helmet-async';

export interface SeoProps extends HelmetProps {
  title: string;
  children?: React.ReactNode;
}

function Seo(props: SeoProps) {
  const { title, children, ...otherProps } = props;
  return (
    <Helmet {...otherProps}>
      <title>{`${import.meta.env.REACT_APP_SITE_TITLE} - ${title}`}</title>
      {children}
    </Helmet>
  );
}
export default Seo;
