import { css } from "@emotion/react";
import { CircleLoader } from "react-spinners";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #36d7b7;
`;

function Loading({isLoading }) {
  return (
    <div className="sweet-loading">
      <CircleLoader color='#36d7b7' loading={isLoading} css={override} size={50} />
    </div>
  );
}

export default Loading;