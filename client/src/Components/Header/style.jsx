import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    margin: '5px',
    background: 'transparent',
    boxShadow: 'none',
    position: 'absolute',
    height: '80px',
    zIndex: 1,
  },
  appBarActive: {
    background: 'linear-gradient(90deg, #d7ccc8 0%, #a1887f 100%)',
  },
  bgImage: {
    position: 'relative',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  imgContainer: {
    height: '100%',
    boxSizing: 'border-box',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export { useStyles };
