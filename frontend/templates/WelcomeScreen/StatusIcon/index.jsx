import IconDoing from '@/assets/svg/IconProcessDoing';
import IconDone from '@/assets/svg/IconProcessDone';
import IconUndo from '@/assets/svg/IconProcessUndo';

/**
 * Maps status to corresponding icon components.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.status - The current status ("done", "doing", "undo").
 * @return {JSX.Element} The corresponding icon component.
 */
const statusComMap = (props) => {
  const { status, item, ...rest } = props;

  if (status === 'done') {
    return <IconDone {...rest} />;
  }
  if (status === 'doing') {
    return <IconDoing {...rest} />;
  }
  return <IconUndo {...rest} />;
};

export default statusComMap;
