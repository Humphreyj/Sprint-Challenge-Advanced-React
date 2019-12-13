import React from 'react';
import styled from 'styled-components';
const Player = (props) => {
    const PlayerWrap = styled.div`
        display: flex;
        justify-content: space-between;
        width: 70%;
        margin: 0 auto;

        &:nth-child(odd) {
            background-color: grey;
        }
    `
    return (
        <PlayerWrap>
            <h4 className="player">{props.name}</h4>
            <h4 className="country">{props.country}</h4>
        </PlayerWrap>
    );
}

export default Player;
