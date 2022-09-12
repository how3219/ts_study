import React, { memo } from 'react';
interface LoadingTypes {
  isloading: boolean;
}

const Loading: ({ isloading }: LoadingTypes) => JSX.Element = (props) => {
  const { isloading = false } = props;

  return isloading ? (
    <div className="custom-overlay">
      <svg className="circular">
        <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10" />
      </svg>
    </div>
  ) : (
    <></>
  );
};
export default memo(Loading);
