import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from 'react-icons/ri';
import '../../../../../styles/stepper.css';

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    // zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className='QontoStepIcon-completedIcon' />
      ) : (
        <div className='QontoStepIcon-circle' />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: 'linear-gradient( 136deg, #E42313 0%, #E42313 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: 'linear-gradient( 136deg, #E42313 0%, #E42313 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage: 'linear-gradient( 136deg, #E42313 0%, #E42313 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage: 'linear-gradient( 136deg, #E42313 0%, #E42313 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <RiNumber1 />,
    2: <RiNumber2 />,
    3: <RiNumber3 />,
    4: <RiNumber4 />,
    5: <RiNumber5 />,
    6: <RiNumber6 />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const LabelRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  fontSize: '13px',
  color: '#fff',
  minWidth: '90px',
  marginTop: '10px',
  padding: '8px',
  display: 'flex',
  borderRadius: '25px',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage: 'linear-gradient( 136deg, #3366FF 0%, #3366FF 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage: 'linear-gradient( 136deg, #52BD94 0%, #52BD94 100%)',
  }),
}));

function RootStep(props) {
  const { active, completed, className } = props;

  const icons = {
    1: completed ? 'Selesai' : active ? 'Sedang Diisi' : 'Belum Diisi',
    2: completed ? 'Selesai' : active ? 'Sedang Diisi' : 'Belum Diisi',
    3: completed ? 'Selesai' : active ? 'Sedang Diisi' : 'Belum Diisi',
    4: completed ? 'Selesai' : active ? 'Sedang Diisi' : 'Belum Diisi',
    5: completed ? 'Selesai' : active ? 'Sedang Diisi' : 'Belum Diisi',
    6: completed ? 'Selesai' : active ? 'Sedang Diisi' : 'Belum Diisi',
  };

  return (
    <LabelRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </LabelRoot>
  );
}

RootStep.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

export default function CustomizedSteppers({ activeStep, step }) {
  return (
    <Stack sx={{ width: '60vw' }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {step.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            <StepLabel StepIconComponent={RootStep}></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}

CustomizedSteppers.propTypes = {
  handleNext: PropTypes.func.isRequired,
  activeStep: PropTypes.func.isRequired,
  step: PropTypes.func.isRequired,
};
