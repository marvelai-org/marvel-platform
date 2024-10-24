import MainAppLayout from '@/layouts/MainAppLayout';
import DiscoveryLibrary from '@/templates/Chat/DiscoveryLibrary';

const MarvelDiscovery = () => {
  localStorage.removeItem('sessionId');
  return <DiscoveryLibrary />;
};

MarvelDiscovery.getLayout = function getLayout(page) {
  return <MainAppLayout>{page}</MainAppLayout>;
};

export default MarvelDiscovery;
