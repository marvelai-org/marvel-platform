import { TOOLS_ID } from '@/constants/tools';

import AIResistantResponse from './AIResistantResponse';
import ConnectWithThemResponse from './ConnectWithThemResponse';
import FlashCardList from './FlashCardList';
import PresentationGenerator from './PresentationGenerator';
import QuizResponse from './QuizResponse';
import RubricGeneratorResponse from './RubricGeneratorResponse';
import SyllabusGeneratorResponse from './SyllabusGeneratorResponse';
import WorksheetGeneratorResponse from './WorksheetGeneratorResponse';
import WritingFeedbackResponse from './WritingFeedbackResponse';

const RESPONSE_OUTPUTS = {
  [TOOLS_ID.FLASHCARDS_GENERATOR]: FlashCardList,
  [TOOLS_ID.QUIZ_GENERATOR]: QuizResponse,
  [TOOLS_ID.WORKSHEET_GENERATOR]: WorksheetGeneratorResponse,
  [TOOLS_ID.SYLLABUS_GENERATOR]: SyllabusGeneratorResponse,
  [TOOLS_ID.AI_RESISTANCE_ASSIGNMENTS_GENERATOR]: AIResistantResponse,
  [TOOLS_ID.WRITING_FEEDBACK_GENERATOR]: WritingFeedbackResponse,
  [TOOLS_ID.RUBRIC_GENERATOR]: RubricGeneratorResponse,
  [TOOLS_ID.CONNECT_WITH_THEM]: ConnectWithThemResponse,
  [TOOLS_ID.PRESENTATION_GENERATOR]: PresentationGenerator,
};

export default RESPONSE_OUTPUTS;
