import { useEffect } from 'react';

import { ArrowBack } from '@mui/icons-material';
import { Grid } from '@mui/material';

import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';

import AccordionInputGroupItem from '@/components/AccordionInputGroupItem';

import GradientOutlinedButton from '@/components/GradientOutlinedButton';

import ROUTES from '@/constants/routes';

import { TOOLS_ID } from '@/constants/tools';

import FlashCardList from './FlashCardList';
import MultipleChoiceResponse from './MultipleChoiceResponse';
import styles from './styles';
import ToolForm from './ToolForm';

import { resetCommunicator, setFormOpen } from '@/redux/slices/toolsSlice';
import theme from '@/theme/theme';

const RESPONSE_OUTPUTS = {
  [TOOLS_ID.GEMINI_DYNAMO]: FlashCardList,
  [TOOLS_ID.GEMINI_QUIZIFY]: MultipleChoiceResponse,
};

const ToolPage = (props) => {
  const { toolDoc } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  const { response, formOpen } = useSelector((state) => state.tools);

  const { id } = toolDoc;

  useEffect(() => {
    return () => {
      dispatch(resetCommunicator());
    };
  }, []);

  const handleRoute = () => router.push(ROUTES.HOME);

  const renderBackButton = () => {
    return (
      <Grid {...styles.backButtonGridProps}>
        <GradientOutlinedButton
          bgcolor="#24272F"
          icon={<ArrowBack />}
          textColor="#AC92FF"
          iconPlacement="left"
          onHoverTextColor={theme.palette.Background.white2}
          clickHandler={handleRoute}
          text="Back"
          {...styles.outlinedButtonProps}
        />
      </Grid>
    );
  };

  const renderForm = () => {
    return (
      <Grid {...styles.formGridProps}>
        <AccordionInputGroupItem
          title={toolDoc?.name}
          description={toolDoc?.description}
          response={response}
          open={formOpen}
          toggleOpen={() => dispatch(setFormOpen(!formOpen))}
        >
          <ToolForm inputs={toolDoc?.inputs} id={toolDoc?.id} />
        </AccordionInputGroupItem>
      </Grid>
    );
  };

  const ToolOutputComponent = RESPONSE_OUTPUTS[id];

  return (
    <Grid {...styles.mainGridProps}>
      {renderBackButton()}
      {renderForm()}
      {!formOpen && response && <ToolOutputComponent />}
    </Grid>
  );
};
export default ToolPage;
