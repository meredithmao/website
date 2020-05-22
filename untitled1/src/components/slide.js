import React from 'react'
import { css, jsx } from '@emotion/core'

const Slide = ({content}) => (
    <div
        css={css`
        height: 100;
        with: 100%;
        background-image: url('${content}');
        background-size: cover;
        bacground-repeat: no-repeat;
        background-position: center;
        `}
    />
)

export default Slide