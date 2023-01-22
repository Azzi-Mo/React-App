import styled from 'styled-components';
import {pink , white} from '../../Colors'
import {motion} from 'framer-motion'
import { Column } from '../../globalStyle';

export const ContentRow  = styled.div`

    display:flex;
    margin:0 -15px -15px -15px;
    flex-wrap:wrap;
    align-items:center;
    flex-direction:${({reverse})=> reverse ? 'row-reverse':'row'};
    justify-content:space-around;
`
export const ContentColumn  = styled(motion.div)`
    margin-bottom:1rem;
    padding: 0 15px;
    flex:1;
    display:flex;
    flex-direction:column;

    @media screen and (max-width:768px){
        max-width:100% !important;
        flex-basis:100%;
        justify-content:center;
        align-items:center

    }

`
export const SmallColumn = styled(ContentColumn)`

width:100%;
max-width:${({bigImage}) => bigImage ? '40%':'50%'}

`

export const BigColumn = styled(ContentColumn)`

width:100%;
max-width:${({bigImage}) => bigImage ? '60%':'50%'}

`

export const TextWrapper  = styled.div`

max-width:540px;
padding-top:0;

@media screen and (max-width:768px)
{
    padding-bottom:65px;
    > h1 ,
    p{
        text-align:center;
    }
    display:flex;
    flex-direction:column;
    align-items:center;

}
> img {
    width:300px;
    margin-left:-3px;

}

`
export const ImgWrapper = styled(motion.div)`

display:flex;
justify-content:${({imgStart}) => imgStart ? 'flex-start':'flex-end'}

`