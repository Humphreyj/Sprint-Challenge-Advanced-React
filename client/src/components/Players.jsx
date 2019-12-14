import React from 'react';
import Player from './Player';
// import styled from 'styled-components';

const Players = (props) => {

  
    return (
        <div>
            {
                props.data.map(player => {
                    return (
                        <Player
                        name={player.name}
                        country={player.country} />
                        
                    )
                })
            }
            
        </div>
    );
}

export default Players;
