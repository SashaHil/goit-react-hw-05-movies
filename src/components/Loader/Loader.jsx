import { TailSpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <TailSpin
      height="80"
      width="80"
      color="orangered"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
      wrapperClass=""
      visible={true}
    />
  );
};
