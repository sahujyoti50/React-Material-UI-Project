import { Typography } from "@mui/material";
import { Button, Stack } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AccessibleIcon from "@mui/icons-material/Accessible";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
function App() {
  return (
    <>
      <Stack direction="row" marginBottom={2} spacing={2}>
        <Button variant="text" color="success" startIcon={<AccessibleIcon />}>
          AccessibleIcon
        </Button>
        <Button variant="contained" startIcon={<AccessAlarmIcon />}>
          AccessAlarmIcon
        </Button>
        <Button
          variant="outlined"
          color="warning"
          startIcon={<BabyChangingStationIcon />}
        >
          BabyChangingStationIcon
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} marginBottom={2}>
        <Button variant="text" href="https://google.com">
          text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">obtained</Button>
        <Button variant="contained" color="success">
          contained1
        </Button>
        <Button variant="outlined" color="warning">
          obtained1
        </Button>
        <Button variant="text" color="error">
          text
        </Button>
      </Stack>
      <Stack spacing={2} direction="row" marginBottom={2}>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <Stack spacing={2} direction="row" marginBottom={2}>
        <Button variant="text" color="primary">
          primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
        <Button variant="text" color="success">
          success
        </Button>
        <Button variant="text" color="primary">
          success
        </Button>
      </Stack>
      <Stack direction="row" display="block" spacing={2} marginBottom={2}>
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
        <Button variant="contained" size="small" color="error">
          small
        </Button>
        <Button variant="contained" size="medium" color="success">
          medium
        </Button>
        <Button variant="contained" size="medium" color="secondary">
          medium
        </Button>
        <Button variant="contained" size="large" color="primary">
          large
        </Button>
      </Stack>

      {/* //Typography //gutterBottom //variant property //component */}
      <Stack textAlign="center" marginBottom={2} direction="row" spacing={2}>
        <Typography variant="h1" color="error">
          h1
        </Typography>
        <Typography variant="h2" color="secondary">
          h2
        </Typography>
        <Typography variant="h3" color="error">
          h3
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          h4
        </Typography>
        <Typography variant="h5" color="error">
          h5
        </Typography>
        <Typography variant="h6" color="primary">
          h6
        </Typography>
        <Typography variant="subtitle1" color="primary">
          subtitle1
        </Typography>
        <Typography variant="subtitle2" color="secondary">
          subtitle2
        </Typography>
        <Typography variant="body1" color="error">
          body1
        </Typography>
        <Typography variant="body2" color="secondary">
          body2
        </Typography>
      </Stack>
    </>
  );
}

export default App;
