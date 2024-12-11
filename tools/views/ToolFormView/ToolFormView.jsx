import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import AccordionInputGroupItem from '@/components/AccordionInputGroupItem';

import styles from './styles';

import ToolRequestForm from '@/tools/components/ToolRequestForm';
import { actions as toolActions } from '@/tools/data';

const { setFormOpen } = toolActions;

/**
 * Renders a form component that displays tool details and allows interaction
 * through an accordion interface. It uses the AccordionInputGroupItem component
 * to display the tool's name and description, along with a response. This form
 * can be toggled open or closed by dispatching an action to update the state.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.toolDoc - The document containing tool information.
 * @param {boolean} props.formOpen - Indicates if the form is open.
 * @param {string} props.response - The response to display within the form.
 */
const ToolFormView = (props) => {
  const { toolDoc, formOpen, response } = props;
  const dispatch = useDispatch();

  return (
    <Grid {...styles.formGridProps}>
      <AccordionInputGroupItem
        title={toolDoc?.name}
        description={toolDoc?.description}
        response={response}
        open={formOpen}
        toggleOpen={() => dispatch(setFormOpen(!formOpen))}
      >
        <ToolRequestForm inputs={toolDoc?.inputs} id={toolDoc?.id} />
      </AccordionInputGroupItem>
    </Grid>
  );
};

export default ToolFormView;
