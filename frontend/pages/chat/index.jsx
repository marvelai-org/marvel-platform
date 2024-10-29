import MainAppLayout from '@/layouts/MainAppLayout';
import Chat from '@/templates/Chat';

const MarvelChat = () => {
  // Remove the session ID from local storage when the page is load.
  localStorage.removeItem('sessionId');
  return <Chat />;
};

MarvelChat.getLayout = function getLayout(page) {
  return <MainAppLayout>{page}</MainAppLayout>;
};

export default MarvelChat;
