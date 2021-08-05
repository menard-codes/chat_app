import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #36d7b7;
`;

function Sending({ isLoading }) {
  return (
    <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
        <div>
            <BeatLoader color='#36d7b7' loading={isLoading} css={override} size={15} />
        </div>
    </div>
  );
}

export default Sending;
