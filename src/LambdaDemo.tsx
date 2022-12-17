import React, { useState } from 'react';

interface LambdaDemoState {
    loading: boolean;
    msg: string | null;
}

const LambdaDemo: React.FC = () => {
    const [state, setState] = useState<LambdaDemoState>({
        loading: false,
        msg: null,
    });

    const handleClick = (api: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setState({msg: "Loading...", loading: true });
        fetch(`/.netlify/functions/${api}`)
            .then(response => response.json())
            .then(json => setState({ loading: false, msg: json.msg }));
    };

    const { loading, msg } = state;

    return (
        <p>
            <button onClick={handleClick('hello')}>Call Lambda</button>
            <button onClick={handleClick('async-dadjoke')}>Call Async Lambda</button>
            <br />
            <span>{msg}</span>
        </p>
    );
};

export default LambdaDemo;