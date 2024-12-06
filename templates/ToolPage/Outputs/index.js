import { TOOLS_ID } from '@/constants/tools';

import AIResistantResponse from './AIResistantResponse';
import FlashCardList from './FlashCardList';
import QuizResponse from './QuizResponse';
import SyllabusGeneratorResponse from './SyllabusGeneratorResponse';
import WorksheetGeneratorResponse from './WorksheetGeneratorResponse';

const RESPONSE_OUTPUTS = {
  [TOOLS_ID.FLASHCARDS_GENERATOR]: FlashCardList,
  [TOOLS_ID.QUIZ_GENERATOR]: QuizResponse,
  [TOOLS_ID.WORKSHEET_GENERATOR]: WorksheetGeneratorResponse,
  [TOOLS_ID.SYLLABUS_GENERATOR]: SyllabusGeneratorResponse,
  [TOOLS_ID.AI_RESISTANCE_ASSIGNMENTS_GENERATOR]: AIResistantResponse,
};

export default RESPONSE_OUTPUTS;
