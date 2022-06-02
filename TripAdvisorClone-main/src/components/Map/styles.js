import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    paper: {
        padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '105px',
    },
    mapContainer: {
        height: '90vh', width: '100%',
    },
    markerContainer: {
        position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
    },
    pointer: {
        cursor: 'pointer',
    },
}));