import { Helmet, HelmetProps } from 'react-helmet-async';

export interface SeoProps extends HelmetProps {
  title: string;
  children?: React.ReactNode;
}

function Seo(props: SeoProps) {
  const { title, children, ...otherProps } = props;
  const siteTitle = import.meta.env.REACT_APP_SITE_TITLE ?? 'Portfolio';
  const pageTitle = title?.trim() ? `${siteTitle} - ${title}` : siteTitle;

  return (
    <Helmet {...otherProps}>
      <title>{pageTitle}</title>
      {children}
    </Helmet>
  );
}
export default Seo;
