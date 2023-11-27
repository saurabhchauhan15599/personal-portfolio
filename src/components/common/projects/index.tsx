import {
  CardActions,
  CardContent,
  Card as MuiCard,
  Typography as MuiTypography
} from '@mui/material';
import { Card, DocumentRow, Modal, Typography } from '@saurabh-chauhan/sc-components-library';
import { useState } from 'react';
import { PROJECTS_MAP } from '../../../helpers/constant';
import ImageCarousel from '../carousel';
import css from './index.module.scss';

const AddProjects: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<(typeof PROJECTS_MAP)[0]>();
  return (
    <div className={css.container} id="projects-section">
      <section className={css.title}>
        <Typography className={css.label}>Projects,</Typography>
      </section>
      <section className={css.grid}>
        {PROJECTS_MAP.map((val, index) => {
          return (
            <Card
              key={index}
              className={css.card}
              onClick={() => {
                setOpen(!open);
                setData(val);
              }}
            >
              <Typography variant="h3" className={css.subtext}>
                {val.label}
              </Typography>
              <img src={val.image} alt={val.label} className={css.logo} />
            </Card>
          );
        })}
      </section>
      <Modal
        open={open}
        disableAutoFocus
        onClose={() => setOpen(!open)}
        style={{ overflowY: 'scroll' }}
      >
        <MuiCard sx={{ height: '80%', width: '70%', overflowY: 'scroll', borderRadius: '8px' }}>
          <ImageCarousel />
          <CardContent>
            <Typography variant="h5">{data?.label}</Typography>
            <MuiTypography variant="body2" color="text.secondary">
              {data?.desc}
            </MuiTypography>
          </CardContent>
          <CardActions>
            <DocumentRow.View title="Link" document={data?.link as string} />
          </CardActions>
        </MuiCard>
      </Modal>
    </div>
  );
};

export default AddProjects;
